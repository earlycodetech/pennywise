import { useContext } from 'react';
import { AppContext } from '../../globals/AppContext';
import { AppSafeAreaView } from '../components/AppSafeAreaView';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { Button } from 'react-native-paper';

export function Signup () {
    const {userUID,userEmail,setUserEmail} = useContext(AppContext);

    return (
        <AppSafeAreaView>
            {/* other components */}

            <Formik
            initialValues={{
                firstname:'',
                lastname:'',
                phone:'',
                email:'',
                password:'',
                passwordConfirmation:''
            }}

            onSubmit={(values,actions) => {
                console.log(values);
                actions.resetForm();
            }}
            >
                {
                    (props) => (
                        <View>
                            <TextInput style={styles.input} placeholder='first name' 
                            onChangeText={props.handleChange('firstname')} />

                            <TextInput style={styles.input} placeholder='last name' 
                            onChangeText={props.handleChange('lastname')} />

                            <TextInput style={styles.input} placeholder='phone number' 
                            keyboardType='phone-pad' onChangeText={props.handleChange('phone')} />

                            <TextInput style={styles.input} placeholder='email address' 
                            keyboardType='email-address' onChangeText={props.handleChange('email')} />

                            <TextInput style={styles.input} placeholder='create password' 
                            secureTextEntry={true} onChangeText={props.handleChange('password')} />
                            
                            <TextInput style={styles.input} placeholder='confirm password' 
                            secureTextEntry={true} onChangeText={props.handleChange('passwordConfirmation')} />
                            
                            <Button 
                            mode='contained' 
                            icon='arrow-right' 
                            color='green'
                            contentStyle={{paddingVertical:8}}
                            onPress={() => props.handleSubmit()}
                            >
                                CREATE ACCOUNT
                            </Button>
                        </View>
                    )
                }
            </Formik>
        </AppSafeAreaView>
    )
}

const styles = StyleSheet.create({

})
