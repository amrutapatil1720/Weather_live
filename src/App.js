import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'roboto-npm-webfont';
import './App.css';

import ProgressComponent from './components/progress/progress';
import BrowserDetectComponent from './components/browser-detect/browser-detect';
import HeaderComponent from './components/header/header';
import WeatherLive from './components/introduction/introduction';
import FooterComponent from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <BrowserDetectComponent></BrowserDetectComponent>
          <ProgressComponent></ProgressComponent>

          <div className="section header-section">
            <div className="section-container header-component">
              <HeaderComponent></HeaderComponent>
            </div>
          </div>

          <div className="section colored">
            <div className="section-container">
              <WeatherLive></WeatherLive>
            </div>
          </div>


          <div className="section colored">
            <div className="section-container footer-component">
              <FooterComponent></FooterComponent>
            </div>
          </div>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
