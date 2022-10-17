import { SafeAreaView, StyleSheet, StatusBar, Platform} from 'react-native';

export function AppSafeAreaView ({children}) {
   return ( 
    <SafeAreaView style={styles.safeArea}>
        {children}
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea:{
        flex:1,
        marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : null,
        marginHorizontal:10
    }
});