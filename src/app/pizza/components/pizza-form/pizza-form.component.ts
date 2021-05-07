import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Repartidor } from 'src/app/class/repartidor';
import { Pizza } from 'src/app/class/pizza';
import { PizzaService } from '../../pizza.service';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit {


  @Output() lanzaPizza = new EventEmitter();


  formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern("[a-zA-Z ]{2,41}")]),
    ingredientes: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(140), Validators.pattern("[a-zA-Z ]{2,141}")]),
    precio: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(4), Validators.pattern("^[0-9]*$")]),
    peso: new FormControl('', [Validators.required, Validators.min(500), Validators.max(1000), Validators.pattern("^[0-9]*$")]),
  });



  constructor(
    private Sv: PizzaService
  ) { }



  public resetFrom() {
    this.formulario.reset({
      nombre: '',
      apellido: '',
      sexo: '',
      fechaNacimiento: '',
      foto: '',
      terminos: '',
    });
  }

  public cargar() {
    // this.Sv.addItem(this.formulario.getRawValue());

    let pizza = this.formulario.getRawValue();
    this.enviaPizza(pizza);
    this.resetFrom();
  }

  public enviaPizza(event) {
    this.lanzaPizza.emit({ pizzaLz: event });
  }

  ngOnInit(): void {
  }

}
