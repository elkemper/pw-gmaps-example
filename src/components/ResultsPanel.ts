import AbstractElement, { Selector } from 'playwright-abstract-element';
import PageElement from '../elements/PageElement';

export default class ResultPanel extends AbstractElement {
  protected override selector: Selector = `//div[@role="main"]`;
  public header = new PageElement('h1', this);
}
