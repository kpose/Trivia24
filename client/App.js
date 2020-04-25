import React from 'react';
import { Root } from "native-base";
import { Provider } from "react-redux";
import { showHideModal } from "./src/state/actions";
import store from "./src/state/store";
import WelcomeStackNavigator from './src/routes/WelcomeStackNavigator';
//import MainLayout from './src/components/MainLayout'


export default class App extends React.Component {

  constructor(inProps) {
    super(inProps);
  }

  render() {
    return (
      <Provider store = {store}>
        <Root>
          <WelcomeStackNavigator />
        </Root>
      </Provider>
    )
  }

  componentDidMount() {
    store.dispatch(showHideModal("namePrompt", true));
  };

}
