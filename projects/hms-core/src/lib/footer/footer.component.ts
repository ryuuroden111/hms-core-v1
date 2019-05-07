import { Component, OnInit, Input } from '@angular/core';
import { Footer } from './models/footer.model';

@Component({
  selector: 'hms-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() public footerData: Footer;

  constructor() { }

  ngOnInit() {
  }

}
