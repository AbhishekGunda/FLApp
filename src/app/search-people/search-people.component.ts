import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiDataService } from '../api-data.service';

@Component({
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.scss']
})
export class SearchPeopleComponent implements OnInit {
  order: any;
  params: any;

  constructor(private route: ActivatedRoute,
    private apiData: ApiDataService
  ) { }

  ngOnInit() {
    console.log('a')
    this.route.queryParams.subscribe((params: any) => {
      this.params = params
    });

    this.apiData.currentMessage.subscribe(temp => {
      console.log(temp)
      this.apiData.fetchPeople(temp).subscribe(data => {
        console.log(data)
      })
    })

    this.apiData.fetchPeople(this.params.username).subscribe(data => {
      console.log(data)
    })



  }

}
