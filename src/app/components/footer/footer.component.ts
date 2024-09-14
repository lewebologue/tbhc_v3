import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { FooterMenu } from '../../shared/const/menu';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  #router = inject(Router);
  items!: MenuItem[];

  ngOnInit() {
    this.items = FooterMenu;
}

}
