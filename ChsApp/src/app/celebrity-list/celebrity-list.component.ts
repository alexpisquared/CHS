import { Component, OnInit } from '@angular/core';
import { CelebrityDataService } from '../celebrity-data.service';

@Component({
  selector: 'app-celebrity-list',
  templateUrl: './celebrity-list.component.html',
  styleUrls: ['./celebrity-list.component.scss']
})
export class CelebrityListComponent implements OnInit {
  celebs: object;

  constructor(private data: CelebrityDataService) {}

  ngOnInit() {
    this.getCelebs();
  }

  getCelebs() {
    const page = (Math.floor(Math.random() * 4) + 1).toString();
    this.data.getCelebs(page).subscribe(data => {
      this.celebs = data;
      console.log(this.celebs);
    });
  }
}
