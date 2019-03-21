import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  money = 100;
  moneyList = [5, 26 ,33, 41, 89, 90];

  newMoney;

  constructor() { }

  ngOnInit() {
  }

  addMoney(){
    if(this.newMoney){
      this.moneyList.push(this.newMoney); 
      //this.moneyList = this.moneyList.concat([this.newMoney])
    }
  }

  fetchMoney = new Promise((resolve,) =>{
    setTimeout(
      () => resolve(200),
      1000
    );
  } );
}
