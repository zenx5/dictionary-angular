import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { ConfigureComponent } from './configure/configure.component';
import { AuxRouterComponent } from './aux-router/aux-router.component';

const routes: Routes = [
  // { path:'', redirectTo:'dictionary-angular/index', pathMatch:'prefix' },
  { path:'**', redirectTo:'dictionary-angular', pathMatch:'prefix' },
  { path: 'dictionary-angular', component: AuxRouterComponent, children: [
    { path:'**', redirectTo:'index', pathMatch:'prefix' },
    { path: 'index', component: DictionaryComponent, pathMatch:'prefix'  },
    { path: 'configure', component: ConfigureComponent, pathMatch:'prefix'  }
  ],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
