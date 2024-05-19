import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegallohelyComponent } from './megallohely.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [MegallohelyComponent],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIcon,
    MatButtonModule
  ],
  exports: [
    MegallohelyComponent
  ]
})
export class MegallohelyModule { }
