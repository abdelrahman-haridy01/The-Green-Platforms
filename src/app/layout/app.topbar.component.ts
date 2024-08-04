import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
  standalone: true,
  imports: [NgClass, RouterLink, InputSwitchModule, FormsModule],
})
export class AppTopBarComponent {
  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService) {}

  get drakMode(): boolean {
    return this.layoutService.config().drakMode;
  }
  set drakMode(_val: boolean) {
    this.layoutService.config.update((config) => ({
      ...config,
      drakMode: _val,
      theme: _val ? 'the-green-dark' : 'the-green-light',
    }));
  }
}
