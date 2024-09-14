import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FfhgService } from '../../services/ffhg.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  #ffhgService = inject(FfhgService);

  ngOnInit(): void {
    this.#ffhgService.getResults().subscribe();
  }
}
