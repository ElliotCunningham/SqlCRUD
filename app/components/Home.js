import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Home extends Component {

  static propTypes = {route: PropTypes.object.isRequired}
  static displayName = 'Main App'
  static contextTypes = {router: PropTypes.object.isRequired}

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.router = this.context.router;
  }


  navigateTo(somewhere) {
    this.router.push(somewhere);
  }


  render() {
    return (
      <MuiThemeProvider>
        <div className="main">
          Bonjour, and Welcome.
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Home;
