import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UnderwriterComponent } from './pages/underwriter/underwriter.component';
import { UnderwriterViewAllComponent } from './components/underwriterComponent/underwriter-view-all/underwriter-view-all.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"admin",
        component: AdminComponent
    },
    {
        path:"underwriter",
        component: UnderwriterComponent
    },
    {
        path:"underwriter/view-all",
        component: UnderwriterViewAllComponent
    }
    
];
