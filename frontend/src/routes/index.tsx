import { Switch, Route, Redirect } from 'react-router-dom'

// Pages
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import { PokeCart } from '../pages/PokeCart'
import { Profile } from '../pages/Profile'

// Components
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

// Hooks
import { useAuth } from '../hooks/useAuth'

// Styles
import { Styled } from './styles'

function Routes() {
  const { auth } = useAuth()

  return (
    <Styled.AppLayout>
      <Header />
      <Styled.PageLayout>
        <Switch>
          {auth === '' && <Route exact path="/" component={Login} />}
          <Route exact path={'/home'} component={Home} />
          <Route exact path="/pokecart" component={PokeCart} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect exact from="/" to="/home" />
          <Redirect from="*" to="/not-found" />
        </Switch>
      </Styled.PageLayout>
      <Footer />
    </Styled.AppLayout>
  )
}

export default Routes
