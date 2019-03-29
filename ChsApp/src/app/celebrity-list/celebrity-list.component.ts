import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CelebrityDataService } from '../celebrity-data.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-celebrity-list',
  templateUrl: './celebrity-list.component.html',
  styleUrls: ['./celebrity-list.component.scss']
})
export class CelebrityListComponent implements OnInit {
  isSignedIn: boolean;
  searchedWordsControl = new FormControl('');
  searchedWords$: Observable<string[]> = this.searchedWordsControl.valueChanges.pipe(map((search: string) => search.trim().split(' ')));
  celebs: object;
  @ViewChild('focus0') nameField: ElementRef;

  textA0 = new FormControl('A0 - 12345 54321');
  textA1 = new FormControl('A1 - Ab:cd:ef:gh');
  textA2 = new FormControl('A2 - 11:22:33:44');
  textA3 = new FormControl('A3 - 0x79172fabc');

  constructor(private data: CelebrityDataService) {}

  ngOnInit() {
    this.getCelebs();
    setTimeout(() => {
      if (this.nameField !== null) {
        this.nameField.nativeElement.focus();
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
  addToCart(){
    console.log(' ** todo: adding to cart ** ');
  }
}
