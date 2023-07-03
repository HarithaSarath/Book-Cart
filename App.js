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



// import React from 'react';
// import { StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { ProductsList } from './screens/ProductList.js';
// import { ProductDetails } from './screens/ProductDetails.js';
// import { Cart } from './screens/Cart.js';
// import { CartIcon } from './components/CartIcon.js';
// import { CartProvider } from './CartContext.js';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <CartProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name='Products' component={ProductsList} 
//           options={({ navigation }) => ({
//             title: 'Products',
//             headerTitleStyle: styles.headerTitle,
//             headerRight: () => <CartIcon navigation={navigation}/>
//           })}/>
//           <Stack.Screen name='ProductDetails' component={ProductDetails} 
//           options={({ navigation }) => ({
//             title: 'Product details',
//             headerTitleStyle: styles.headerTitle,
//             headerRight: () => <CartIcon navigation={navigation}/>,
//           })} />
//           <Stack.Screen name='Cart' component={Cart} 
//           options={({ navigation }) => ({
//             title: 'My cart',
//             headerTitleStyle: styles.headerTitle,
//             headerRight: () => <CartIcon navigation={navigation}/>,
//           })} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </CartProvider>
//   );
// }

// const styles = StyleSheet.create({
//   headerTitle: {
//     fontSize: 20
//   }
// });

// export default App;




// import React from 'react';
// import { SafeAreaView, Text, StatusBar } from 'react-native';

// const App = () => {
//   return (
//     <>
//       <StatusBar barStyle="light-content" />
//       <SafeAreaView style={{padding: 8}}>
//         <Text>Some sample text</Text>
//       </SafeAreaView>
//     </>
//   );
// };

// export default App;