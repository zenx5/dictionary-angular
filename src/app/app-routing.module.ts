import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { ConfigureComponent } from './configure/configure.component';

const routes: Routes = [
  { path: '', redirectTo:'dictionary', pathMatch:'full' },
  { path: 'dictionary', component: DictionaryComponent },
  { path: 'configure', component: ConfigureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
