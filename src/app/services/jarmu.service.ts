import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Jarmu } from '../models/jarmu.model';

@Injectable({
  providedIn: 'root'
})
export class JarmuService {
  private collectionName = 'jarmu';

  constructor(private afs: AngularFirestore) {}

  create(jarmu: Jarmu): Promise<void> {
    jarmu.id = this.afs.createId();
    return this.afs.collection<Jarmu>(this.collectionName).doc(jarmu.id).set(jarmu);
  }

  getAll(): Observable<Jarmu[]> {
    return this.afs.collection<Jarmu>(this.collectionName).valueChanges();
  }

  update(jarmu: Jarmu): Promise<void> {
    return this.afs.collection<Jarmu>(this.collectionName).doc(jarmu.id).set(jarmu);
  }

  delete(id: string): Promise<void> {
    return this.afs.collection<Jarmu>(this.collectionName).doc(id).delete();
  }

  getById(id: string): Observable<Jarmu | undefined> {
    return this.afs.collection<Jarmu>(this.collectionName).doc(id).valueChanges();
  }
}
