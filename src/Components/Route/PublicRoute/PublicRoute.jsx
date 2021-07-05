/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect,
} from 'react-router-dom';

function PublicRoute({
  component: Component, layout: Layout, authenticated, ...rest
}) {
  const redirectURL = rest?.location?.state?.from?.pathname;
  return (
    <Route
      {...rest}
      render={(props) => (authenticated === false
        ? (Layout ? <Layout component={Component} {...props} /> : <Component {...props} />)
        : <Redirect to={`${redirectURL || '/home/services'}`} />)}
    />
  );
}

PublicRoute.propTypes = {
  authenticated: PropTypes.bool,
};

PublicRoute.defaultProps = {
  authenticated: false,
};

export default PublicRoute;
