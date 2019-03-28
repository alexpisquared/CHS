import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signinForm = new FormGroup({ usernamme: new FormControl(), password: new FormControl() });

    this.signinForm.valueChanges.subscribe(console.log);
  }
}
