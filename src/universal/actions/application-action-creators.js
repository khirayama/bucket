import {dispatch} from 'universal/libs/micro-dispatcher';
import types from 'universal/constants/action-types';
import {getUI} from 'universal/helpers';

import axios from 'axios';

function updateTitle(title) {
  return new Promise(resolve => {
    dispatch({
      type: types.UPDATE_TITLE,
      title,
    });
    resolve();
  });
}

function initializePage(pathname, token) {
  const params = {};

  switch (pathname) {
    case '/':
      updateTitle('Bucket');

      params.access_token = token;
      axios.get('https://api.instagram.com/v1/locations/213046462', {params}).then(({data}) => {
        console.log(data);
      });

      break;
    case '/styleguide':
      updateTitle('Styleguide | Bucket');
      break;
    default:
      updateTitle('Not Found | Bucket');
      break;
  }
}

export function startApplication(pathname, useragent, locale, isAuthenticated, token) {
  initializePage(pathname, token);
  dispatch({
    type: types.START_APP,
    ui: getUI(useragent),
    pathname,
    locale,
    isAuthenticated,
    token,
  });
}

export function changeLocation(pathname) {
  initializePage(pathname);
  dispatch({
    type: types.CHANGE_LOCATION,
    pathname,
  });
}
