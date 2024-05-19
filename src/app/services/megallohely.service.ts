import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Megallohely } from '../models/megallohely.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MegallohelyService {

  
  collectionName = 'megallohely';

  constructor(private afs: AngularFirestore) { }

  create(megallohely: Megallohely) {
    megallohely.id = this.afs.createId();
    return this.afs.collection<Megallohely>(this.collectionName).doc(megallohely.id).set(megallohely);
    // return this.afs.collection<Comment>(this.collectionName).add(comment);
  }



  getAll() {
    return this.afs.collection<Megallohely>(this.collectionName).valueChanges();
  }

  update(megallohely: Megallohely) {
    return this.afs.collection<Megallohely>(this.collectionName).doc(megallohely.id).set(megallohely);
  }

  delete(id: string) {
    return this.afs.collection<Megallohely>(this.collectionName).doc(id).delete();
  }

  getById(id: string): Observable<Megallohely | undefined> {
    return this.afs.collection<Megallohely>(this.collectionName).doc(id).valueChanges();
  }
}
