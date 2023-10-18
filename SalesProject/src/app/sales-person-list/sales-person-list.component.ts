import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of object
  SalesPersonList : SalesPerson[] = [
    new SalesPerson("Anup","Kumar","anup.kumar@luv2code.com",2000),
    new SalesPerson("Mai","Tung","mai.tung@luv2code.com",3000),
    new SalesPerson("Claire","Murphy","claire.murphy@luv2code.com",4000),
    new SalesPerson("Bill","Gates","bill.gates@luv2code.com",5000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
