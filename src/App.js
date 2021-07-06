import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

// Lazy import for optimizing renders
const MainWrapper = React.lazy(() =>
  import("./components/Wrappers/MainWrapper")
);
const MainPage = React.lazy(() => import("./pages/MainPage"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));
const SigninPage = React.lazy(() => import("./pages/SigninPage"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Suspense fallback={""}>
          <Route exact path="/">
            <MainWrapper>
              <MainPage />
            </MainWrapper>
          </Route>

          <Route exact path="/auth/signin">
            <MainWrapper>
              <SigninPage />
            </MainWrapper>
          </Route>

          <Route exact path="/products">
            <MainWrapper>
              <PageNotFound />
            </MainWrapper>
          </Route>

          <Route exact path="/about">
            <MainWrapper>
              <PageNotFound />
            </MainWrapper>
          </Route>

          <Route exact path="/contact">
            <MainWrapper>
              <PageNotFound />
            </MainWrapper>
          </Route>

          {/* Catch all for wrong routes */}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Suspense>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
