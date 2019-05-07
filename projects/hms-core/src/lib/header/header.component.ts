import { Component, OnInit, Input } from '@angular/core';
import { Logo } from './models/logo.model';
import { MenuItem } from './models/menu-item.model';
import { User } from './models/user.model';

@Component({
  selector: 'hms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() logo: Logo = {
        imgUrl: '/favicon.ico',
        alt: 'HMS LOGO',
        homePageUrl: ''
    }
    @Input() title = 'HMS 1.0';
    @Input() menu: MenuItem[] = [
        {
            displayText: 'menu 1',
            url: '/dashboard'
        },
        {
            displayText: 'menu 2',
            url: ''
        },
        {
            displayText: 'menu 3',
            url: '/dashboard'
        },
    ];
    @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
