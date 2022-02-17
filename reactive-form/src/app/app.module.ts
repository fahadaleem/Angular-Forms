import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlMethodComponent } from './form-control-method/form-control-method.component';
import { FormBuilderMethodComponent } from './form-builder-method/form-builder-method.component';

@NgModule({
  declarations: [AppComponent, FormControlMethodComponent, FormBuilderMethodComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
