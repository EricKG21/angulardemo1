import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/models/person'

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {
  
  person:Person = {
    name: "bob",
    age: 20
  };

  changePerson(){
    this.person = new Person('alice', 20);
  }
  changePersonName(){
    this.person.name = 'alex';
  }

  constructor() { }

  ngOnInit() {
  }

}
