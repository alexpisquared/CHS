import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CelebrityDataService } from '../celebrity-data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-celebrity-list',
  templateUrl: './celebrity-list.component.html',
  styleUrls: ['./celebrity-list.component.scss']
})
export class CelebrityListComponent implements OnInit {
  isSignedIn: boolean;
  searchedWordsControl = new FormControl('');
  celebs: object;
  @ViewChild('focus0') usernameField: ElementRef;

  constructor(private data: CelebrityDataService) {}

  ngOnInit() {
    this.getCelebs();
    setTimeout(() => {
      if (this.usernameField !== null) {
        this.usernameField.nativeElement.focus();
        this.isSignedIn = true;
      }
    }, 333);
  }

  getCelebs() {
    this.data.getCelebs().subscribe(data => {
      this.celebs = data;
      console.log(this.celebs);
    });
  }
  getCelebsPage() {
    const page = (Math.floor(Math.random() * 4) + 1).toString();
    this.data.getCelebsPage(page).subscribe(data => {
      this.celebs = data;
      console.log(this.celebs);
    });
  }
  filterCelebs() {
    console.log(` ** filtering by '${this.searchedWordsControl}'...`);
    this.data.filterCelebs(this.searchedWordsControl.value).subscribe(data => {
      this.celebs = data;
      console.log(this.celebs);
    });
  }
}
