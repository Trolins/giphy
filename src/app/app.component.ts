import { Component, OnInit } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { SearchComponent } from './search/search.component';
import { GiphyService } from './services/giphy.service';
import { FormatService } from './services/format.service';
import { GifItem } from './models/gifItem.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  contentList!: GifItem[];
  constructor(
    private GiphyService: GiphyService,
    private FormatService: FormatService,
    ) { }

  ngOnInit(): void {
    this.GetTrendingGif();
  }
  GetTrendingGif() { 
    this.GiphyService.GetTrendingGif(10).subscribe(
      res => {
        this.contentList = this.FormatService.transformFnc(res);
      },
      error => {
        console.log("Error -", error)
      }
    )
  }
  getSearchedGif($event : string) { 
    this.GiphyService.GetSearchGif(10, $event).subscribe(
      res => {
        this.contentList = this.FormatService.transformFnc(res);
      },
      error => {
        console.log("Error -", error)
      }
    )
  }

  searchGif ($event: string) {
    if ($event.length == 0) {
      this.GetTrendingGif();
    } else {
      this.getSearchedGif($event);
    }
  }
}
