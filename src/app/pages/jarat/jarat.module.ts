import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JaratComponent } from './jarat.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [JaratComponent],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIcon,
    MatOption,
    MatSelectModule
  ],
  exports: [JaratComponent]
})
export class JaratModule { }
