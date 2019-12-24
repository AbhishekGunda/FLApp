import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchQueryText: any;
  inputValue: any;
  username: string;
  showSuggestions: boolean;

  constructor(
    private apidata: ApiDataService,
    private route: Router,
    private router: ActivatedRoute


  ) { }

  ngOnInit() {
    this.username = ''
    this.router.queryParams.subscribe((params: any) => {
      this.username = params.text || params.username;
    });
  }
  

  onKey(event: { target: { value: any; }; keyCode: number; }) {
    this.inputValue = event.target.value;

    if (this.inputValue !== '') {
      this.showSuggestions = true;
    }
    else {
      this.showSuggestions = false;
    }
    if (event.keyCode === 13) {
      this.publishCustomerData(this.inputValue);
      this.showSuggestions = false;
      if (window.location.pathname.includes('groups')) {
        this.typeClicked('groups')
      } else if (window.location.pathname.includes('people')) {
        this.typeClicked('people')
      } else {
        this.typeClicked('photos')
      }
    }

  }

  publishCustomerData(searchData: any) {
    this.apidata.changeMessage(searchData);
  }

  typeClicked = (type) => {
    this.showSuggestions = false;

    if (type === 'photos') {
      this.route.navigate(['/search'], { queryParams: { text: this.inputValue || this.username || '' } });

    } else if (type === 'people') {
      this.route.navigate(['/search/people'], { queryParams: { username: this.inputValue || this.username || '' } });

    } else if (type === 'groups') {
      this.route.navigate(['/search/groups'], { queryParams: { text: this.inputValue || this.username || '' } });
    }
  }

}
