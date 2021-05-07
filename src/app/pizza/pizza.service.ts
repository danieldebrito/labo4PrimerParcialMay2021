import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pizza } from 'src/app/class/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  ItemsCollection: AngularFirestoreCollection<Pizza>;
  ItemDoc: AngularFirestoreDocument<Pizza>;
  Items: Observable<Pizza[]>;

  public cantCarritoItems: number;

  constructor(public db: AngularFirestore) {
    this.ItemsCollection = this.db.collection('Pizzaes');
    this.Items = this.ItemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Pizza;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  public getItems() {
    return this.Items;
  }

  public deleteItem(Item: Pizza) {
    this.ItemDoc = this.db.doc(`Pizzaes/${Item.id}`);
    this.ItemDoc.delete();
  }

  public addItem(Item: Pizza) {
    this.ItemsCollection.add(Item);
  }

  public updateItem(Item: Pizza) {
    this.ItemDoc = this.db.doc(`Pizzaes/${Item.id}`);
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
