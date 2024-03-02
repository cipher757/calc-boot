import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  rating: number = 0;

  calc(operador: string) {
    switch (operador) {
      case '+':
        this.resultado = Number(this.num1) + Number(this.num2);
        break;
      case '-':
        this.resultado = Number(this.num1) - Number(this.num2);
        break;
      case '*':
        this.resultado = Number(this.num1) * Number(this.num2);
        break;
      case '/':
        this.resultado = Number(this.num1) / Number(this.num2);
        break;
      case 'media':
        this.resultado = (Number(this.num1) + Number(this.num2)) / 2;
        break;
      case 'porcentagem':
        this.resultado = (Number(this.num1) * Number(this.num2)) / 100;
        break;
      default:
        this.resultado = 0;
        break;
    }
  }
}
