import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import useStorage from '../../hooks/useStorage'
export function Passwords(){
    const [listPasswords, setListPasswords] = useState([])
    const {getItem} = useStorage();
    const focused = useIsFocused();
    useEffect(() => {
        async function loadPasswords(){
            const passwords = await getItem('@pass')
            console.log(passwords)
        }

        loadPasswords();
    }, [focused])

    return(
        <SafeAreaView style={{flex:1,}}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    My Passwords
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#392de9",
        paddingTop:58,
        paddingBottom:14,
        paddingLeft:14,
        paddingRight:14
    },
    title:{
        fontSize:18,
        color:"#FFF",
        fontWeight:"bold",
    }
})