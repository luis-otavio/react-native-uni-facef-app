import React from 'react'
import { Text, Image, View } from 'react-native'
import { Card, Header, Button, Icon } from 'react-native-elements'

export default class Facef extends React.Component{
  
  render() {
    return (
      <>
        <Header
          leftComponent={{ icon: 'arrow', color: '#fff' }}
          centerComponent={{ text: 'Sobre o curso', style: { color: '#fff' } }}
        />
        <Card
          title='Sistemas de Informação'
        >
          <Image
            style={{
              resizeMode: 'stretch',
              width: 290, 
              height: 166, 
            }}
            source={require("../assets/selo.png")}
          />
          <View
            style={{
              marginTop: 15,
              marginBottom: 10,
            }}
          >
            <Button
              title="INFORMAÇÕES GERAIS"
            />
          </View>
          <View
            style={{
              marginTop: 15,
              marginBottom: 10,
            }}
          >
            <Button
              title="INFORMAÇÕES GERAIS"
            />
          </View>
          <View
            style={{
              marginTop: 15,
              marginBottom: 10,
            }}
          >
            <Button
              title="MATRIZ CURRICULAR"
            />
          </View>
          <View
            style={{
              marginTop: 15,
              marginBottom: 5,
            }}
          >
            <Button
              title="CORPO DOCENTE"
            />
          </View>  
        </Card>
      </>
    )
  }
}