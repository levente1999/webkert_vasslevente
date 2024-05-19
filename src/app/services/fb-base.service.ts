import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Megallohely } from '../models/megallohely.model';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {

  constructor(private afs: AngularFirestore) { }

  async add(collectionName: string, data: Megallohely, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    // await this.afs.collection(collectionName).add(data);
    return uid;
  }
}
