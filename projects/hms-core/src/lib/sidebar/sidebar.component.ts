import { Component, OnInit, Input } from '@angular/core';
import { SideBar } from './models/sidebar.model';

@Component({
  selector: 'hms-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() sideBarData: SideBar;

  constructor() { }

  ngOnInit() {
  }

}
