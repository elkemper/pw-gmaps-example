import { test } from 'playwright/test';
import MapsPage from '../pages/gMapsPage';
import { startFlow, waitLoad } from '../helpers/FlowHelper';
import CookiesPage from '../pages/CookiesPage';

test('Searches London and checks result', async () => {
  await startFlow();
  await CookiesPage.cookieChallenge.acceptButton.click();
  await waitLoad();

  await MapsPage.searchBox.searchInput.click();
  await MapsPage.searchBox.searchInput.type('London');
  await waitLoad();

  test.step('collect suggestions', async () => {
    const items = await MapsPage.searchBox.suggestionsList.getSuggestionItems();
    const londonSuggest = items.find(el => el.mainText.match('London'));
    await londonSuggest.expect.toBeTruthy();
  });
  await MapsPage.searchBox.searchButton.click();
  await waitLoad();

  const headerElement = MapsPage.resultPanel.header;
  await headerElement.expect.toHaveText('Londonas');
});
