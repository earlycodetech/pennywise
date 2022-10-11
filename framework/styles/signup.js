import { StyleSheet } from "react-native";
import { Theme } from "../components/Theme";

export const styles = StyleSheet.create({
    header:{

    },
    headerIntroText:{
        fontSize:Theme.fonts.fontSizePoint.h5,
        color:'black',
    },
    brandLine:{
     
    },
    brandName:{
        fontSize:Theme.fonts.fontSizePoint.h2,
        color:Theme.colors.ui.brandPurple,
        fontWeight:'bold'
    },
    formArea:{
        marginVertical:Theme.sizes[3]
    },
    input:{
        marginBottom:Theme.sizes[1]
    },
    signAlt:{
        flexDirection:'row'
    },
    altInfo:{
        fontSize:Theme.fonts.fontSizePoint.body
    },
    altActionText:{
        fontSize:Theme.fonts.fontSizePoint.body,
        fontWeight:'bold',
        color:Theme.colors.ui.brandMagenta
    },
    privacyPolicy:{
        alignItems:'flex-end',
        color:Theme.colors.text.quartenary,
        fontSize:10,
        textAlign:'center',
        marginTop:Theme.sizes[6]
    }
})