import { Component } from '@angular/core';
import { GitHubService } from '../services/github.service'

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent {
  user:any;
  repos:any[];
  username: string;

  constructor(private _gitHubService: GitHubService){
    this.user = false;
  }

  searchUser(){
    this._gitHubService.updateUser(this.username);

    this._gitHubService.getUser().subscribe(user => {
      this.user = user;
    })

    this._gitHubService.getRepos().subscribe(repos => {
      this.repos = repos;
    })
  }

}
