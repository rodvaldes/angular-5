import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
  	trigger('objetivos', [
  			transition('* => *', [
  					query(':enter', style({ opacity:0 }), {optional: true}),

  					query(':enter', stagger('300ms',[
  							animate('.6s ease-in',keyframes([
  									style({opacity: 0, transform: 'translate(-75%)', offset: 0}),
  									style({opacity: .5, transform: 'translate(35px)', offset: .3}),
  									style({opacity: 1, transform: 'translate(0)', offset: 1}),
  								]))]), { optional: true}),


 					query(':leave', stagger('300ms',[
  							animate('.6s ease-in',keyframes([
  									style({opacity: 1, transform: 'translate(0)', offset: 0}),
  									style({opacity: .5, transform: 'translate(35px)', offset: .3}),
  									style({opacity: 0, transform: 'translate(-75%)', offset: 1}),
  								]))]), { optional: true})
  				])
  		])
  ]
})
export class HomeComponent implements OnInit {

  contadorItems: number;
  textoBoton: string = 'Agrega un objetivo';
  textoObjetivo: string = 'Mi primer objetivo del año';
  objetivos = ['Certificarme Atlassian Jira', 'Aprender Angular 5', 'Viajar con mi esposa'];


  constructor() { }

  ngOnInit() {
  	this.contadorItems = this.objetivos.length
  }

  addItem() {
  	this.objetivos.push(this.textoObjetivo);
  	this.textoObjetivo = '';
  	this.contadorItems = this.objetivos.length;
  }

  removeObjetivo(i){
  	this.objetivos.splice(i,1);
  }

}
