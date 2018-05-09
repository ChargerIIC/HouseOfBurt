import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { FIREBASE_CONFIG } from './app.firebase.config';

//TODO: Remove
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { ApplicationsComponent } from './components/applications/applications.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
		FetchDataComponent,
		NewsComponent,
		HomeComponent,
		ContactComponent,
		ProductsComponent,
		ApplicationsComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
			{ path: 'counter', component: CounterComponent },
			{ path: 'applications', component: ApplicationsComponent },
			{ path: 'contact', component: ContactComponent },
			{ path: 'news', component: NewsComponent },
			{ path: 'products', component: ProductsComponent },
            { path: '**', redirectTo: 'home' }
		]),
		AngularFireModule.initializeApp(FIREBASE_CONFIG),
		AngularFireAuthModule,
		AngularFireDatabaseModule,
    ]
})
export class AppModuleShared {
}
