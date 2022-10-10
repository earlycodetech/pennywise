import {Text,Button} from 'react-native';

export function Home ({navigation}) {
    return (
        <Button title='Go to home' onPress={() => navigation.navigate('Signup')} />
    )
}