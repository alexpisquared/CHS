import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CelebrityDataService } from '../service/celebrity-data.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private data: CelebrityDataService) {}

  ngOnInit() {
    this.getCelebsList();
    setTimeout(() => {
      if (this.nameField !== null) {
        this.nameField.nativeElement.focus();
        this.isSignedIn = true;
      }
    }, 333);
  }

  getCelebsList() {
    this.data.getCelebsList().subscribe(
      data => {
        this.celebs = data;
        console.log(this.celebs);
      },
      err => {
        console.log(` ** CL ${err}`);
        this.router.navigate(['croll']);
      }
    );
  }
  filterCelebsList() {
    console.log(` ** filtering by '${this.searchedWordsControl}'...`);
    this.data.filterCelebsList(this.searchedWordsControl.value).subscribe(data => {
      this.celebs = data;
      console.log(this.celebs);
    });
  }
  addToCart() {
    console.log(' ** todo: adding to cart ** ');
  }
}
