import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RightGroupComponent } from './rightgroup/right-group.component';
import { RightResolveGuard } from 'app/resolvers/right.resolver';
import { RightComponent } from './right/right.component';
import { RightGroupResolveGuard } from 'app/resolvers/right-group.resolver';

const routes: Routes = [
  { path: 'list', component: RightGroupComponent, resolve: { rightGroups: RightGroupResolveGuard } },
  { path: 'create', component: RightComponent, resolve: { rights: RightResolveGuard } },
  { path: ':rightGroupId', component: RightComponent, resolve: { rightGroupDetail: RightResolveGuard } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RightRoutingModule { }
