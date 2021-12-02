import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

  private selectedOption: String;

  constructor() { }

  ngOnInit(): void {
  }

  handleChange = (value:any) => {
    this.selectedOption = value
  }
//TODO
  handlePayment = () => {
    // here => 
  }

}
