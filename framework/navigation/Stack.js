import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {Signin} from '../screens/Signin';
import {Signup} from '../screens/Signup'

const Stack = createNativeStackNavigator();

export function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='Signin' component={Signin} />
        </Stack.Navigator>
    )
}
