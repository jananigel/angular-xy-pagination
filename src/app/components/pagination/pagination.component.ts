import { Component, OnInit, Input } from '@angular/core';

const APPEAR_PAGE = 5;

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {

  @Input() pageCount = APPEAR_PAGE;

  pages: number[] = [];
  appearPages: number[] = [];
  currentPage = 1;

  constructor() {}

  ngOnInit() {
    this.initPages();
    this.appearPageHandler();
  }

  private initPages() {
    for (let i = 0; i < 999; ++ i) {
      this.pages.push(i + 1);
    }
  }

  private appearPageHandler() {
    this.appearPages = this.pages.slice(this.currentPage - 1, this.pageCount);
  }
}