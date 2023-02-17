import { Component } from '@angular/core';

@Component({
  selector: 'app-calcolatrice',
  templateUrl: './calcolatrice.component.html',
  styleUrls: ['./calcolatrice.component.css']
})
export class CalcolatriceComponent {
  valueMemo = "";
  valueDisplay = "";
  valueTracciamento = "";
  totale = 0.0;
  arrayOperazioni: String[] = [];
  arrayNumeri: number[] = [];

  constructor() {
    console.log("inizializzato costruttore");
  }

  buttonClick(evento: any) {
    const idTasto = evento?.target;
    /*
        switch (idTasto.id){
          case "piu": 
          console.log("si");
          this.valueDisplay = this.valueMemo;
          this.valueMemo="";
            break;
          case "uguale":
            //this.valueDisplay = String(parseInt(this.valueDisplay) + parseInt(this.valueMemo));
            this.valueDisplay = String(parseFloat(this.valueDisplay) + "+"+ parseFloat(this.valueMemo));
            break;
          default:
            this.valueMemo += parseInt(idTasto.value);
            break;
    
        }*/

    switch (idTasto.id) {
      case "piu": parseFloat
        this.arrayOperazioni.push("+");
        this.arrayNumeri.push(parseFloat(this.valueMemo))
        this.valueDisplay = this.valueMemo;
        this.valueTracciamento += "+";
        this.valueMemo = "";
        break;
      case "meno":
        this.arrayOperazioni.push("-");
        this.arrayNumeri.push(parseFloat(this.valueMemo))
        this.valueDisplay = this.valueMemo;
        this.valueTracciamento += "-";
        this.valueMemo = "";
        break;
      case "per":
        this.arrayOperazioni.push("*");
        this.arrayNumeri.push(parseFloat(this.valueMemo))
        this.valueDisplay = this.valueMemo;
        this.valueTracciamento += "*";
        this.valueMemo = "";
        break;
      case "diviso":
        this.arrayOperazioni.push("/");
        this.arrayNumeri.push(parseFloat(this.valueMemo))
        this.valueDisplay = this.valueMemo;
        this.valueTracciamento += "/";
        this.valueMemo = "";
        break;
      case "uguale":
        this.arrayNumeri.push(parseFloat(this.valueMemo))
        this.totale = this.calcoloTotalePriorita();
        this.valueDisplay = String(parseFloat(this.valueDisplay) + "+" + parseFloat(this.valueMemo));
        this.valueDisplay = String(this.totale);
        this.valueMemo = "";
        break;
      case "cancella":
        this.valueMemo = "";
        this.valueDisplay = "";
        this.valueTracciamento = "";
        this.totale = 0.0;
        this.arrayNumeri = [];
        this.arrayOperazioni = [];
        break;
      default:
        this.valueMemo += parseFloat(idTasto.value);
        this.valueTracciamento += parseFloat(idTasto.value);
        break;

    }

    const tastoPremuto = evento?.target.value;
    console.log("tasto" + tastoPremuto);
    //this.valueMemo += "tasto"+tastoPremuto
  }

  calcoloTotale(arrayOp: String[] = [], arrayNum: number[] = []) {
    let i = 0;
    let risultato: number = 0;
    let nrSinistra = arrayNum[0];
    console.log(arrayNum);
    console.log(arrayOp);

    while (i < arrayNum.length - 1) {
      let nrDestra = arrayNum[i + 1];
      let operazione = arrayOp[i];

      switch (operazione) {
        case "+":
          nrSinistra = nrSinistra + nrDestra;
          break;
        case "-":
          nrSinistra = nrSinistra - nrDestra;
          break;
        case "*":
          nrSinistra = nrSinistra * nrDestra;
          break;
        case "/":
          nrSinistra = nrSinistra / nrDestra;
          break;
      }
      i += 1;
    }
    risultato = nrSinistra;
    return risultato;
  }

  calcoloTotalePriorita(){
    let arrayOpProvvisorio = this.arrayOperazioni;
    let arryNumProvvisorio = this.arrayNumeri;
    let i = 0;
    while(i< this.arrayOperazioni.length){
      if(this.arrayOperazioni[i] === "*"){
        arryNumProvvisorio[i] = arryNumProvvisorio[i] * arryNumProvvisorio[i+1];
        arryNumProvvisorio.splice(i+1,1);
        arrayOpProvvisorio.splice(i,1);
      }else if(this.arrayOperazioni[i] === "/"){
        arryNumProvvisorio[i] = arryNumProvvisorio[i] * arryNumProvvisorio[i+1];
        arryNumProvvisorio.splice(i+1,1);
        arrayOpProvvisorio.splice(i,1);
      }else{
        i++;
      }
    }

    console.log(arrayOpProvvisorio);
    console.log(arryNumProvvisorio);

    return this.calcoloTotale(arrayOpProvvisorio, arryNumProvvisorio);
  }


}
