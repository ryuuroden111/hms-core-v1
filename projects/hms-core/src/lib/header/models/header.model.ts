import { Logo } from './logo.model';
import { MenuItem } from './menu-item.model';
import { User } from './user.model';
import { UserMenuLanguage } from './user-menu-language.model';

export class Header {
    public logo: Logo;
    public title: string;
    public menu: MenuItem[];
    public user: User;
    public userMenuLanguage: UserMenuLanguage;
}