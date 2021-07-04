import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainWrapper from "./components/Wrappers/MainWrapper";
import MainPage from "./pages/MainPage";
import PageNotFound from "./pages/PageNotFound";
import SigninPage from "./pages/SigninPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
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
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
