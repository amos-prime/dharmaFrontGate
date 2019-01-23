import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocNaviComponent } from './container/doc-navi/doc-navi.component';
import { SearchComponent } from './component/search/search.component';
import { DocTreeComponent } from './component/doc-tree/doc-tree.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DocNaviComponent,
    SearchComponent,
    DocTreeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
