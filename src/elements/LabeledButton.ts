import AbstractElement, { Selector } from 'playwright-abstract-element';

export default class LabeledButton extends AbstractElement {
  protected override readonly selector: Selector;
  constructor(label: string, parent?: AbstractElement) {
    super(parent);
    this.selector = `xpath=.//button[.//*[text()="${label}"]]`;
  }
}
