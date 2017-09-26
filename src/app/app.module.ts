import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports:      [ BrowserModule, 
  FormsModule,
  HttpModule,
  MaterialModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }