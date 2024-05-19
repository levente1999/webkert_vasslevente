import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Jarmu } from '../../models/jarmu.model';
import { JarmuService } from '../../services/jarmu.service';

@Component({
  selector: 'app-jarmu',
  templateUrl: './jarmu.component.html',
  styleUrls: ['./jarmu.component.css']
})
export class JarmuComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(),
    nev: new FormControl('', Validators.required)
  });

  jarmutipusok: Jarmu[] = [];
  dataSource = new MatTableDataSource(this.jarmutipusok);

  constructor(private jarmuService: JarmuService) {}

  ngOnInit(): void {
    this.getAllJarmuvek();
  }

  getAllJarmuvek(): void {
    this.jarmuService.getAll().subscribe({
      next: jarmutipusok => {
        this.jarmutipusok = jarmutipusok;
        this.dataSource.data = this.jarmutipusok;
      },
      error: err => console.error('Hiba történt az adatok lekérésekor:', err)
    });
  }

  editJarmu(jarmu: Jarmu): void {
    this.form.setValue({
      id: jarmu.id,
      nev: jarmu.nev
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (this.form.value.id) {
        // Módosítás
        this.jarmuService.update(this.form.value).then(() => {
          this.getAllJarmuvek();
          this.form.reset();
        });
      } else {
        // Létrehozás
        this.jarmuService.create(this.form.value).then(() => {
          this.getAllJarmuvek();
          this.form.reset();
        });
      }
    }
  }

  deleteJarmu(id: string): void {
    this.jarmuService.delete(id).then(() => {
      this.getAllJarmuvek();
    });
  }
}
