import { Component, OnInit } from "@angular/core";
import {
  faArrowCircleUp,
  faArrowCircleDown,
  faCircle
} from "@fortawesome/free-solid-svg-icons";

const ELEMENT_DATA: any[] = [
  {
    ranking: 1,
    termosCombinados: ["INCÊNDIO", "PRÉDIO", "CENTRO"],
    cor: 0,
    numInteracoes: 389,
    confiabilidade: "77%"
  },
  {
    ranking: 0,
    termosCombinados: ["BURACO", "ACIDENTE", "PNEU", "CANASVIEIRAS"],
    cor: 1,
    numInteracoes: 223,
    confiabilidade: "68%"
  },
  {
    ranking: 0,
    termosCombinados: ["ASSALTO", "LOTÉRICA", "CENTRO"],
    cor: 2,
    numInteracoes: 195,
    confiabilidade: "64%"
  },
  {
    ranking: 1,
    termosCombinados: ["ARRECADAÇÃO", "AUMENTO", "NATAL"],
    cor: 0,
    numInteracoes: 132,
    confiabilidade: "49%"
  }
];

@Component({
  selector: "app-acontecendo-agora",
  templateUrl: "./acontecendo-agora.component.html",
  styleUrls: ["./acontecendo-agora.component.scss"]
})
export class AcontecendoAgoraComponent implements OnInit {
  displayedColumns: string[] = [
    "ranking",
    "termosCombinados",
    "cor",
    "numInteracoes",
    "confiabilidade",
    "vejamais",
    "verificado"
  ];
  dataSource = ELEMENT_DATA;
  faArrowCircleUp = faArrowCircleUp;
  faArrowCircleDown = faArrowCircleDown;
  faCircle = faCircle;

  constructor() {}

  ngOnInit() {}
}
