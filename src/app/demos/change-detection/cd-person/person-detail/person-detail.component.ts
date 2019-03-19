import { Component, OnInit, Input, OnChanges, DoCheck, AfterViewChecked, ChangeDetectionStrategy } from '@angular/core';
import { ImPerson } from 'src/app/demos/shared/models/im-person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonDetailComponent implements OnInit, OnChanges, DoCheck,AfterViewChecked {

  @Input()
  person: ImPerson;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log(new Date() + '-ngOnchange in person-detail');
  }

  ngDoCheck(){
    console.log(new Date() + '-ngdocheck in in person-detail');
  }

  ngAfterViewChecked(){
    console.log(new Date() + '-ngafterviewchecked in person-detail');
  }

}
