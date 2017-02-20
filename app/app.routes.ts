import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailsComponent } from './user/user-details.component';
import { ProceduresListComponent } from './procedures/procedures-list.component';

export const routes: Routes = [
  { path: 'user', component: UserDetailsComponent },
  { path: 'procedures', component: ProceduresListComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);