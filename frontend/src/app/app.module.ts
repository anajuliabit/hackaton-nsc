import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CardComponent } from "./card/card.component";
import { AnaliseCronologicaComponent } from "./analise-cronologica/analise-cronologica.component";
import { HeatmapComponent } from "./heatmap/heatmap.component";
import { ChartsModule } from "ng2-charts";
import { AcontecendoAgoraComponent } from "./acontecendo-agora/acontecendo-agora.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { TitleComponent } from "./title/title.component";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    AnaliseCronologicaComponent,
    HeatmapComponent,
    AcontecendoAgoraComponent,
    TitleComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatTableModule,
    FontAwesomeModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
