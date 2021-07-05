import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Switch,
} from 'react-router-dom';
import { makeSelectAuthenticatedStatus } from '../Redux/App/selectors';
import {
  getMeRequest,
} from '../Redux/App/actions';
import { useInjectSaga } from '../Helpers/injectSaga';
import { useInjectReducer } from '../Helpers/injectReducer';
import saga from '../Redux/App/sagas';
import reducer from '../Redux/App/reducer';

import LoadingIndicator from '../Components/LoadingIndicator/LoadingIndicator';
import CustomRoute from '../Components/Route/CustomRoute/CustomRoute';

// layout
import DashboardLayout from '../Layouts/DashboardLayout/DashboardLayout';

import ThuongTestScreen from '../Screens/ThuongTest/ThuongTestScreen';

// lazy load route see App.routes.jsx

export default function AppRoutes() {
  // inject global
  useInjectSaga({ key: 'global', saga });
  useInjectReducer({ key: 'global', reducer });

  const dispatch = useDispatch();
  const authenticated = useSelector(makeSelectAuthenticatedStatus());
  useEffect(() => {
    dispatch(getMeRequest());
  }, []);

  return authenticated === null ? <LoadingIndicator /> : (
    <Suspense fallback={<LoadingIndicator />}>
      <Switch>
        <CustomRoute exact path="/thuong" component={ThuongTestScreen} layout={DashboardLayout} />
      </Switch>
    </Suspense>
  );
}
