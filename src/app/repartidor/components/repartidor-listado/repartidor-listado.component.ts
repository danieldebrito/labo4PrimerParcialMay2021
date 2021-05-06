import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Repartidor } from 'src/app/class/repartidor';
import { RepartidorService } from '../../repartidor.service';


@Component({
  selector: 'app-repartidor-listado',
  templateUrl: './repartidor-listado.component.html',
  styleUrls: ['./repartidor-listado.component.css']
})
export class RepartidorListadoComponent implements OnInit {
  
  public repartidores: Repartidor[] = [];

  public p: number = 1;  // paginacion primer page
  @Output() lanzaItem = new EventEmitter();
  @Output() lanzaPais = new EventEmitter();


  constructor(
    private repartidorSv: RepartidorService
  ) { }

  public getItems() {
    this.repartidorSv.getItems().subscribe(elemets => {
      this.repartidores = elemets;
      // console.log(elemets);
    });
  }

  public enviaItem(event){
    this.lanzaItem.emit({ repLanzado: event });
  }

  public enviaPais(event){
    this.lanzaPais.emit({ paisLanzado: event });
  }

  ngOnInit(): void {
    this.getItems();
  }

}
