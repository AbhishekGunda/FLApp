import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from '../api-data.service';

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
    private apiService: ApiDataService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.params = params
    });

    this.apiService.currentMessage.subscribe(temp => {
      console.log(temp)
      this.apiService.fetchPhotos(temp || this.params.text).subscribe((data: any) => {
        console.log(data);
        data.photos.photo.forEach((element: any) => {
          element.imgUrl = `https://farm${element.farm}.staticflickr.com/${element.server}/${element.id}_${element.secret}.jpg`
        });
        this.photos = data.photos.photo;
      })
    })
  }

}
