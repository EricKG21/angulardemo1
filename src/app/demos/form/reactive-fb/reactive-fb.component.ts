import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-reactive-fb',
  templateUrl: './reactive-fb.component.html',
  styleUrls: ['./reactive-fb.component.css']
})
export class ReactiveFbComponent implements OnInit {

  myFBFGroup: FormGroup;
  nameControl: FormControl;

  constructor(private fb: FormBuilder) { 
    this.nameControl = new FormControl([],[Validators.maxLength(20)]);
    this.myFBFGroup = this.fb.group({
      name: this.nameControl,
      age: [0, [this.ageValidator, Validators.minLength(1)]],
      fullName: this.fb.group({
        firstName: '',
        lastName: ''
      },{Validators:this.fullNameValidator})
    });
   }
   onSubmit(){
     console.log(this.myFBFGroup.value);
     console.log(this.myFBFGroup.status);
     console.log('name error:', this.nameControl.errors);
     console.log('age error:', this.myFBFGroup.get('age').errors);
     console.log('full name errors:', this.myFBFGroup.get('fullName').errors);
     console.log('name touched:', this.nameControl.touched);
     console.log('age touched:', this.myFBFGroup.get('age').touched);
     console.log('name pristine:',this.nameControl.pristine);
     console.log('age dirty:', this.myFBFGroup.get('age').dirty);

   }

  ngOnInit() {
  }
  ageValidator(control: FormControl){
    const {value} = control;
    const valid = value => 0 && value <200;
    return valid ? null : {age: {actualAge: value, requireAge: '0-200'}};
  }

  fullNameValidator({value}: FormGroup){
    const {firstName, lastName} = value;
    return firstName.length > 3 && lastName.length > 1 ? null : {fullName: 'Not valid!'}
  }
}
