import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { RouterLink } from '@angular/router';
import {
  lucideCircle, lucideLayers, lucideMessageSquare,
  lucideCode, lucideMail, lucideLogOut
} from '@ng-icons/lucide';
import { BrnMenuTriggerDirective } from '@spartan-ng/brain/menu';
import {
  HlmMenuComponent,
  HlmMenuGroupComponent, HlmMenuItemDirective, HlmMenuItemIconDirective, HlmMenuLabelComponent,
  HlmMenuSeparatorComponent, HlmMenuShortcutComponent, HlmSubMenuComponent

} from '@spartan-ng/ui-menu-helm';
import { HlmMenuBarModule } from "../../../libs/ui/ui-menu-helm/src/index";
import { HlmMenuModule } from "../../../libs/ui/ui-menu-helm/src/index";

@Component({
  imports: [
    RouterLink,
    BrnMenuTriggerDirective,
    HlmMenuComponent,
    HlmMenuGroupComponent,
    HlmMenuItemDirective,
    HlmMenuLabelComponent,
    HlmButtonDirective,
    HlmMenuBarModule,
    HlmButtonDirective,
    HlmMenuModule,
    HlmButtonDirective,
  ],
  selector:'app-navbar'
  ,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  toggle = false;

  toggler(): boolean {
    this.toggle = !this.toggle
    return this.toggle
  }

}
