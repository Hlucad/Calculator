import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent {
  operation:string[] = ['', '', ''];
  display:string = '';
  activeBuildingNumber:string = '';

function doMath(){
calc.input.value=Math.sqrt(calc.input.value);
}
