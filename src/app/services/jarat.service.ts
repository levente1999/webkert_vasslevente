import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Jarat } from '../models/jarat.model';

@Injectable({
  providedIn: 'root'
})
export class JaratService {
  private collectionName = 'jaratok';

  constructor(private afs: AngularFirestore) {}

  create(jarat: Jarat): Promise<void> {
    jarat.id = this.afs.createId();
    return this.afs.collection<Jarat>(this.collectionName).doc(jarat.id).set(jarat);
  }

  getAll(): Observable<Jarat[]> {
    return this.afs.collection<Jarat>(this.collectionName).valueChanges();
  }

  update(jarat: Jarat): Promise<void> {
    return this.afs.collection<Jarat>(this.collectionName).doc(jarat.id).set(jarat);
  }

  delete(id: string): Promise<void> {
    return this.afs.collection<Jarat>(this.collectionName).doc(id).delete();
  }

  getById(id: string): Observable<Jarat | undefined> {
    return this.afs.collection<Jarat>(this.collectionName).doc(id).valueChanges();
  }
  getByJarmuId(jarmuId: string): Observable<Jarat[]> {
    return this.afs.collection<Jarat>(this.collectionName, ref => ref.where('jarmu_id', '==', jarmuId))
      .valueChanges();
  }
}
