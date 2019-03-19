import { Component, OnInit, Input, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, OnChanges } from '@angular/core';
import { Person } from '../../shared/models/person';

@Component({
  selector: 'app-lc-person',
  templateUrl: './lc-person.component.html',
  styleUrls: ['./lc-person.component.css']
})
export class LcPersonComponent implements OnChanges,OnInit,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy {

  @Input()
  person: Person;

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    console.log(new Date()+'-ngOnchanges',changes);
  }

  ngOnInit() {
  }
  ngDocheck(){
    console.log(new Date()+'-ngDocheck');
  }
  ngAfterContentInit(){
    console.log(new Date()+'-ngaftercontentinit');
  }
  ngAfterContentChecked(){
    console.log(new Date()+'-ngaftercontentchecked');
  }
  ngAfterViewInit(){
    console.log(new Date()+'-ngafterviewinit');
  }
  ngAfterViewChecked(){
    console.log(new Date()+'-ngafterviewchecked');
  }
  ngOnDestroy(){
    console.log(new Date()+'-ngondestory');
  }
}
