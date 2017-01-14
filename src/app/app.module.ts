import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { CoreModule } from './core.module';
import { HeaderComponent } from './header/header.component';
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
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
