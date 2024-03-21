import { Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { PnfComponent } from './pnf/pnf.component';

export const routes: Routes = [
    { path: '', component: BannerComponent, title: 'njeik' },
    {path:'**', component: PnfComponent, title: '404'}
];
