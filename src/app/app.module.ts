import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { HierarchyHorizontalComponent } from './hierarchy-horizontal/hierarchy-horizontal.component';

@NgModule({
  declarations: [
    AppComponent,
    HierarchyComponent,
    HierarchyHorizontalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
