import React from 'react';
import PropTypes from 'prop-types';

const envOptions = ['qa', 'stage'];

export const Test = () => (<div>Test</div>);

Test.propTypes = {
  env: PropTypes.oneOf(envOptions).isRequired,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  string: PropTypes.string,
  number: PropTypes.number,
  array: PropTypes.array.isRequired,
  obj: PropTypes.shape({ name3: PropTypes.instanceOf(Array) }).isRequired,
};
