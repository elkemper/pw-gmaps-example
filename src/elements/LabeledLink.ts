import AbstractElement, { Selector } from 'playwright-abstract-element';

export default class LabeledLink extends AbstractElement {
  protected override readonly selector: Selector;
  constructor(label: string, parent?: AbstractElement) {
    super(parent);
    this.selector = { selector: 'a', options: { hasText: label } };
  }
}
