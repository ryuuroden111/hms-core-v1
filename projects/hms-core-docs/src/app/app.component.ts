import { Component } from '@angular/core';
import { Header } from 'projects/hms-core/src/lib/header/models/header.model';
import { Footer } from 'projects/hms-core/src/lib/footer/models/footer.model';
import { SideBar } from 'projects/hms-core/src/lib/sidebar/models/sidebar.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public headerData: Header = {
    logo: {
      imgUrl: '/favicon.ico',
      alt: 'HMS LOGO',
      homePageUrl: ''
    },
    title: 'HMS 1.0',
    menu: [
      {
        displayText: 'Home',
        url: '/dashboard'
      },
      {
        displayText: 'About',
        url: '/about'
      },
      {
        displayText: 'Contact',
        url: '/contact'
      },
    ],
    user: {
      firstName: 'Nguyễn',
      lastName: 'Sang',
      email: 'sang.nguyen@orientsoftware.com',
      avatarUrl: 'assets/images/avatar-1.png'
    },
    userMenuLanguage: {
      profile: 'Profile',
      changePassword: 'Change Password',
      signOut: 'Sign Out'
    }
  };
  public footerData: Footer = {
    copyRightText: 'Copyright 2014 by Vingroup. All rights reserved.',
    logo: {
      imgUrl: '/favicon.ico',
      alt: 'HMS LOGO',
      homePageUrl: ''
    }
  };
  public sideBarData: SideBar = {
    title: 'HMS 1.0',
    menu: [
      {
        displayText: 'Home',
        url: '/dashboard'
      },
      {
        displayText: 'About',
        url: '/about'
      },
      {
        displayText: 'Contact',
        url: '/contact'
      },
    ],
  };

  public searchTerm: string;
  public onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    console.log(searchTerm);
  }

  public updateProfileMessage: string;
  public onUpdateProfile() {
    this.updateProfileMessage = "User would like to update his/her profile now !!!!";
  }

  public changePasswordMessage: string;
  public onChangePassword() {
    this.changePasswordMessage = "User would like to change his/her password now !!!!";
  }

  public signOutMessage: string;
  public onSignOut() {
    this.signOutMessage = "User would like to sign out now !!!!";
  }
}
