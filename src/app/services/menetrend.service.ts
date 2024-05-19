import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Menetrend } from '../models/menetrend.model';

@Injectable({
  providedIn: 'root'
})
export class MenetrendService {
  private collectionName = 'menetrend';

  constructor(private afs: AngularFirestore) {}

  create(menetrend: Menetrend): Promise<void> {
    menetrend.id = this.afs.createId();
    return this.afs.collection<Menetrend>(this.collectionName).doc(menetrend.id).set(menetrend);
  }

  getAll(): Observable<Menetrend[]> {
    return this.afs.collection<Menetrend>(this.collectionName).valueChanges();
  }

  update(menetrend: Menetrend): Promise<void> {
    return this.afs.collection<Menetrend>(this.collectionName).doc(menetrend.id).update(menetrend);
  }

  delete(id: string): Promise<void> {
    return this.afs.collection<Menetrend>(this.collectionName).doc(id).delete();
  }

  getById(id: string): Observable<Menetrend | undefined> {
    return this.afs.collection<Menetrend>(this.collectionName).doc(id).valueChanges();
  }
}
