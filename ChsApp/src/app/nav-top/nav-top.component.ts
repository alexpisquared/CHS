import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {
  themedIcon = './favicon.ico';
  titleBig = 'Celebrity Hologram Store';
  titleTla = 'CHS';
  userName = 'Unknown';
  isLoading: boolean; // used for showing Loading spinner during transition between pages

  constructor() {}

  ngOnInit() {}
}
