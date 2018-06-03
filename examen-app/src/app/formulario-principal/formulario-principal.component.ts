import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-formulario-principal',
  templateUrl: './formulario-principal.component.html',
  styleUrls: ['./formulario-principal.component.css']
})
export class FormularioPrincipalComponent implements OnInit {

  @Output() clickEnIngresar: EventEmitter<object> = new EventEmitter();
  @Input() arregloLigas;

  nombreEquipo: string;
  liga: string;
  copas: number;
  esCampeonActual: boolean=false;

  constructor() { }

  ngOnInit() {
  }

  mostrarInformacion(event, formData){
    console.log(event);
    console.log(formData.value);
    this.clickEnIngresar.emit(formData.value);

  }



}
