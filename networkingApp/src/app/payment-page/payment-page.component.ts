import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

  public selectedOption: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleChange = (value:any) => {
    console.log(value);
    this.selectedOption = value
  }
//TODO
  handlePayment = () => {
    // here => 
  }

}
