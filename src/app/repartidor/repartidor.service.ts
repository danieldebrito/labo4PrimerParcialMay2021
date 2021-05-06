import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repartidor } from 'src/app/class/repartidor';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {
  ItemsCollection: AngularFirestoreCollection<Repartidor>;
  ItemDoc: AngularFirestoreDocument<Repartidor>;
  Items: Observable<Repartidor[]>;

  public cantCarritoItems: number;

  constructor(public db: AngularFirestore) {
    this.ItemsCollection = this.db.collection('Repartidores');
    this.Items = this.ItemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Repartidor;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  public getItems() {
    return this.Items;
  }

  public deleteItem(Item: Repartidor) {
    this.ItemDoc = this.db.doc(`Repartidores/${Item.id}`);
    this.ItemDoc.delete();
  }

  public addItem(Item: Repartidor) {
    this.ItemsCollection.add(Item);
  }

  public updateItem(Item: Repartidor) {
    this.ItemDoc = this.db.doc(`Repartidores/${Item.id}`);
    this.ItemDoc.update(Item);
  }

  getfecha() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate().toString();
    const mes = (fechaActual.getMonth() + 1).toString();
    const anio = fechaActual.getFullYear().toString();
    const hora = fechaActual.getHours().toString();
    const minutos = fechaActual.getMinutes().toString();

    return dia + '/' + mes + '/' + anio + ' ' + hora + ':' + minutos;

    /*this.hora = hora + ':' + minutos + ':' + segundos;
    const ret = this.fecha;
    return ret;*/
  }
}
