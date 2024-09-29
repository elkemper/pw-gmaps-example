import AbstractElement, { Selector } from 'playwright-abstract-element';

export default class PageElement extends AbstractElement {
  protected override selector: Selector;
  constructor(selector: string, parent?: AbstractElement) {
    super(parent);
    this.selector = selector;
  }
}
