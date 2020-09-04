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
    this.appearPages = Array.from(this.pages).slice(0, this.pageCount);
  }

  onFirstPageClick() {
    this.currentPage = 1;
    this.appearPageHandler();
  }

  onPrevClick() {
    this.currentPage -= 1;
    this.appearPageHandler();
  }

  onPageClick(index: number) {
    this.currentPage = index;
    this.appearPageHandler();
  }

  onNextClick() {
    this.currentPage += 1;
    this.appearPageHandler();
  }

  onLastPageClick() {
    const totalPages = this.pages.length - 1;
    this.currentPage = this.pages[totalPages];
    this.appearPageHandler();
  }

  private initPages() {
    for (let i = 0; i < 20; ++ i) {
      this.pages.push(i + 1);
    }
  }

  private appearPageHandler() {
    const appearPageLength = this.appearPages.length - 1;
    const lastAppearPage = this.appearPages[appearPageLength];
    const firstAppearPage = this.appearPages[1];

    if (this.currentPage >= this.pages[this.pages.length - 1]) {
      this.appearPages = Array.from(this.pages).slice(this.pages.length - this.pageCount + 1, this.pages.length);
      return;
    }

    if (this.currentPage > lastAppearPage - 1) {
      const next = this.currentPage - 1;
      const endPage = this.pageCount + this.currentPage - 1;
      this.appearPages = Array.from(this.pages).slice(next, endPage);
      return;
    }

    if (this.currentPage < firstAppearPage) {
      const pre = this.currentPage - this.pageCount <= 0 ? 0 : this.currentPage - this.pageCount;
      const startPage = pre + this.pageCount;
      this.appearPages = Array.from(this.pages).slice(pre, startPage);
    }
  }
}