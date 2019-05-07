import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Header } from './models/header.model';

@Component({
    selector: 'hms-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() public headerData: Header;

    @Output() public searchTerm: EventEmitter<string> = new EventEmitter<string>();
    @Output() public updateProfile: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() public changePassword: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() public signOut: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() {
    }

    public onClickUpdateProfile(): void {
        this.updateProfile.emit();
    }

    public onClickChangePassword(): void {
        this.changePassword.emit();
    }

    public onClickSignOut(): void {
        this.signOut.emit();
    }

    public onSearch(searchTerm: string): void {
        this.searchTerm.emit(searchTerm);
    }
}
