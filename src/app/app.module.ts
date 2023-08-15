import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { PronunciationComponent } from './pronunciation/pronunciation.component';
import { DefinitionComponent } from './definition/definition.component';
import { ConfigureComponent } from './configure/configure.component';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    DictionaryComponent,
    PronunciationComponent,
    DefinitionComponent,
    ConfigureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
