import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MakesaleComponent } from './components/makesale/makesale.component';
import { ReportsaleComponent } from './components/reportsale/reportsale.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'sale/make', component: MakesaleComponent },
    { path: 'sale/all', component: ReportsaleComponent },
    { path: '**', pathMatch: 'full', redirectTo:'home'},
];
export const APP_ROUTING = RouterModule.forRoot(routes);
