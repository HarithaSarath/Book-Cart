import React from 'react'
import MainStackNavigator from './src/navigation/AppNavigator'
import { Provider as StoreProvider } from 'react-redux'

import Store from './src/redux/Store'

export default function App() {
  return (
    <StoreProvider store={Store}>
      <MainStackNavigator />
    </StoreProvider>
    )
}



