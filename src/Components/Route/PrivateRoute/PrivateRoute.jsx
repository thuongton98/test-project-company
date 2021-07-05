/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect,
} from 'react-router-dom';

function PrivateRoute({
  component: Component, layout: Layout, authenticated, ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => (authenticated === true ? (
        (Layout ? <Layout component={Component} {...props} /> : <Component {...props} />)
      ) : (
        <Redirect
          to={{ pathname: '/auth/login', state: { from: props.location } }}
        />
      ))}
    />
  );
}

PrivateRoute.propTypes = {
  authenticated: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  authenticated: false,
};

export default PrivateRoute;
