import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const constants = {
  PAGE_SIZE: 5,
}


@Component({
  selector: 'a-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() cols = [];
  @Input() data: any[] = [];
  @Input() pageSize = constants.PAGE_SIZE;

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  page = 0;
  items: any[] = [];
  pageData = {} as {
    start: number,
    end: number
  }

  constructor() { }

  ngOnInit(): void {
    this.initPagination();
    console.log(this.page);
  }

  private initPagination(): void {
    this.paginate(this.page, this.pageSize);
  }

  public get tableHeight() {
    let columnHeight = 80;
    let rowHeight = 80;
    let margin = 20;

    return {
      height: `${(rowHeight + margin) * this.pageSize + columnHeight}px`
    }
  }

  public get size() {
    return this.data.length;
  }

  public get totalPages() {
    return Math.ceil(this.size / this.pageSize);
  }

  private paginate(page: number, pageSize: number): void {
    const startPosition = page * pageSize;
    let endPosition = startPosition + pageSize;

    if (endPosition > this.size) {
      endPosition -= endPosition - this.size;
    }

    this.saveCalculatedPosition(startPosition, endPosition);

    this.items = this.data.slice(startPosition, endPosition);
  }

  private saveCalculatedPosition(start: number, end: number) {
    this.pageData = {
      ...this.pageData,
      start,
      end
    }
  }

  prev() {
    if (this.page > 0) {
      this.page -= 1;
      this.paginate(this.page, this.pageSize);
    }
  }

  next() {
    if (this.page < this.totalPages - 1) {
      this.page += 1;
      this.paginate(this.page, this.pageSize);
    }
  }
}
