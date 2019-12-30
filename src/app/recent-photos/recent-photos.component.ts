import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import * as Actions from '../store/actions/Pics.actions';

@Component({
  selector: 'app-recent-photos',
  templateUrl: './recent-photos.component.html',
  styleUrls: ['./recent-photos.component.scss']
})
export class RecentPhotosComponent implements OnInit {
  recentPhotos= [];

  constructor(
    private apiData: ApiDataService,
    private store: Store<IAppState>

  ) { }

  ngOnInit() {
    this.apiData.fetchRecentPics().subscribe((data: any) => {
      this.addRecentPics(data.photos.photo);
    })
  }

  addRecentPics = (pics:Array<Object>)=> {
    this.store.dispatch(new Actions.AddRecentPics(pics))
    this.renderPhotos();
  }

  renderPhotos = ()=>{
    this.store.select('recentPics').subscribe((data: any) => {
      data.recentPhotos.forEach((element: any) => {
        element.imgUrl = `https://farm${element.farm}.staticflickr.com/${element.server}/${element.id}_${element.secret}.jpg`
      });
      this.recentPhotos = data.recentPhotos
    });
  }

}
