/**
 * @file history对象
 * @author mengchen <sisimengchen@gmail.com>
 */
import createBrowserHistory from 'history/createBrowserHistory';
import createHashHistory from 'history/createHashHistory';
import { historyMode } from 'core/options';

const createHistory = historyMode === 'Hash' ? createHashHistory : createBrowserHistory;

export const history = createHistory({
  getUserConfirmation: (message, callback) => callback(true),
  forceRefresh: false
});

const unlisten = history.listen((location, action) => {
  // console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`);
  // console.log(`The last navigation action was ${action}`);
});

const unblock = history.block((location, action) => '测试文案');
