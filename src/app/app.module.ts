import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PerpustakaanComponent } from './perpustakaan/perpustakaan.component';
import { DataComponent } from './data/data.component';


//tambah code berikut
import { PerpustakaanListComponent } from './perpustakaan/perpustakaan-list/perpustakaan-list.component';
import { PerpustakaanDetailComponent } from './perpustakaan/perpustakaan-detail/perpustakaan-detail.component';
//tambah code berkut (2)
import { PerpustakaanItemComponent } from './perpustakaan/perpustakaan-list/perpustakaan-item/perpustakaan-item.component';
import { DataEditComponent } from './data/data-edit/data-edit.component';
import { FooterComponent } from './footer/footer.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { DataService } from './data/data.service';
import { PerpustakaanEditComponent } from './perpustakaan/perpustakaan-edit/perpustakaan-edit.component';
import { PerpustakaanStartComponent } from './perpustakaan/perpustakaan-start/perpustakaan-start.component';
import { PerpustakaanService } from './perpustakaan/perpustakaan.service';
import { DataStorageService } from './shared/data-storage.service';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PerpustakaanComponent,
    DataComponent,

    PerpustakaanListComponent,
    PerpustakaanDetailComponent,
    PerpustakaanItemComponent,
    DataEditComponent,
    DropdownDirective,
    PerpustakaanStartComponent,
    PerpustakaanEditComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService, PerpustakaanService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
