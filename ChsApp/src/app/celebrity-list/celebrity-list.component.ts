import { Component, OnInit } from '@angular/core';
import { CelebrityDataService } from '../celebrity-data.service';

@Component({
  selector: 'app-celebrity-list',
  templateUrl: './celebrity-list.component.html',
  styleUrls: ['./celebrity-list.component.sass']
})
export class CelebrityListComponent implements OnInit {
  h1Style = false;
  users: object;

  constructor(private data: CelebrityDataService) {}

  ngOnInit() {
    this.data.getCelebs().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  getCelebs() {
    this.data.getCelebs();
  }
}
