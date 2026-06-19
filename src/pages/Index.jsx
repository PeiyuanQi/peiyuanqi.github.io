import React from 'react';

import Main from '../layouts/Main';

const Index = () => (
  // website meta data description.
  <Main
    description="Peiyuan Qi's personal website."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">To Infinity and Beyond.</h2>
          <p>
            Doo-dee doo dee-doo.
          </p>
        </div>
      </header>
      <p> Welcome to my website.
      </p>
    </article>
  </Main>
);

export default Index;
