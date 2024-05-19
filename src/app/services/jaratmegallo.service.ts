import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { Jaratmegallo } from '../models/jaratmegallo.model';

@Injectable({
  providedIn: 'root'
})
export class JaratmegalloService {
  private collectionName = 'jaratmegallo';

  constructor(private afs: AngularFirestore) {}

  create(jaratmegallo: Jaratmegallo): Promise<void> {
    jaratmegallo.id = this.afs.createId();
    return this.afs.collection<Jaratmegallo>(this.collectionName).doc(jaratmegallo.id).set(jaratmegallo);
  }

  getAll(): Observable<Jaratmegallo[]> {
    return this.afs.collection<Jaratmegallo>(this.collectionName).valueChanges();
  }

  update(jaratmegallo: Jaratmegallo): Promise<void> {
    return this.afs.collection<Jaratmegallo>(this.collectionName).doc(jaratmegallo.id).update(jaratmegallo);
  }

  delete(id: string): Promise<void> {
    return this.afs.collection<Jaratmegallo>(this.collectionName).doc(id).delete();
  }

  getById(id: string): Observable<Jaratmegallo | undefined> {
    return this.afs.collection<Jaratmegallo>(this.collectionName).doc(id).valueChanges();
  }
  getByJaratIdSortedBySorszam(jaratId: string): Observable<Jaratmegallo[]> {
    return this.afs.collection<Jaratmegallo>(
      this.collectionName,
      ref => ref.where('jarat_id', '==', jaratId).orderBy('sorszam')
    ).valueChanges();
  }
}
