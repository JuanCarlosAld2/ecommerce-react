import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col items-center mt-20'>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };


/*
mt- par que tenga un margen por debajo y no se metan elemetos

*/