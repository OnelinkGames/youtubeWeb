import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, tap, finalize } from 'rxjs';
import { Names, NamesService } from './services/names.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilsService } from './services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  currentTime: Date | undefined;
  currentTimeZone: Date | undefined;
  currentTimeSubscription: Subscription | undefined;
  namesSubscription: Subscription | undefined;
  names!: Names[];
  nameInput: string | undefined;
  displayedColumns: string[] = ['id', 'name', 'date', 'actions'];

  constructor(
    private namesService: NamesService,
    private _snackBar: MatSnackBar,
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.setIntervalForTime();
    this.subscribeToNames();
    this.currentTimeZone = new Date();
    this.namesService.getNames();
  }

  setIntervalForTime(): void {
    this.currentTimeSubscription = interval(1000).pipe(
      tap(() => this.currentTime = new Date())).subscribe();
  }

  subscribeToNames(): void {
    this.namesSubscription = this.namesService.names$.pipe(
      tap((names) => this.names = names)).subscribe();
  }

  addName(): void {
    if (this.nameInput) {
      const name: Names = {
        name: this.nameInput,
        date: new Date().toISOString(),
        timezone: this.utilsService.getGMTFromDate(new Date())
      }

      this.namesService.addName(name).pipe(
        finalize(() => this.namesService.getNames())
      ).subscribe();
    } else {
      this.openSnackBar('You have not typed any name', 'OK');
    }
  }

  removeName(id: number): void {
    this.namesService.deleteName(id).pipe(
      finalize(() => this.namesService.getNames())
    ).subscribe();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  ngOnDestroy(): void {
    this.currentTimeSubscription?.unsubscribe();
    this.namesSubscription?.unsubscribe();
  }
}
