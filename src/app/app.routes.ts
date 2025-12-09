import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter/counter-page';
import { Hero } from './pages/hero/hero';
import { DragonballPage } from './pages/dragonball/dragonball-page/dragonball-page';

export const routes: Routes = [
    {
      path:'',
      component: CounterPage,
    },

    {
    path: 'hero',
    component: Hero,
    },
        {
      path:'dragonball',
      component: DragonballPage
    },

    {
      path:'**',
      redirectTo: ''
    },



];
