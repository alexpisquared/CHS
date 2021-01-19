import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CelebrityDataService } from '../service/celebrity-data.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-celebrity-roll',
  templateUrl: './celebrity-roll.component.html',
  styleUrls: ['./celebrity-roll.component.scss']
})
export class CelebrityRollComponent implements OnInit {
  isSignedIn: boolean;
  searchedWordsControl = new FormControl('');
  searchedWords$: Observable<string[]> = this.searchedWordsControl.valueChanges.pipe(map((search: string) => search.trim().split(' ')));
  celebs: object;
  @ViewChild('focus0', { static: true }) nameField: ElementRef;

  constructor(private data: CelebrityDataService, private router: Router) {}

  ngOnInit() {
    this.getCelebsRoll();
    setTimeout(() => {
      if (this.nameField !== null) {
        this.nameField.nativeElement.focus();
        this.isSignedIn = true;
      }
    }, 333);
  }

  filterCelebsRoll() {
    const page = (Math.floor(Math.random() * 4) + 1).toString();
    this.data.getCelebsRoll(page).subscribe(
      data => {
        this.celebs = data;
        console.log(this.celebs);
      },
      err => {
        this.router.navigate(['clist']);
        console.log(` ** CL ${err}`);
      }
    );
  }
  getCelebsRoll() {
    console.log(` ** filtering by '${this.searchedWordsControl}'...`);
    this.data.filterCelebsRoll(this.searchedWordsControl.value).subscribe(data => {
      this.celebs = data;
      console.log(this.celebs);
    });
  }
  addToCart() {
    console.log(' ** todo: adding to cart ** ');
  }
}
