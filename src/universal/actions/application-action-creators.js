import {dispatch} from 'universal/libs/micro-dispatcher';
import types from 'universal/constants/action-types';
import {getUI} from 'universal/helpers';

function updateTitle(title) {
  return new Promise(resolve => {
    dispatch({
      type: types.UPDATE_TITLE,
      title,
    });
    resolve();
  });
}

function initializePage(pathname) {
  switch (pathname) {
    case '/':
      updateTitle('Bucket');
      break;
    case '/styleguide':
      updateTitle('Styleguide | Bucket');
      break;
    default:
      updateTitle('Not Found | Bucket');
      break;
  }
}

export function startApplication(pathname, useragent, locale, isAuthenticated) {
  initializePage(pathname);
  dispatch({
    type: types.START_APP,
    ui: getUI(useragent),
    pathname,
    locale,
    isAuthenticated,
  });
}

export function changeLocation(pathname) {
  initializePage(pathname);
  dispatch({
    type: types.CHANGE_LOCATION,
    pathname,
  });
}
