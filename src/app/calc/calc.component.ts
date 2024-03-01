import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
   num1: number = 0;
   num2: number = 0;
   soma: number = 0;
   subtracao: number = 0;
   multiplicacao: number = 0;
   divisao: number = 0;
   potencial: number = 0;
   porcentagem: number = 0;

   calc(){
     this.soma = this.num1 + this.num2;
   }

   calc2(){
    this.subtracao = this.num1 - this.num2;
   }

   calc3(){
    this.multiplicacao = this.num1 * this.num2;
   }

   calc4(){
    this.divisao = this.num1 / this.num2;
   }
}
