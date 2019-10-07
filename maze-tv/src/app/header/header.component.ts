import { Component, OnInit, Input } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private searchService: SearchService) { }
  values = '';
  results;
  ngOnInit() {
  }

  change(event: any): void {
    this.searchService.searchShows(event.value).subscribe(data => {
      this.results = data;
      console.log(data);
    });
  }
}
