import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector:'app-overview-card',
  template:`
    <div class="overview-card mb-3">
      <div>
        <p class="card-title">{{Title}}</p>
        <p class="card-price">&#8358; {{Price | number}}</p>
      </div>

      <div>
        <img src="assets/icons/small_chart.svg" alt="">
      </div>
    </div>
  `,
})

export class OverviewCardComponent implements OnInit{

  @Input() Title!: string;
  @Input() Price!: string;

  constructor() { }

  ngOnInit(): void {

  }
}
