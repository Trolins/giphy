import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  inputText: string = '';
  @Output() searchedText = new EventEmitter<string>();

  searchGIF(text:string) {
    if (text.length == 0 || text.length > 2) {
      this.searchedText.emit(text);
    }
  }
}
