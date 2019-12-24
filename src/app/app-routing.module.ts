import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPeopleComponent } from './search-people/search-people.component';
import { SearchPhotosComponent } from './search-photos/search-photos.component';
import { SearchGroupsComponent } from './search-groups/search-groups.component';
import { RecentPhotosComponent } from './recent-photos/recent-photos.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: RecentPhotosComponent },
  { path: 'search', component: SearchPhotosComponent },
  { path: 'search/people', component: SearchPeopleComponent },
  { path: 'search/groups', component: SearchGroupsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
