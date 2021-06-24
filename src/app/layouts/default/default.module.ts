import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { DashboardComponent } from "../../modules/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { NewsComponent } from "../../modules/news/news.component";
import { SharedModule } from "../../shared/shared.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { CandlestickChartComponent } from "../../modules/dashboard/candlestick-chart/candlestick-chart.component";
import { Ng2GoogleChartsModule } from "ng2-google-charts";
import { RsiChartComponent } from "src/app/modules/dashboard/rsi-chart/rsi-chart.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatRippleModule } from "@angular/material/core";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";
import { ArticleDialogComponent } from "src/app/modules/news/article/article-dialog.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    NewsComponent,
    CandlestickChartComponent,
    RsiChartComponent,
    ArticleDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    Ng2GoogleChartsModule,
    MatGridListModule,
    MatRippleModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatDialogModule,
    MatExpansionModule,
    MatButtonModule,
  ],
})
export class DefaultModule {}
