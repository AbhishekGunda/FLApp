import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-search-groups',
  templateUrl: './search-groups.component.html',
  styleUrls: ['./search-groups.component.scss']
})
export class SearchGroupsComponent implements OnInit {
  params: any;
  groups: any;

  constructor(
    private route: ActivatedRoute,
    private apiData: ApiDataService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.params = params
    });

    this.apiData.currentMessage.subscribe(temp => {
      console.log(temp)
      this.apiData.fetchGroups(temp || this.params.text).subscribe((data: any) => {
        this.groups = data.groups.group
      })
    })


  }

}
