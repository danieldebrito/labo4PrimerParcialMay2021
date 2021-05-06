import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/class/pais';
import { Repartidor } from 'src/app/class/repartidor';


@Component({
  selector: 'app-repartidor-detalle',
  templateUrl: './repartidor-detalle.component.html',
  styleUrls: ['./repartidor-detalle.component.css']
})
export class RepartidorDetalleComponent implements OnInit {

public repartidorMostrar: Repartidor = {};
public paisMostrar: Pais = {};

  constructor() { }

  public detallePep(event){
    this.repartidorMostrar = event.repLanzado;
  }

  public detallePais(event){
    this.paisMostrar = event.paisLanzado;
  }

  ngOnInit(): void {
  }

}
