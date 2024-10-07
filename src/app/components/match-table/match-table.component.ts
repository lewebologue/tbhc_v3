import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FfhgService } from '../../services/ffhg.service';

@Component({
  selector: 'app-match-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match-table.component.html',
  styleUrl: './match-table.component.scss'
})
export class MatchTableComponent {
  #ffhgService = Inject(FfhgService)

  visitor_name!: string;
  visitor_score!: string;
  visitor_logo!: string;

  receiver_name!: string;
  receiver_score!: string;
  receiver_logo!: string;

  match_date!: string;
  practice!: string;

}
