import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CelebrityDataService } from '../celebrity-data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-celebrity-list',
  templateUrl: './celebrity-list.component.html',
  styleUrls: ['./celebrity-list.component.scss']
})
export class CelebrityListComponent implements OnInit {
  searchedWordsControl = new FormControl('');
  celebs: object;
  @ViewChild('focus0') usernameField: ElementRef;

  constructor(private data: CelebrityDataService) {}

  ngOnInit() {
    this.getCelebs();
    setTimeout(() => {
      if (this.usernameField !== null) {
        this.usernameField.nativeElement.focus();
      }
    }, 333);
  }

  getCelebs() {
    const page = (Math.floor(Math.random() * 4) + 1).toString();
    this.data.getCelebs(page).subscribe(data => {
      this.celebs = data;
      console.log(this.celebs);
    });
  }
}
