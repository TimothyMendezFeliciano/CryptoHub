import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { finalize } from "rxjs/operators";
import { OHLC } from "src/app/models/binance/ohlc";
import { BinanceService } from "../../services/binance/binance.service";
import { CandlestickChartComponent } from "./candlestick-chart/candlestick-chart.component";
import { RsiChartComponent } from "./rsi-chart/rsi-chart.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  public isReady: boolean = false;

  defaultTimeFrame: string = "1d";
  availableTimeFrames: string[] = [
    "1m",
    "3m",
    "5m",
    "15m",
    "30m",
    "1h",
    "2h",
    "4h",
    "6h",
    "8h",
    "12h",
    "1d",
    "3d",
    "1w",
    "1M",
  ];

  defaultMarketPair: string = "BTCUSDT";
  availableMarketPairs: string[];

  defaultLimit: number = 30;
  availableLimit: number[] = [14, 30, 50, 100, 250, 500, 1000];

  public options: FormGroup;

  @ViewChild(CandlestickChartComponent)
  candleStickChild!: CandlestickChartComponent;

  @ViewChild(RsiChartComponent)
  rsiChild!: RsiChartComponent;

  constructor(private binance: BinanceService, private fb: FormBuilder) {
    this.options = this.fb.group({
      timeFrame: new FormControl(""),
      marketPair: new FormControl(""),
      limit: new FormControl(""),
    });
  }

  ngOnInit() {
    this.getSymbolsPair();
  }

  getSymbolsPair() {
    this.isReady = false;
    this.binance
      .getSymbolsPair()
      .pipe(
        finalize(() => {
          this.isReady = true;
        })
      )
      .subscribe({
        next: (marketPairs) => {
          this.availableMarketPairs = marketPairs;
        },
      });
  }

  onSubmit() {
    this.candleStickChild.generateNewGraph(
      this.options.value.marketPair,
      this.options.value.timeFrame,
      this.options.value.limit
    );
  }

  candleStickReady(ohclData: OHLC[]) {
    this.rsiChild.calculateRSI(ohclData);
  }
}
