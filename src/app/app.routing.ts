import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component'
const appRoutes = [
    {
        //http://localhost:4200
        path:'', 
        redirectTo: 'lista',
        pathMatch: 'full'
    },
    {
        //http://localhost:4200/lista
        path:'lista',
        component: ListAlbumsComponent
    },

    {
        //http://localhost:4200/detalle/5
        path: 'detalle/:id', 
        component: AlbumDetailComponent
    },
    {
        // Quienes somos
        path: 'quienes-somos',
        component:AboutUsComponent
    },
    {
        //  ** significa que no esta definica la ruta que colocamos 
        // Navegador
        path: '**',
        component:NotFoundComponent
    }

];

export const routing = RouterModule.forRoot(appRoutes);