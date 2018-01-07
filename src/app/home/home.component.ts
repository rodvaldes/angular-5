import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contadorItems: number;
  textoBoton: string = 'Agrega un objetivo';
  textoObjetivo: string = 'Mi primer objetivo del año';
  objetivos = [];


  constructor() { }

  ngOnInit() {
  	this.contadorItems = this.objetivos.length
  }

  addItem() {
  	this.objetivos.push(this.textoObjetivo);
  	this.textoObjetivo = '';
  	this.contadorItems = this.objetivos.length;
  }

}
