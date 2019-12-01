import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-analise-cronologica",
  templateUrl: "./analise-cronologica.component.html",
  styleUrls: ["./analise-cronologica.component.scss"]
})
export class AnaliseCronologicaComponent implements OnInit {
  lineChartLabels = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24
  ];

  constructor() {}

  ngOnInit() {}
}
