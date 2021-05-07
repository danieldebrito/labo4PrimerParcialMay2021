import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/class/pizza';

@Component({
  selector: 'app-pizza-alta',
  templateUrl: './pizza-alta.component.html',
  styleUrls: ['./pizza-alta.component.css']
})
export class PizzaAltaComponent implements OnInit {

  public pizzaDetalle: Pizza = {};

  constructor() { }

  public asigPizza(event){
    this.pizzaDetalle = event.pizzaLz;
    console.log(this.pizzaDetalle);

  }

  ngOnInit(): void {
  }

}
