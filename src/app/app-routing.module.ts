import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { PerpustakaanComponent } from './perpustakaan/perpustakaan.component';
import { DataComponent } from './data/data.component';
import { PerpustakaanStartComponent } from './perpustakaan/perpustakaan-start/perpustakaan-start.component';
import { PerpustakaanDetailComponent } from './perpustakaan/perpustakaan-detail/perpustakaan-detail.component';
import { PerpustakaanEditComponent } from './perpustakaan/perpustakaan-edit/perpustakaan-edit.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes:Routes=[
    { path:'',redirectTo:'home',pathMatch:'full' },
    { path:'home',component:HomeComponent },
    { path:'contact',component:ContactComponent },
    { path:'perpustakaans',component:PerpustakaanComponent,children:[
        { path:'',component:PerpustakaanStartComponent },
        { path: 'new',component:PerpustakaanEditComponent },
        { path: ':id',component:PerpustakaanDetailComponent },
        { path:':id/edit',component:PerpustakaanEditComponent },
    ]},
    { path:'data',component:DataComponent },
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}