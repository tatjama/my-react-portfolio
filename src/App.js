//Global Style
import GlobalStyle from './components/GlobalStyle';
//Pages import
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
import ContactUs from './pages/ContactUs';
import Nav from './components/Nav';
//Router
import { Switch, Route, useLocation } from 'react-router-dom';
//Animations
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();
  console.log(location)
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>  
      <AnimatePresence exitBeforeEnter>
        <Switch location = {location} key = {location.pathname}>
          <Route path = "/" exact>
              <AboutUs/> 
          </Route>
          <Route path = "/work" exact>
            <OurWork/> 
          </Route>
          <Route path = "/work/:id">
            <MovieDetail/>
          </Route>
          <Route path = "/bta" render = {() => (window.location = "https://business-travel-agency-react.vercel.app/")}/>
          <Route path = "/eticket" render = {() => (window.location = "https://tatjama.github.io/e-ticket/")} />
          <Route path = "/player" render = {() => (window.location = "https://tanja-music.vercel.app/")} />
          <Route path = "/rock" render = {() => (window.location = "https://tatjama.github.io/fem-rock-paper-scissors-master/")} />
          <Route path = "/fullfun" render = {() => (window.location = "https://privatniboravak.com")} />
          <Route path = "/contact">
            <ContactUs/>
          </Route>     
          <Route path = "/linkdin" render = {() => (window.location = "https://www.linkedin.com/in/tatjana-markovi%C4%87-919501189/")}/>    
          <Route path = "/github" render = {() => (window.location = "https://github.com/tatjama")}/>
          <Route path = "/cv" render = {() => (window.location ="./dowloads/tatjana_markovic_cv.pdf")} />
        </Switch>    
      </AnimatePresence>
    </div>
  );
}

export default App;
