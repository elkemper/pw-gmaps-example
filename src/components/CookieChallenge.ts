import AbstractElement, { Selector } from 'playwright-abstract-element';
import LabeledButton from '../elements/LabeledButton';

export default class CookieChallenge extends AbstractElement {
  protected override selector: Selector = '//div[.//h1]//div[./form][1]';
  constructor() {
    super();
  }
  public acceptButton = new LabeledButton('Priimti viską', this);
}
