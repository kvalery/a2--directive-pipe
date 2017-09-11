import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view/view.component';
import { MyHoverDirective } from './directives/my-hover.directive';
import { MyCouterDirective } from './directives/my-couter.directive';
import { SpaceRemoveDirective } from './directives/space-remove.directive';
import { Simple } from './pipes/simple.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    MyHoverDirective,
    MyCouterDirective,
    SpaceRemoveDirective,
    Simple
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
