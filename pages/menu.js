import * as React from 'react';
import { Text, View, StyleSheet, Button, Image  } from 'react-native';
import { Header } from 'react-native-elements'

export default class Menu extends React.Component {



  clickFacef = () => {
    this.props.navigation.navigate('Facef')
  }

  clickCurso = () => {
    this.props.navigation.navigate('Curso')
  }
  clickTime = () => {
    this.props.navigation.navigate('Time')
  }

  render() {
    return (
      <>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'App Universitário', style: { color: '#fff' } }}
          rightComponent={{ icon: 'book-open', color: '#fff' }}
        />
        <View>
          <Image
            style={{ 
              width: 280, 
              height: 72, 
              resizeMode: 'stretch', 
              marginRight: 'auto', 
              marginLeft: 'auto',
              marginBottom: 50,
              marginTop: 50,
            }}
            source={require("../assets/logo.png")}
          />
        </View>
        <View 
          style={{ 
            width: 150, 
            marginRight: 'auto', 
            marginLeft: 'auto', 
            marginBottom: 20,
            
          }}
        >
          <Button
            style={{
              borderRadius:10,
            }}
            title="Sobre o Uni-FACEF"
            onPress={this.clickFacef}
          />
        </View>
        <View 
          style={{ 
            width: 150, 
            marginRight: 'auto', 
            marginLeft: 'auto', 
            marginBottom: 20,
          }}
        >
          <Button
            title="Sobre o curso"
            onPress={this.clickCurso}
          />
        </View>
        <View 
          style={{ 
            width: 150, 
            marginRight: 'auto', 
            marginLeft: 'auto', 
            marginBottom: 20,
          }}
        >
          <Button
            title="Sobre o time"
            onPress={this.clickTime}
          />
        </View>
      </>
    );
  }
}
