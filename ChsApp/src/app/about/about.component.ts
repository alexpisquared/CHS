import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  result = 'Result : nothing ...yet';

  constructor() {}

  ngOnInit() {
    this.getRandom();
  }

  getRandom() {
    this.result = 'Random from 1 to 4  =>  ' + (Math.floor(Math.random() * 4) + 1).toString();
  }
}
