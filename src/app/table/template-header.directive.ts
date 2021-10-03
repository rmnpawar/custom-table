import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[template-header]',
})
export class TemplateHeaderDirective {
  @Input('template-header') templateName: string = '';

  constructor(public readonly template: TemplateRef<any>) {}
}
