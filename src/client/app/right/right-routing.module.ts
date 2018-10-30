import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RightGroupComponent } from './rightgroup/right-group.component';
import { RightResolveGuard } from 'app/resolvers/right.resolver';
import { RightComponent } from './right/right.component';

const routes: Routes = [
  { path: 'list', component: RightGroupComponent, resolve: { rightGroups: RightResolveGuard } },
  { path: 'create', component: RightComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RightRoutingModule { }
