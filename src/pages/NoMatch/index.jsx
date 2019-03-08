import React, { Fragment } from 'react';
import CoreException from 'core/Exception';

const NoMatch = function() {
  return (
    <Fragment>
      <CoreException type="404" style={{ minHeight: 500, height: '80%' }} />
    </Fragment>
  );
};

export default NoMatch;
