import { Component } from '@angular/core';

@Component({
  selector: 'app-calcolatrice',
  templateUrl: './calcolatrice.component.html',
  styleUrls: ['./calcolatrice.component.css']
})
export class CalcolatriceComponent {
  valueMemo="";
  valueDisplay="";
  
  buttonClick(evento:any){
    const idTasto = evento?.target;
    console.log(idTasto);
    console.log(idTasto.id);
    if(idTasto.id ==="piu"){
      console.log("si");
    }

    switch (idTasto.id){
      case "piu": 
      this.valueDisplay = this.valueMemo;
      this.valueMemo="";
        break;
      case "uguale":
        this.valueDisplay = String(parseInt(this.valueDisplay) + parseInt(this.valueMemo));
        break;
      default:
        this.valueMemo += parseInt(idTasto.value);
        break;

    }

    const tastoPremuto = evento?.target.value;
    console.log("tasto"+tastoPremuto);
    //this.valueMemo += "tasto"+tastoPremuto
  }

}
