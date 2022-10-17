import { StyleSheet } from "react-native";
import { Theme } from "../components/Theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flex:1,
    },
    brandRow:{
        
    },
    brandName:{
        fontSize:Theme.fonts.fontSizePoint.h5,
        color:Theme.colors.ui.brandPurple,
        fontWeight:'bold'
    },
    body:{
        flex:3,
    },
    footer:{
        flex:2
    },
})