import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhotographsComponent } from './photographs/photographs.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mywork/photographs', component: PhotographsComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    relativeLinkResolution: 'legacy',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'ignore',
    
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
