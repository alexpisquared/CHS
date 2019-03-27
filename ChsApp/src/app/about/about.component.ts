import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  result = 'nothing';

  constructor() { }

  ngOnInit() {
  }

  getRandom() {
    this.result = 'https://reqres.in/api/users?page=' + (Math.floor(Math.random() * 4) + 1).toString();
  }

}
