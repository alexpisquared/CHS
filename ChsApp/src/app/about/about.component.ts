import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  result = 'Result : nothing ...yet';

  constructor(private location: Location) {}

  ngOnInit() {
    this.getRandom();
  }

  getRandom() {
    this.result = `There is a number between 0 and 100000000, and believe it or not but it is   ${Math.floor(
      Math.random() * 100000000
    )}`;
  }

  goBack(): void {
    this.location.back();
  }
}
