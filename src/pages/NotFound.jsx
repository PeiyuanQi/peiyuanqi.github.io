import React from 'react';
import { Link } from 'react-router-dom';
import DocumentHead from '../components/Template/DocumentHead';

const PageNotFound = () => (
  <>
    <DocumentHead
      title="404 Not Found"
      titleTemplate={null}
      description="The content you are looking for cannot be found."
    />
    <div className="not-found">
      <h1 data-testid="heading">Page Not Found</h1>
      <p>Return <Link to="/">home</Link>.</p>
    </div>
  </>
);

export default PageNotFound;
