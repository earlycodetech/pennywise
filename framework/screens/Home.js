import { useContext,useEffect,useState,useCallback } from 'react';
import { AppSafeAreaView } from '../components/AppSafeAreaView';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { Monoton_400Regular } from '@expo-google-fonts/monoton';
import { Manrope_400Regular } from '@expo-google-fonts/manrope';
import { styles } from '../styles/home';

export function Home ({navigation}) {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({Monoton_400Regular,Manrope_400Regular});
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
        await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <AppSafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.brandRow}>
                        <Text style={styles.brandName}>pennywise</Text>
                        {/* icon here */}
                    </View>
                </View>

                <View style={styles.body}>
                    <TouchableOpacity style={styles.deposit}>

                    </TouchableOpacity>
                    <View style={styles.goalsWith}>
                        <TouchableOpacity style={styles.goalsWithAction}>
                            
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.goalsWithAction}>

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footer}>
                    <View style={styles.goal}>
                        {/* render this view in a flatlist */}
                    </View>
                </View>
            </View>
        </AppSafeAreaView>
    )
}