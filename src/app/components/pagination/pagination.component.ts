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
    this.appearPageHandler(0, this.pageCount);
    // this.appearPageHandler();
  }

  onFirstPageClick() {

  }

  onPrevClick() {
    const appearPageLength = this.appearPages.length - 1;
    const firstAppearPage = this.appearPages[0];
    this.currentPage -= 1;
    if (this.currentPage <= firstAppearPage) {
      const pre = this.currentPage - this.pageCount <= 0 ? 0 : this.currentPage - this.pageCount;
      this.appearPageHandler(pre, pre + this.pageCount);
      // this.appearPageHandler(firstAppearPage);
    }
  }

  onPageClick(index: number) {
    const appearPageLength = this.appearPages.length - 1;
    const lastAppearPage = this.appearPages[appearPageLength - 1];
    this.currentPage = index;
    if (this.currentPage >= lastAppearPage) {
      // this.appearPageHandler();
    }
  }

  onNextClick() {
    const appearPageLength = this.appearPages.length - 1;
    const lastAppearPage = this.appearPages[appearPageLength - 1];
    this.currentPage += 1;
    if (this.currentPage >= lastAppearPage) {
      const next = this.pageCount + this.currentPage - 1 >= appearPageLength ? appearPageLength : this.pageCount + this.currentPage - 1;
      this.appearPageHandler(this.currentPage - 1, this.pageCount + this.currentPage - 1);
      // this.appearPageHandler(lastAppearPage);
    }
  }

  onLastPageClick() {

  }

  private initPages() {
    for (let i = 0; i < 20; ++ i) {
      this.pages.push(i + 1);
    }
  }

  // private appearPageHandler(boundary?: number) {
  private appearPageHandler(start: number, end: number) {
    const appearPageLength = this.appearPages.length - 1;
    // let start: number = 0;
    // let end: number = this.pageCount;
    // if (this.currentPage < boundary) {
    //   start = this.currentPage - this.pageCount <= 0 ? 0 : this.currentPage - this.pageCount;
    //   end = start + this.pageCount;
    //   // this.appearPageHandler(pre, pre + this.pageCount);
    //   this.appearPages = Array.from(this.pages).slice(start, end);
    //   return;
    // }
    // if (this.currentPage > boundary) {
    //   const next = this.pageCount + this.currentPage - 1 >= appearPageLength ? appearPageLength : this.pageCount + this.currentPage - 1;
    //   start = this.currentPage - 1;
    //   end = this.pageCount + this.currentPage - 1;
    //   // this.appearPageHandler(this.currentPage - 1, this.pageCount + this.currentPage - 1);
    //   this.appearPages = Array.from(this.pages).slice(start, end);
    //   return;
    // }
    // this.appearPages = Array.from(this.pages).slice(start, end);
    this.appearPages = Array.from(this.pages).slice(start, end);
  }
}