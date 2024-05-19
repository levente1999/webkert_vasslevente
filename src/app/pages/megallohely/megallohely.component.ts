import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Megallohely } from '../../models/megallohely.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MegallohelyService } from '../../services/megallohely.service';

@Component({
  selector: 'app-megallohely',
  templateUrl: './megallohely.component.html',
  styleUrls: ['./megallohely.component.css']
})
export class MegallohelyComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl(),
    nev: new FormControl('', Validators.required)
  });

  megallohelyek: Megallohely[] = [];
  dataSource = new MatTableDataSource(this.megallohelyek);

  constructor(private megallohelyService: MegallohelyService) { }

  ngOnInit(): void {
    this.getAllMegallohelyek();
  }

  getAllMegallohelyek(): void {
    this.megallohelyService.getAll().subscribe({
      next: megallohelyek => {
        this.megallohelyek = megallohelyek;
        this.dataSource.data = this.megallohelyek;
      },
      error: err => console.error('Hiba történt az adatok lekérésekor:', err)
    });
  }

  editMegallohely(megallohely: Megallohely): void {
    // A szerkesztendő megallohely adatainak betöltése az űrlapba
    this.form.setValue({
      id: megallohely.id,
      nev: megallohely.nev
    });
  }

  loadMegallohelyek(): void {
    this.megallohelyService.getAll().subscribe((data: Megallohely[]) => {
      this.megallohelyek = data;
      this.dataSource = new MatTableDataSource<Megallohely>(this.megallohelyek);
    });
  }


  onSubmit(): void {
    console.log(this.form.value);
    this.megallohelyService.create(this.form.value);
  }
  deleteMegallohely(id: string): void {
    this.megallohelyService.delete(id).then(() => {
      // Sikeres törlés után frissítsd a táblát
      this.megallohelyService.getAll().subscribe(data => {
        this.megallohelyek = data;
        this.dataSource.data = this.megallohelyek;
      });
    });
  }

}