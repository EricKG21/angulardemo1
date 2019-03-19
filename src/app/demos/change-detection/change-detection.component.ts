import { Component, OnInit, OnChanges, DoCheck, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { ImPerson } from '../shared/models/im-person'
@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked {

  person: ImPerson = new ImPerson('Bob', 22);

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  addAge(){
    let newAge = this.person.age;
    this.person =this.person.merge({'age': ++newAge}) as ImPerson;
    console.log(this.person.age);
  }
  ngOnChanges(){
    console.log(new Date() + '-ngOnchange in cd');
  }

  ngDoCheck(){
    console.log(new Date() + '-ngdocheck in cd');
  }

  ngAfterViewChecked(){
    console.log(new Date() + '-ngafterviewchecked in cd');
  }
  updateAge(){
    // this.person = {...this.person, age: ++this.person.age};
  }
}
