import React from 'react';

import MicroFluxRouter from 'universal/libs/micro-flux-router';

import HomePage from 'universal/views/universal/pages/home-page';
import StyleguidePage from 'universal/views/universal/pages/styleguide-page';
import Link from 'universal/views/universal/components/link';

import {updateTitle} from 'universal/actions/application-action-creators';

const router = new MicroFluxRouter();

router.register('/', {
  action: () => {
    return new Promise(resolve => {
      updateTitle('Bucket');
      resolve();
    });
  },
  component: (prams, props_) => {
    if (!props_.state.isAuthenticated) {
      return <HomePage state={props_.state}/>;
    }
    return (
      <section className="page">
        <h1>Bucket</h1>
        <div>
          <Link href="/styleguide">styleguide</Link>
        </div>
        <a href="/logout">logout</a>
      </section>
    );
  },
});

router.register('/styleguide', {
  action: () => {
    return new Promise(resolve => {
      updateTitle('Styleguide | Bucket');
      resolve();
    });
  },
  component: (prams, props_) => {
    return <StyleguidePage state={props_.state}/>;
  },
});

router.register({
  action: () => {
    return new Promise(resolve => {
      updateTitle('Not Found | Bucket');
      resolve();
    });
  },
  component: () => {
    return (
      <section className="page">
        <h1>Not Found</h1>
        <Link href="/">top</Link>
      </section>
    );
  },
});

export default router;
