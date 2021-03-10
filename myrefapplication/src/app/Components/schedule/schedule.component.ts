import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGame } from 'src/backend/game';
import { scheduleService } from 'src/backend/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  allGames: Observable<IGame[]>;
  displayedColumns: string[] = [
    'Center',
    'Asst. Ref 1',
    'Asst. Ref 2',
    'Home Team',
    'Away Team',
    'Age Group',
    'Location',
    'Field #',
    'DateTime',
  ];

  dataSource: IGame[] = [];

  constructor(private scheduleService: scheduleService) {}

  ngOnInit(): void {
    this.allGames = this.scheduleService.getSchedule();
  }
}
