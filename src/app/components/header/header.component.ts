import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { HeaderMenu } from '../../shared/const/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  #router = inject(Router);
  items!: MenuItem[];

  ngOnInit() {
    this.items = HeaderMenu;
}

}
