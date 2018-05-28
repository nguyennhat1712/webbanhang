import {Routes, RouterModule} from '@angular/router';
import {TrangchuComponent} from '../app/home/trangchu/trangchu.component';
import { HomeModule } from './home/home.module';
const routing:Routes = [
    // {path:'', component:TrangchuComponent, data:{title:'Trang Chu'}},
    {path:'',loadChildren:()=>HomeModule},
    // truyền một tham số
    // {path:'moviedetail/:id', component:MoviedetailComponent}
    // truyền nhiều tham số
  
    // {path:'**',component:TrangchuComponent, data:{title:'Trang Chu'}},
    // redirectTo 
];

export const appRoutes = RouterModule.forRoot(routing)