import AbstractElement, { Selector } from 'playwright-abstract-element';

export default class IconButton extends AbstractElement {
  protected override selector: Selector;
  constructor(selector: string, parent?: AbstractElement) {
    super(parent);
    this.selector = selector;
  }
}
