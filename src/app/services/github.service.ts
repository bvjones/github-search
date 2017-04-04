import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GitHubService{
  private username:string;
  private client_id =  'd908fba99911433dd23d';
  private client_secret = '217e15fbb8b230dfa5bceedcdb9e82b9e3762cf2';

  constructor(private _http: Http){
    console.log("GitHubService ready");
    this.username = 'bvjones'
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map (res => res.json());
  }
  getRepos(){
      return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map (res => res.json());
  }
  updateUser(username:string){
    this.username = username
  }
}
