import { Component, OnInit } from "@angular/core";
import {
  faChartLine,
  faClipboardCheck,
  faChalkboardTeacher
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  faChartLine = faChartLine;
  faClipboard = faClipboardCheck;
  faChalkboardTeacher = faChalkboardTeacher;
  constructor() {}

  ngOnInit() {}
}
