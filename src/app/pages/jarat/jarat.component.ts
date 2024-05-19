import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JaratService } from '../../services/jarat.service';
import { Jarat } from '../../models/jarat.model';
import { JarmuService } from '../../services/jarmu.service';
import { MegallohelyService } from '../../services/megallohely.service';
import { Jarmu } from '../../models/jarmu.model';
import { Megallohely } from '../../models/megallohely.model';

@Component({
  selector: 'app-jarat',
  templateUrl: './jarat.component.html',
  styleUrls: ['./jarat.component.css']
})
export class JaratComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(),
    nev: new FormControl('', Validators.required),
    jarmu_id: new FormControl('', Validators.required),
    indulas_id: new FormControl('', Validators.required),
    erkezes_id: new FormControl('', Validators.required)
  });

  jaratok: Jarat[] = [];
  jarmuvek: Jarmu[] = [];
  megallohelyek: Megallohely[] = [];
  dataSource = new MatTableDataSource(this.jaratok);

  constructor(
    private jaratService: JaratService,
    private jarmuService: JarmuService,
    private megallohelyService: MegallohelyService
  ) { }

  ngOnInit(): void {
    this.getAllJaratok();
    this.getAllJarmuvek();
    this.getAllMegallohelyek();
  }

  getJarmuNevById(jarmuId: string): string {
    const jarmu = this.jarmuvek.find(jarmu => jarmu.id === jarmuId);
    return jarmu ? jarmu.nev : '';
  }

  getMegallohelyNevById(megalloId: string): string {
    const megallo = this.megallohelyek.find(m => m.id === megalloId);
    return megallo ? megallo.nev : '';
  }

  getJaratokByJarmuId(jarmuId: string): void {
    this.jaratService.getByJarmuId(jarmuId).subscribe({
      next: jaratok => {
        this.jaratok = jaratok;
        this.dataSource.data = this.jaratok;
      },
      error: err => console.error('Hiba történt az adatok lekérésekor:', err)
    });
  }


  getAllJaratok(): void {
    this.jaratService.getAll().subscribe({
      next: jaratok => {
        this.jaratok = jaratok;
        this.dataSource.data = this.jaratok;
        

      },
      error: err => console.error('Hiba történt az adatok lekérésekor:', err)
    });
  }

  getAllJarmuvek(): void {
    this.jarmuService.getAll().subscribe({
      next: jarmuvek => this.jarmuvek = jarmuvek,
      error: err => console.error('Hiba történt az adatok lekérésekor:', err)
    });
  }

  getAllMegallohelyek(): void {
    this.megallohelyService.getAll().subscribe({
      next: megallohelyek => this.megallohelyek = megallohelyek,
      error: err => console.error('Hiba történt az adatok lekérésekor:', err)
    });
  }

  editJarat(jarat: Jarat): void {
    this.form.setValue({
      id: jarat.id,
      nev: jarat.nev,
      jarmu_id: jarat.jarmu_id,
      indulas_id: jarat.indulas_id,
      erkezes_id: jarat.erkezes_id
    });
  }

  
  onSzures(): void {
    this.getJaratokByJarmuId(this.form.value.jarmu_id);  
  }

  onSelectionChange(): void {
    this.onSzures();
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (this.form.value.id) {
        // Módosítás
        this.jaratService.update(this.form.value).then(() => {
          this.getAllJaratok();
          this.form.reset();
        });
      } else {
        // Létrehozás
        this.jaratService.create(this.form.value).then(() => {
          this.getAllJaratok();
          this.form.reset();
        });
      }
    }
  }

  deleteJarat(id: string): void {
    this.jaratService.delete(id).then(() => {
      this.getAllJaratok();
    });
  }
}
