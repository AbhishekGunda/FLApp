import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPeopleComponent } from './search-people/search-people.component';
import { SearchPhotosComponent } from './search-photos/search-photos.component';
import { SearchGroupsComponent } from './search-groups/search-groups.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RecentPhotosComponent } from './recent-photos/recent-photos.component';
import { appReducers } from './store/reducers/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    SearchPeopleComponent,
    SearchPhotosComponent,
    SearchGroupsComponent,
    HeaderComponent,
    RecentPhotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
