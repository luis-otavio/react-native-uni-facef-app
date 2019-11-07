import React from 'react'
import { Text } from 'react-native'
import { Card, Header, Button, Icon } from 'react-native-elements'

export default class Facef extends React.Component{
  render() {
    return (
      <>
        <Header
          leftComponent={{ icon: 'arrow', color: '#fff' }}
          centerComponent={{ text: 'Sobre a Uni-FACEF', style: { color: '#fff' } }}
        />
        <Card>
          <Text style={{marginBottom: 10}}>
            O Uni-FACEF é uma Instituição de Ensino Superior que atua há mais sessenta anos no ensino superior na cidade de Franca.
          </Text>
          <Button
            buttonStyle={{
              borderRadius: 0, 
              marginLeft: 0, 
              marginRight: 0, 
              marginBottom: 0,
            }}
            titleStyle={{
              fontWeight: 'bold',
            }}
            title='Leia mais...' />
        </Card>
        <Text
          style={{
            marginLeft: 'auto', 
            marginRight: 'auto',
            marginTop: 15,
            color: '#344f8a', 
            fontWeight: 'bold', 
            fontSize: 14
          }}
        >
          Telefones: 0800 940 4688 / (16) 3713-4688
        </Text>
        <Card 
          titleStyle={{
            fontWeight: 'bold',
          }}
          title='Unidade I'
        >
          <Text>
              Av. Major Nicácio, 2433
              Bairro São José
              CEP 14401-135
          </Text>
        </Card>
        <Card
          titleStyle={{
            fontWeight: 'bold',
          }}
          title='Unidade II'
        >
          <Text>
            Av. Dr. Ismael Alonso y Alonso, 2400
            Bairro São José
            CEP 14403-430
          </Text>
        </Card>
        <Card
          titleStyle={{
            fontWeight: 'bold',
          }}
          title='Unidade III'
        >
          <Text>
            Av. Dr. Ismael Alonso y Alonso, 2400
            Bairro São José
            CEP 14403-430
          </Text>
        </Card>
      </>
    )
  }
}