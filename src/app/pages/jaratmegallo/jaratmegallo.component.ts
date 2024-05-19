import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Jaratmegallo } from '../../models/jaratmegallo.model';
import { JaratmegalloService } from '../../services/jaratmegallo.service';
import { Jarat } from '../../models/jarat.model';
import { Megallohely } from '../../models/megallohely.model';
import { JaratService } from '../../services/jarat.service';
import { MegallohelyService } from '../../services/megallohely.service';

@Component({
  selector: 'app-jaratmegallo',
  templateUrl: './jaratmegallo.component.html',
  styleUrls: ['./jaratmegallo.component.css']
})
export class JaratmegalloComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(),
    jarat_id: new FormControl('', Validators.required),
    megallo_id: new FormControl('', Validators.required),
    sorszam: new FormControl('', Validators.required),
    ido_perc: new FormControl('', Validators.required)
  });

  jaratmegallok: Jaratmegallo[] = [];
  jaratok: Jarat[] = [];
  megallohelyek: Megallohely[] = [];

  getMegallohelyNevById(megalloId: string): string {
    const megallo = this.megallohelyek.find(m => m.id === megalloId);
    return megallo ? megallo.nev : '';
  }

  getJaratNevById(jaratId: string): string {
    const jarat = this.jaratok.find(m => m.id === jaratId);
    return jarat ? jarat.nev : '';
  }


  dataSource = new MatTableDataSource(this.jaratmegallok);

  constructor(private jaratmegalloService: JaratmegalloService, private jaratService: JaratService, private megallohelyService: MegallohelyService) {}

  ngOnInit(): void {
    this.getAllJaratmegallok();
    this.getAllJaratok();
    this.getAllMegallohelyek();
  }

  getAllJaratok(): void {
    this.jaratService.getAll().subscribe({
      next: jaratok => this.jaratok = jaratok,
      error: err => console.error('Hiba történt az adatok lekérésekor:', err)
    });
  }

  getAllMegallohelyek(): void {
    this.megallohelyService.getAll().subscribe({
      next: megallohelyek => this.megallohelyek = megallohelyek,
      error: err => console.error('Hiba történt az adatok lekérésekor:', err)
    });
  }

  getAllJaratmegallok(): void {
    this.jaratmegalloService.getAll().subscribe({
      next: jaratmegallok => {
        this.jaratmegallok = jaratmegallok;
        this.dataSource.data = this.jaratmegallok;
      },
      error: err => console.error('Hiba történt az adatok lekérésekor:', err)
    });
  }

  getByJarat(jarat: string): void {
    this.jaratmegalloService.getByJaratIdSortedBySorszam(jarat).subscribe({
      next: (jaratmegallok: Jaratmegallo[]) => {
        this.jaratmegallok = jaratmegallok;
        this.dataSource.data = this.jaratmegallok;
      },
      error: (err) => {
        console.error('Hiba történt az adatok lekérésekor:', err);
      }
    });
  }
  onSzures(): void {
    this.getByJarat(this.form.value.jarat_id);
  } 

  editJaratmegallo(jaratmegallo: Jaratmegallo): void {
    this.form.setValue({
      id: jaratmegallo.id,
      jarat_id: jaratmegallo.jarat_id,
      megallo_id: jaratmegallo.megallo_id,
      sorszam: jaratmegallo.sorszam,
      ido_perc: jaratmegallo.ido_perc
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (this.form.value.id) {
        // Módosítás
        this.jaratmegalloService.update(this.form.value).then(() => {
          this.getAllJaratmegallok();
          this.form.reset();
        });
      } else {
        // Létrehozás
        this.jaratmegalloService.create(this.form.value).then(() => {
          this.getAllJaratmegallok();
          this.form.reset();
        });
      }
    }
  }

  deleteJaratmegallo(id: string): void {
    this.jaratmegalloService.delete(id).then(() => {
      this.getAllJaratmegallok();
    });
  }
}
