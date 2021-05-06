import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/class/pais';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  public paisRepartidor: Pais = {};

  constructor() { }

  public AsignaPaisActor(event){
    this.paisRepartidor = event.paisEnviado;
  }

  ngOnInit(): void {
  }

}