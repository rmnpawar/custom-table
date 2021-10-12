import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemplateHeaderDirective } from './table/template-header.directive';
import { TableHeaderComponent } from './table/table-header/table-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TemplateHeaderDirective,
    TableHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
