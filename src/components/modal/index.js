import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard'
import useStorage from '../../hooks/useStorage'
export function ModalPass({password, handleClose}){

    const {saveItem} = useStorage();

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password)
        await saveItem("@pass",password)
        alert('Pass Saved')
        handleClose();

        
    }
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Pass generated
                </Text>

                <Pressable style={styles.pressable} onLongPress={handleCopyPassword}>
                    <Text style={styles.password}>
                        {password}
                    </Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.touch1} onPress={handleClose}>
                        <Text style={styles.buttonText}>
                            Back
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touch1, styles.touch2]} onPress={handleCopyPassword}>
                        <Text style={styles.buttonTextTouch2}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(24,24,24,0.6)",
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    content:{
        backgroundColor:"#FFF",
        width:"85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:8
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:'#000',
        paddingBottom: 20
    },
    pressable:{
        backgroundColor:'#0e0e0e',
        width:'90%',
        paddingTop:14,
        paddingBottom:14,
        borderRadius:8
    },
    password:{
        color:'#FFF',
        textAlign:'center',
    }, buttonArea:{
        flexDirection:"row",
        width:'90%',
        marginTop:8,
        alignItems:'center',
        justifyContent:"space-between",
    },
    touch1:{
        flex:1,
        alignItems:'center',
        marginTop:14,
        marginBottom:14,
        padding:8
    },
    touch2:{
        backgroundColor:'#392de9',
        borderRadius:8
    },
    buttonTextTouch2:{
        color:'#FFF',
        fontWeight:'bold'
    }
})