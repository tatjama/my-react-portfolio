//Global Style
import GlobalStyle from './components/GlobalStyle';
//Pages import
import AboutMe from './pages/AboutMe';
import MyWork from './pages/MyWork';
import MovieDetail from './pages/MovieDetail';
import ContactMe from './pages/ContactMe';
import Nav from './components/Nav';
//Router
import { Switch, Route, useLocation } from 'react-router-dom';
//Animations
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>  
      <AnimatePresence exitBeforeEnter>
        <Switch location = {location} key = {location.pathname}>
          <Route path = "/" exact>
              <AboutMe/> 
          </Route>
          <Route path = "/work" exact>
            <MyWork/> 
          </Route>
          <Route path = "/work/:id">
            <MovieDetail/>
          </Route>
          <Route path = "/bta" render = {() => (window.location = "https://bta-react.vercel.app/")}/>
          <Route path = "/ice-warming" render = {() => (window.location = "https://ice-warming.netlify.app/")}/>
          <Route path = "/eticket" render = {() => (window.location = "https://tatjama.github.io/e-ticket/")} />
          <Route path = "/player" render = {() => (window.location = "https://tanja-music.vercel.app/")} />
          <Route path = "/trioraha" render = {() => (window.location = "https://trioraha.com")} />
          <Route path = "/rock" render = {() => (window.location = "https://bonus-zadatak8-rock-paper-scissors.vercel.app/")} />
          <Route path = "/fullfun" render = {() => (window.location = "https://fullfun.vercel.app/")} />
          <Route path = "/contact">
            <ContactMe/>
          </Route>     
          <Route path = "/linkdin" render = {() => (window.location = "https://www.linkedin.com/in/tatjana-markovi%C4%87-919501189/")}/>    
          <Route path = "/github" render = {() => (window.location = "https://github.com/tatjama")}/>
          <Route path = "/cv" render = {() => (window.location ="./dowloads/TATJANA MARKOVIC_JavaScript.pdf")} />
        </Switch>    
      </AnimatePresence>
    </div>
  );
}

export default App;
