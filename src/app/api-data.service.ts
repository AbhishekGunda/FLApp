import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  serchQuery: any;

  constructor(
    private http: HttpClient,
  ) { }

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: any) {
    this.messageSource.next(message);
  }
  private API_URL = 'https://www.flickr.com/services/rest';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  fetchRecentPics = () => {
    let params = new HttpParams();
    params = params.append('method', 'flickr.photos.getRecent');
    params = params.append('api_key', 'bc789ead3cd571263131d62b64350a11');
    params = params.append('format', 'json');
    params = params.append('nojsoncallback', '1');
    return this.http.get(`${this.API_URL}`, { params: params })
  }

  fetchPhotos = (text: string) => {
    let params = new HttpParams();
    params = params.append('method', 'flickr.photos.search');
    params = params.append('api_key', 'bc789ead3cd571263131d62b64350a11');
    params = params.append('text', text);
    params = params.append('lang', 'en-US');
    params = params.append('per_page', '100');
    params = params.append('page', '1');
    params = params.append('format', 'json');
    params = params.append('nojsoncallback', '1');
    return this.http.get(`${this.API_URL}`, { params: params })
  }

  fetchPeople = (text: string) => {
    let params = new HttpParams();
    params = params.append('method', 'flickr.people.search');
    params = params.append('api_key', 'bc789ead3cd571263131d62b64350a11');
    params = params.append('username', text);
    params = params.append('exact', '0');
    params = params.append('loadFullContact', '1');
    params = params.append('per_page', '5');
    params = params.append('page', '1');
    params = params.append('format', 'json');
    params = params.append('nojsoncallback', '1');
    return this.http.get(`${this.API_URL}`, { params: params })
  }

  fetchGroups = (text: string) => {
    let params = new HttpParams();
    params = params.append('extras', 'datecreate,date_activity,eighteenplus,invitation_only,needs_interstitial,non_members_privacy,pool_pending_count,privacy,member_pending_count,icon_urls,date_activity_detail,use_vespa,membership_info,has_pending_invite,secure_rules');
    params = params.append('method', 'flickr.groups.search');
    params = params.append('api_key', 'bc789ead3cd571263131d62b64350a11');
    params = params.append('text', text);
    params = params.append('lang', 'en-US');
    params = params.append('per_page', '100');
    params = params.append('page', '1');
    params = params.append('format', 'json');
    params = params.append('nojsoncallback', '1');
    return this.http.get(`${this.API_URL}`, { params: params })
  }

}
