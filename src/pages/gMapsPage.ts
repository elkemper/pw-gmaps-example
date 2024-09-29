import ResultPanel from '../components/ResultsPanel';
import Search from '../components/Search';
import BasePage from './BasePage';

export default class MapsPage extends BasePage {
  public static searchBox = new Search();
  public static resultPanel = new ResultPanel();
}
