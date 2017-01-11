import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { CoreModule } from './core.module';
import { HeaderComponent } from './header/header.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule } from 'ng2-bootstrap/collapse';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    CollapseModule.forRoot(),
    BrowserModule,
    HttpModule,
    routing,
    ShoppingListModule,
    CoreModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
