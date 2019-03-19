import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocNaviComponent } from './container/doc-navi/doc-navi.component';
import { SearchComponent } from './component/search/search.component';
import { DocTreeComponent } from './component/doc-tree/doc-tree.component';
import { HttpClientModule } from '@angular/common/http';
import { DocShowContainerComponent } from './container/doc-show-container/doc-show-container.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    DocNaviComponent,
    SearchComponent,
    DocTreeComponent,
    DocShowContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
