import { Routes } from '@angular/router';
import { UserGridComponent } from './components/views/master/user/grid/user-grid.component';
import { UserFormComponent } from './components/views/master/user/form/user-form.component';
import { RoleGridComponent } from './components/views/master/roles/grid/role-grid.component';
import { RoleFormComponent } from './components/views/master/roles/form/role-form.component';

export const routes: Routes = [
    { path: 'master/users', component: UserGridComponent},
    { path: 'master/users/form', component: UserFormComponent},
    { path: 'master/roles', component: RoleGridComponent},
    { path: 'master/roles/form', component: RoleFormComponent},
];