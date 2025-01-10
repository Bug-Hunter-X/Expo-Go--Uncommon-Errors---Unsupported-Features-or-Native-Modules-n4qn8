// bug.js
// Example code that might cause an error in Expo Go (depending on the native module used)
import * as Notifications from 'expo-notifications'; //or other native modules that might not work in Expo Go 

// ... code that uses the Notifications module

// bugSolution.js
// Solution might involve using Expo's managed workflow
//or alternatives that don't require native modules 
// or building a standalone app
import * as Notifications from 'expo-notifications';

// Check if notifications are supported
Notifications.getPermissionsAsync().then(permissions => {
  if(permissions.status === 'granted'){
    console.log('Notifications are supported')
  } else{
    console.log('Notifications are not supported in Expo Go. You must build a standalone app')
  }
})