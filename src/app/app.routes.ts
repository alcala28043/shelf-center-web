import { Routes } from '@angular/router';
import { CatalogsComponent } from './page/catalogs/catalogs.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/catalogs',
        pathMatch: 'full'
    },
    { 
        path: 'catalogs', 
        component: CatalogsComponent 
    },
    {
        path: 'disney-lorcana-tcg',
        loadChildren: () => import('./module/disney-lorcana-tcg/dl-tcg.module')
        .then(m => m.DLTCGModule), // Lazy loading del módulo
    },
    {
        path: '**',
        redirectTo: ''
    },
];
