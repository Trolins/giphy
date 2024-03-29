import { Injectable } from '@angular/core';
import { GifItem } from '../models/gifItem.model';

@Injectable({
  providedIn: 'root'
})

export class FormatService {
  constructor() { }
  
  filterItem(item:any): GifItem {
    return {
      title: item.title,
      date: item.import_datetime,
      image: item.images.downsized.url,
    }
  } 

  transformFnc (res:any): GifItem[] {
    return res.data.map((item:any)=> this.filterItem(item));
  }
}

