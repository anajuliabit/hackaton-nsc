import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CardComponent } from "./card/card.component";
import { AnaliseCronologicaComponent } from "./analise-cronologica/analise-cronologica.component";
import { MenuComponent } from "./menu/menu.component";
import { HeatmapComponent } from "./heatmap/heatmap.component";
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    AnaliseCronologicaComponent,
    MenuComponent,
    HeatmapComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
