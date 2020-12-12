import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
myReactiveForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.myReactiveForm= new FormGroup({
      'userDetail': new FormGroup({
        'email': new FormControl(null,[Validators.required,Validators.email]),
        'name': new FormControl(null,Validators.required),
      }),
      'monumber':new FormControl(9953839784),
      'languages':new FormControl("PHP")
    });
  }

  onSubmit(){
    console.log(this.myReactiveForm);
  }

}
