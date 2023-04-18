import ReactOnRails from 'react-on-rails';

import MainApp from '../bundles/App/startup/App';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  MainApp
});
