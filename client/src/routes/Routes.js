import React from 'react';
import { Route } from 'react-router-dom';
import Lazyloading from './LazyLoading';
import { WithHeader } from './WithHeader';
import ProgressBar from 'react-topbar-progress-indicator';

ProgressBar.config({
  barColors: {
    0: '#EE384E',
    '1.0': '#EE384E',
  },
  shadowBlur: 5,
});

const Home = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/Home')), 0);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);
const ProductDetails = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/ProductDetails')), 500);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);
const Profile = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/Profile')), 500);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);
const Login = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/Login')), 500);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);
const Register = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/Register')), 500);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);
const Cart = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/Cart')), 500);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);

const Shipping = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/Shipping')), 500);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);
const Payment = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/Payment')), 500);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);
const PlaceOrder = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/PlaceOrder')), 500);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);
const OrderDetails = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/OrderDetails')), 500);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);

const Routes = () => (
  <>
    <WithHeader exact path="/" component={Home} />
    <WithHeader exact path="/search/:term" component={Home} />
    <WithHeader exact path="/product/:id" component={ProductDetails} />
    <WithHeader exact path="/cart/:id?" component={Cart} />
    <WithHeader path="/profile" component={Profile} />
    <Route path="/Login" component={Login} />
    <Route path="/register" component={Register} />
    <Route exact path="/shipping" component={Shipping} />
    <Route exact path="/payment" component={Payment} />
    <Route exact path="/place-order" component={PlaceOrder} />
    <WithHeader exact path="/order/:id" component={OrderDetails} />
  </>
);

export default Routes;
