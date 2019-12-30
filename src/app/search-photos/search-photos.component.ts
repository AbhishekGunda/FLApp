import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from '../api-data.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import * as Actions from '../store/actions/Pics.actions';

@Component({
  selector: 'app-search-photos',
  templateUrl: './search-photos.component.html',
  styleUrls: ['./search-photos.component.scss']
})
export class SearchPhotosComponent implements OnInit {
  photos: any;
  query: string;
  params: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiDataService,
    private store: Store<IAppState>

  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.params = params
    });

    this.apiService.currentMessage.subscribe(temp => {
      this.apiService.fetchPhotos(temp || this.params.text).subscribe((data: any) => {
        this.addPhotos(data.photos.photo);
      })
    })
  }

  addPhotos = (pics: Array<Object>) => {
    this.store.dispatch(new Actions.AddSearchQueryPics(pics))
    this.renderPhotos();
  }

  renderPhotos = () => {
    this.store.select('recentPics').subscribe((data: any) => {
      data.searchQueryPhotos.forEach((element: any) => {
        element.imgUrl = `https://farm${element.farm}.staticflickr.com/${element.server}/${element.id}_${element.secret}.jpg`
      });
      this.photos = data.searchQueryPhotos
    });
  }

}
