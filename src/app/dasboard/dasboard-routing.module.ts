
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DasboardPage } from './dasboard.page';

const routes: Routes = [
  {
    path: '',
    component: DasboardPage,
    children: [
      {
        path: 'add',
        loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DasboardPageRoutingModule {}
