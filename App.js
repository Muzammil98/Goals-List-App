import React, {Component} from 'react';
import {Container, Spinner, Root} from 'native-base';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './store';

import Todo from './components/Todo';

class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Spinner />}>
          <Container style={{flex: 1}}>
            <Root>
              <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <Todo />
              </TouchableWithoutFeedback>
            </Root>
          </Container>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
