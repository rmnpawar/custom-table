import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {

  filterObject: {fieldName?: string | undefined, value?: string | undefined};

  displayField: boolean = false;
  text: string = "";

  @Input() column: {colName: string, fieldName: string};
  @Output('filter') filter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  open() {
    this.displayField = !this.displayField;
  }

  valueChanged(value: string) {
    this.filterObject = {fieldName: this.column.fieldName, value: value};
    this.filter.emit(this.filterObject);
  }

}
