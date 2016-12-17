import React from 'react';

import MicroContainer from 'universal/libs/micro-container';

import router from 'universal/router';

export default class PageContainer extends MicroContainer {
  _updateTitle(title) {
    window.document.title = title;
  }
  render() {
    const state = this.props.store.getState();
    const pageElement = router.getComponent(state.pathname, {state});

    if (typeof window === 'object') {
      this._updateTitle(state.title);
    }

    return <section className="page-container">{pageElement}</section>;
  }
}

PageContainer.propTypes = {};
