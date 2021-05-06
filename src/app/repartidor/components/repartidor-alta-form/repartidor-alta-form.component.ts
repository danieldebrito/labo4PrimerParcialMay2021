import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Repartidor } from 'src/app/class/repartidor';
import { Pais } from 'src/app/class/pais';
import { RepartidorService } from '../../repartidor.service';

@Component({
  selector: 'app-repartidor-alta-form',
  templateUrl: './repartidor-alta-form.component.html',
  styleUrls: ['./repartidor-alta-form.component.css']
})
export class RepartidorAltaFormComponent implements OnInit {


  @Input() pais: Pais;
  public errorPais = false;

  formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern("[a-zA-Z ]{2,41}"), this.spacesValidator]),
    edad: new FormControl('', [Validators.required, Validators.min(18), Validators.max(99), Validators.pattern("^[0-9]*$")]),
    dni: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(8), Validators.pattern("^[0-9]*$")]),
    capacidad: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10), Validators.pattern("^[0-9]*$")]),
    unidadPropia: new FormControl('', [Validators.required]),
  });



  constructor(
    private actoresSv: RepartidorService
  ) { }


  // CUSTOM VALIDATOR
  private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null;
  }

  public resetFrom() {
    this.formulario.reset({
      nombre: '',
      apellido: '',
      sexo: '',
      fechaNacimiento: '',
      foto: '',
      terminos: '',
    });
    this.pais = {};
  }

  public cargarActor() {
    if (this.pais.name === undefined) {
      this.formulario.invalid;
      this.errorPais = true;
    } else {
      this.errorPais = false;
      let actor: Repartidor = this.formulario.getRawValue();
      actor.paisOrigen = this.pais;
      this.actoresSv.addItem(actor);

      this.resetFrom();
    }
  }

  ngOnInit(): void {
  }

}
