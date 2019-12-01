import { Component, OnInit } from "@angular/core";
import {
  ChartDataSets,
  ChartOptions,
  ChartLegendLabelOptions,
  ChartLegendOptions
} from "chart.js";
import { Label, Color } from "ng2-charts";

@Component({
  selector: "app-analise-cronologica",
  templateUrl: "./analise-cronologica.component.html",
  styleUrls: ["./analise-cronologica.component.scss"]
})
export class AnaliseCronologicaComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    {
      data: [30, 39, 45, 40, 35, 30, 39, 45, 60, 62, 65, 70],
      label: "Incêndio"
    },
    { data: [20, 25, 38, 50, 62, 60, 48, 50, 42, 37, 31, 20], label: "Buraco" },
    { data: [25, 28, 30, 20, 15, 0], label: "Assalto" }
  ];
  public lineChartLabels: Label[] = [
    "6h",
    "8h",
    "10h",
    "12h",
    "14h",
    "16h",
    "18h",
    "20h",
    "22h",
    "00"
  ];

  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
    spanGaps: false,
    annotation: {
      annotations: [
        {
          type: "line",
          mode: "vertical",
          scaleID: "x-axis-0",
          value: "March",
          borderColor: "orange",
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: "orange",
            content: "LineAnno"
          }
        }
      ]
    },
    legend: { align: "end", labels: { boxWidth: 20, usePointStyle: true } }
  };

  public lineChartColors: Color[] = [
    {
      borderColor: "#DB8DA1",
      backgroundColor: "#ffffff00"
    },
    {
      borderColor: "#B8D19C",
      backgroundColor: "#ffffff00"
    },
    {
      borderColor: "#E4B386",
      backgroundColor: "#ffffff00"
    }
  ];
  public lineChartLegend = true;

  public barChartOptions: any = {
    legend: { position: "bottom" }
  };
  public lineChartType = "line";
  public lineChartPlugins = [];

  constructor() {}

  ngOnInit() {}
}
