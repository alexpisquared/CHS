import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Factor } from '../model/factor';
import { CelebrityDataService } from '../service/celebrity-data.service';

@Component({
  selector: 'app-celebrity-factor',
  templateUrl: './celebrity-factor.component.html',
  styleUrls: ['./celebrity-factor.component.scss']
})
export class CelebrityFactorComponent implements OnInit {
  @Input() factor: object; // Factor;

  constructor(private route: ActivatedRoute, private factorService: CelebrityDataService, private location: Location) {}

  ngOnInit(): void {
    this.getFactor();
  }

  getFactor(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.factorService.getFactor(id).subscribe(factor => (this.factor = factor));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    // this.factorService.updateFactor(this.factor).subscribe(() => this.goBack());
  }
}
