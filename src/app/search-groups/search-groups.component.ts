import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from '../api-data.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import * as Actions from '../store/actions/Pics.actions';

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
    private apiData: ApiDataService,
    private store: Store<IAppState>

  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.params = params
    });

    this.apiData.currentMessage.subscribe(temp => {
      this.apiData.fetchGroups(temp || this.params.text).subscribe((data: any) => {
        this.addGrps(data.groups.group);
      })
    })
  }

  addGrps = (Groups: Array<Object>) => {
    this.store.dispatch(new Actions.AddSearchQueryGrps(Groups))
    this.renderGroups();
  }

  renderGroups = () => {
    this.store.select('recentPics').subscribe((data: any) => {
      this.groups = data.searchQueryGroups

    })
  }

}
