import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {

  displayField: boolean = false;

  @Input() column: {colName: string, fieldName: string};
  @Output('filter') filter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  open() {
    this.displayField = true;
    console.log(this.column.fieldName)
  }

  valueChanged(value: string) {
    console.log(value);
    this.filter.emit(value);
  }

}
