import { Routes } from '@angular/router';
import { PanelComponent } from './pages/panel/panel.component';
import { TestComponent } from './pages/test/test.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    { path: 'admin', component: AdminComponent},
    { path: 'panel', component: PanelComponent },
    { path: 'test', component: TestComponent},      
];
