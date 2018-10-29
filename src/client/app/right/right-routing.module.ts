import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RightGroupComponent } from './rightgroup/right-group.component';
import { RightResolveGuard } from 'app/resolvers/right.resolver';

const routes: Routes = [
  { path: '', component: RightGroupComponent, resolve: { rightGroups: RightResolveGuard } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RightRoutingModule { }
