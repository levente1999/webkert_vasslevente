import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Menetrend } from '../../models/menetrend.model';
import { MenetrendService } from '../../services/menetrend.service';
import { Jarat } from '../../models/jarat.model';
import { Megallohely } from '../../models/megallohely.model';
import { JaratService } from '../../services/jarat.service';
import { MegallohelyService } from '../../services/megallohely.service';

@Component({
  selector: 'app-menetrend',
  templateUrl: './menetrend.component.html',
  styleUrls: ['./menetrend.component.css']
})
export class MenetrendComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(),
    jarat_id: new FormControl('', Validators.required),
    //indulas_ido: new FormControl('', Validators.required),
    indulas_ido: new FormGroup({
      ora: new FormControl('',Validators.required),
      perc: new FormControl('',Validators.required)
    }),
    indulas_megallo_id: new FormControl('', Validators.required),
    //erkezes_ido: new FormControl('', Validators.required),
    erkezes_ido: new FormGroup({
      ora: new FormControl('',Validators.required),
      perc: new FormControl('',Validators.required)
    }),
    erkezes_megallo_id: new FormControl('', Validators.required)
  });

  menetrendek: Menetrend[] = [];
  jaratok: Jarat[] = [];
  megallohelyek: Megallohely[] = [];

  dataSource = new MatTableDataSource(this.menetrendek);

  constructor(private menetrendService: MenetrendService,private jaratService: JaratService, private megallohelyService: MegallohelyService) {}

  ngOnInit(): void {
    this.getAllMenetrendek();
    this.getAllJaratok();
    this.getAllMegallohelyek();

  }

  getMegallohelyNevById(megalloId: string): string {
    const megallo = this.megallohelyek.find(m => m.id === megalloId);
    return megallo ? megallo.nev : '';
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

  getAllMenetrendek(): void {
    this.menetrendService.getAll().subscribe({
      next: menetrendek => {
        this.menetrendek = menetrendek;
        this.dataSource.data = this.menetrendek;
      },
      error: err => console.error('Hiba történt az adatok lekérésekor:', err)
    });
  }

  editMenetrend(menetrend: Menetrend): void {
    this.form.setValue({
      id: menetrend.id,
      jarat_id: menetrend.jarat_id,
      indulas_ido: menetrend.indulas_ido,
      indulas_megallo_id: menetrend.indulas_megallo_id,
      erkezes_ido: menetrend.erkezes_ido,
      erkezes_megallo_id: menetrend.erkezes_megallo_id
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (this.form.value.id) {
        // Módosítás
        this.menetrendService.update(this.form.value).then(() => {
          this.getAllMenetrendek();
          this.form.reset();
        });
      } else {
        // Létrehozás
        this.menetrendService.create(this.form.value).then(() => {
          this.getAllMenetrendek();
          this.form.reset();
        });
      }
    }
  }
  deleteMenetrend(id: string): void {
    this.menetrendService.delete(id).then(() => {
      this.getAllMenetrendek();
    });
  }
}

