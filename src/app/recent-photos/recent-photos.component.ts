import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-recent-photos',
  templateUrl: './recent-photos.component.html',
  styleUrls: ['./recent-photos.component.scss']
})
export class RecentPhotosComponent implements OnInit {
  recentPhotos: any;

  constructor(
    private apiData: ApiDataService

  ) { }

  ngOnInit() {
    this.apiData.fetchRecentPics().subscribe((data: any) => {
      data.photos.photo.forEach((element: any) => {
        element.imgUrl = `https://farm${element.farm}.staticflickr.com/${element.server}/${element.id}_${element.secret}.jpg`
      });
      this.recentPhotos = data.photos.photo
    })
  }

}
