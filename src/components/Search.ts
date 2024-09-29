import AbstractElement, { Selector } from 'playwright-abstract-element';
import IconButton from '../elements/IconButton';

export class SearchInput extends AbstractElement {
  protected override selector: Selector;
  constructor(parent?: AbstractElement) {
    super(parent);
    this.selector = '#searchbox input';
  }
}

class SearchSuggestionBox extends AbstractElement {
  protected override selector: Selector;
  constructor(parent?: AbstractElement) {
    super(parent);
    this.selector = 'xpath=.//div[@role="grid"]';
  }

  public async getSuggestionItems(): Promise<SearchSuggestionItem[]> {
    const itemsLocator = await this.find('xpath=.//div[@jsaction="suggestion.select" and @data-index]');
    const list = await itemsLocator.all();
    const items = list.map(async item => {
      const index = await item.getAttribute('data-index');
      const allTexts = await item.locator('span.fontBodyMedium').allInnerTexts();
      const mainText = allTexts.filter(Boolean)[0];
      
      return new SearchSuggestionItem(index, mainText, this);
    });
    return await Promise.all(items);
  }
}
class SearchSuggestionItem extends AbstractElement {
  protected override selector: Selector;
  constructor(index: string, public readonly mainText: string, parent?: AbstractElement) {
    super(parent);
    this.selector = `xpath=.//div[@jsaction="suggestion.select" and @data-index="${index}"]`;
  }
}

export default class Search extends AbstractElement {
  protected override readonly selector: Selector;
  constructor(parent?: AbstractElement) {
    super(parent);
    this.selector = 'xpath=.//div[@role="search"]';
  }

  public searchInput = new SearchInput(this);
  public suggestionsList = new SearchSuggestionBox(this);
  public searchButton = new IconButton('xpath=.//button[contains(@jsaction, "omnibox.search")]', this);
  public directionsButton = new IconButton('xpath=.//button[contains(@jsaction, "omnibox.showDirections")]', this);
}
