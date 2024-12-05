import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button'; // MatButtonModule for buttons
import { MatCardModule } from '@angular/material/card'; // MatCardModule for card components
import { MatIconModule } from '@angular/material/icon'; // MatIconModule if needed for icons
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { SquareComponent } from './components/square/square.component';
import { GameService } from './game.service';
import { GetClassPipe } from './pipes/get-class.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SquareComponent,
    GetClassPipe
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,  // Add any other needed Angular Material modules
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
