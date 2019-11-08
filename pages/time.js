import React from 'react'
import { Text, Image, Dimensions, View } from 'react-native'
import { Card, Header, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window')
export default class Time extends React.Component{
  render() {
    return (
      <>
        <Header
          leftComponent={{ icon: 'arrow', color: '#fff' }}
          centerComponent={{ text: 'Sobre o time', style: { color: '#fff' } }}
        />
         <View style={{flex:1, alignItems: 'center'}}>
          <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Luis Otavio Gonçalves</Text>
          <Text style={{ marginBottom: 10 }}>Aluno do 8º Semestre de SI - Uni-FACEF</Text>
          <Avatar
            rounded
            xlarge
            //width="150px"
            source={require("../assets/perfil-luis.jpg")}
          />
        </View>

        <View style={{flex:1, alignItems: 'center'}}>
           <Text style={{ marginTop: 10,  fontWeight: 'bold' }}>Mateus Cintra Maniglia</Text>
           <Text style={{ marginBottom: 10 }}>Aluno do 8º Semestre de SI - Uni-FACEF</Text>
          <Avatar
            rounded
            xlarge
            source={require("../assets/perfil-mateus.jpeg")}
          />
        </View>
       
        
      </>
    )
  }
}