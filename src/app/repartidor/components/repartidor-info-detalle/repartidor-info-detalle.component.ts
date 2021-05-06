import { Component, Input, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/class/repartidor';

@Component({
  selector: 'app-repartidor-info-detalle',
  templateUrl: './repartidor-info-detalle.component.html',
  styleUrls: ['./repartidor-info-detalle.component.css']
})
export class RepartidorInfoDetalleComponent implements OnInit {

  @Input() item: Repartidor = {};

  constructor() { }

  public limpia(){
    this.item = {};
  }

  ngOnInit(): void {
  }
}