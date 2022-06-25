import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core";

import { OverviewCardComponent } from "./components/overview-cards.component";
import { ChartComponent } from "./components/chart.component";
import { HighchartsChartModule } from "highcharts-angular";

@NgModule({
  declarations:[
    OverviewCardComponent,
    ChartComponent,

  ],
  imports:[
    CommonModule,
    HighchartsChartModule,
  ],
  exports:[
    OverviewCardComponent,
    ChartComponent,
  ]
})

export class SharedModule {}
