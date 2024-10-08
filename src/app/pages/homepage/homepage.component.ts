import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FfhgService } from '../../services/ffhg.service';
import { MatchTableComponent } from '../../components/match-table/match-table.component';
import { RankingTableComponent } from '../../components/ranking-table/ranking-table.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, MatchTableComponent, RankingTableComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  #ffhgService = inject(FfhgService);

  ngOnInit(): void {
    this.#ffhgService.getResults().subscribe();
  }
}
