import React from 'react';
import classNames from 'classnames';

import MicroContainer from 'universal/libs/micro-container';

import router from 'universal/router';

export default class ApplicationContainer extends MicroContainer {
  _updateTitle(title) {
    window.document.title = title;
  }
  render() {
    const state = this.props.store.getState();
    const pageElement = router.getComponent(state.pathname, {state});

    if (typeof window === 'object') {
      this._updateTitle(state.title);
    }

    return (
      <section className={classNames('application-content', state.ui)}>
        <section className="page-container">{pageElement}</section>
      </section>
    );
  }
}

ApplicationContainer.propTypes = {};
