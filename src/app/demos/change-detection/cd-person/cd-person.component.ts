import { Component, OnInit, Input, OnChanges, DoCheck, AfterViewChecked, ChangeDetectionStrategy } from '@angular/core';
import { ImPerson } from '../../shared/models/im-person';

@Component({
  selector: 'app-cd-person',
  templateUrl: './cd-person.component.html',
  styleUrls: ['./cd-person.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdPersonComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked {

  constructor() { }

  @Input()
  person: ImPerson;

  ngOnInit() {
  }

  ngOnChanges(){
    console.log(new Date() + '-ngOnchange in cd-person');
  }

  ngDoCheck(){
    console.log(new Date() + '-ngdocheck in cd-person');
  }

  ngAfterViewChecked(){
    console.log(new Date() + '-ngafterviewchecked in cd-person');
  }

}
