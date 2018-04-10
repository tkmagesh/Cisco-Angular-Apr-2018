import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';

/*
declarations 
	- all the UI entities
		* components
		* directives
		* pipes

providers
	- all non UI entities
		* servies

imports
	- other modules that this module depends on
	
*/


@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



