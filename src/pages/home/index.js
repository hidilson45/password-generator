import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import {useState} from 'react'
import Slider from '@react-native-community/slider'
import { ModalPass } from "../../components/modal";
export function Home(){

  const [size, setSize] = useState(10)
  const [password, setPassword] = useState('')
  const [modalVisibility, setModalVisibility] = useState(false)
  let chars = 'abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=?'
  function generatePass(){
    let pass = '';
    for (let i = 0, n = chars.length; i<size; i++){
        pass += chars.charAt(Math.floor(Math.random() * n))
    }

    setPassword(pass)
    setModalVisibility(true)
  }

  return(
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo}/>
      <Text style={styles.title}>
        {size} Chars
      </Text>

      <View style={styles.area}>
          <Slider style={{height:50}} 
          minimumValue={6} 
          maximumValue={20}
          maximumTrackTintColor="red"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(value) => setSize(Math.round(value))}
          />
      </View>

      <TouchableOpacity style={styles.touch} onPress={generatePass}>
        <Text style={styles.btext}>Generate Pass</Text>
      </TouchableOpacity>
      <Modal visible={modalVisibility} animationType="fade" transparent={true}>
        <ModalPass password={password} handleClose={() => setModalVisibility(false)}/>
      </Modal>
      <Text style={styles.hd}>
        Hidilson 45 
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 60,

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  area: {
    marginTop:14,
    marginBottom:14,
    width:'80%',
    backgroundColor: '#FFF',
    borderRadius:8,
    padding:8
  },
  touch: {
    backgroundColor: '#392de9',
    width:'80%',
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:8,
    marginBottom:18
  },
  btext: {
    color: '#FFF',
    fontSize: 20
  },
  
})