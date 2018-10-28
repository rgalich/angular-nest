import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RightComponent } from 'app/right/right/right.component';
import { RightResolveGuard } from 'app/resolvers/right.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent, children:
    [
      { path: 'rightgroups', component: RightComponent, resolve: { rightGroups: RightResolveGuard } }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
