import createBrowserHistory from 'history/createBrowserHistory';
import createHashHistory from 'history/createHashHistory';

const createHistory = process.env.TARGET === 'githubpages' ? createHashHistory : createBrowserHistory;

const history = createHistory({
  getUserConfirmation: (message, callback) => callback(true),
  forceRefresh: true
});

const unlisten = history.listen((location, action) => {
  // console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`);
  // console.log(`The last navigation action was ${action}`);
});

const unblock = history.block((location, action) => '测试文案');

export default history;
