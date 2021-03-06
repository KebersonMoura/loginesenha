import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage {

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}

  onLogout(){
    console.log('Logout!');
    this.afAuth.signOut();
    this.router.navigateByUrl('/login');

  }

}

