import React from 'react';
import{createStackNavigater} from 'ract-navigatin-stack';
import BookDonateScreen from '../screens/BookDonateScreen';
import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen';

export const AppStackNavigation = createStackNavigater({
 BookDonateScreen:{
     screen:BookDonateScreen,
     navigationOptions:{
         headerShown:false
     }
 },

 ReceiverDetails:{
     screen:ReceiverDetailsScreen,
     navigationOptions:{
         headerShown:false
     }
 }

},
{
    initialRoutenName:'BookDonateList'
}

)