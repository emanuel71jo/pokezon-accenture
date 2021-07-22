import { Switch, Route, Redirect } from "react-router-dom";
import { Styled } from "./styles";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useAuth } from "../hooks/useAuth";

function Routes() {
  const { auth } = useAuth();

  return (
    <Styled.AppLayout>
      <Header />
      <Styled.PageLayout>
        <Switch>
          {auth !== "" ? (
            <Route exact path="/" component={Home} />
          ) : (
            <Route exact path="/" component={Login} />
          )}
          <Route exact path="/not-found" component={NotFound} />
          <Redirect from="*" to="/not-found" />
        </Switch>
      </Styled.PageLayout>
      <Footer />
    </Styled.AppLayout>
  );
}

export default Routes;
