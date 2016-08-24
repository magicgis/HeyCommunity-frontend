import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {Helper} from '../../other/helper.component';
import {Auth} from '../../other/auth.component';
import {UserService} from '../../services/user.service';


@Component({
  templateUrl: 'build/pages/me/me-profile.html'
})
export class MeProfilePage {
  constructor(
    private navCtrl: NavController,
    private auth: Auth,
    private userService: UserService
  ) {
  }


  //
  //
  goToPage() {
  }
}