import { useContext } from 'react';
import { AppContext } from '../../globals/AppContext';
import { AppSafeAreaView } from '../components/AppSafeAreaView';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { Button,TextInput } from 'react-native-paper';
import { styles } from '../styles/signup';
import { Theme } from '../components/Theme';

export function Signup () {
    const {userUID,userEmail,setUserEmail} = useContext(AppContext);

    return (
        <AppSafeAreaView>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.brandName}>pennywise</Text>
                    <Text style={styles.headerIntroText}>Create an account to start saving</Text>
                </View>
                
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
                            <View style={styles.formArea}>
                                <TextInput 
                                style={styles.input} 
                                placeholder='first name' 
                                onChangeText={props.handleChange('firstname')} 
                                mode='outlined' 
                                outlineColor={Theme.colors.ui.brandPurple}
                                />

                                <TextInput 
                                style={styles.input} 
                                placeholder='last name' 
                                onChangeText={props.handleChange('lastname')} 
                                mode='outlined' 
                                outlineColor={Theme.colors.ui.brandPurple}
                                />

                                <TextInput 
                                style={styles.input} 
                                placeholder='phone number' 
                                keyboardType='phone-pad' 
                                onChangeText={props.handleChange('phone')} 
                                mode='outlined' 
                                outlineColor={Theme.colors.ui.brandPurple}
                                />

                                <TextInput 
                                style={styles.input} 
                                placeholder='email address' 
                                keyboardType='email-address' 
                                onChangeText={props.handleChange('email')} 
                                mode='outlined' 
                                outlineColor={Theme.colors.ui.brandPurple}
                                />

                                <TextInput 
                                style={styles.input} 
                                placeholder='create password' 
                                secureTextEntry={true} 
                                onChangeText={props.handleChange('password')} 
                                mode='outlined' 
                                outlineColor={Theme.colors.ui.brandPurple}
                                />
                                
                                <TextInput 
                                style={styles.input} 
                                placeholder='confirm password' 
                                secureTextEntry={true} 
                                onChangeText={props.handleChange('passwordConfirmation')} 
                                mode='outlined' 
                                outlineColor={Theme.colors.ui.brandPurple}
                                />
                                
                                <Button 
                                mode='contained' 
                                icon='arrow-right' 
                                color={Theme.colors.ui.brandPurple}
                                contentStyle={{paddingVertical:8}}
                                onPress={() => props.handleSubmit()}
                                >
                                    CREATE ACCOUNT
                                </Button>
                            </View>
                        )
                    }
                </Formik>

                <View style={styles.signAlt}>
                    <Text style={styles.altInfo}>Already have an account ?</Text>
                    <TouchableOpacity>
                        <Text style={styles.altActionText}> Sign in</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.privacyPolicy}>
                    For users that register on our app, we also store the personal information 
                    they provide in their user profile. All users can see, edit, or delete their 
                    personal information at any time (except they cannot change their user id). 
                    Our app administrators can also see and edit that information, with or without
                    the consent of the user.
                </Text>
            </ScrollView>
        </AppSafeAreaView>
    )
}

