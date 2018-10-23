import React, { Component } from 'react';

import { 
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native';

import Topo from './src/components/Topo';
import Icone from './src/components/Icone';

export default class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      userChoise: '',
      pcChoise: ''
    };
  }

  jokenpo(userChoise) {
    // random number (0, 1, 2)    
    const numAleatory = Math.floor(Math.random() * 3);
    const choise = ['pedra', 'papel', 'tesoura'];
    const pcChoise = choise[numAleatory];

    let result = '';
    if (pcChoise === 'pedra') {
      if (userChoise === 'pedra') {
        result = 'Empate';
      }

      if (userChoise === 'papel') {
        result = 'Usuário ganhou';
      }

      if (userChoise === 'tesoura') {
        result = 'Computador ganhou';
      }
    }

    if (pcChoise === 'papel') {
      if (userChoise === 'papel') {
        result = 'Empate';
      }

      if (userChoise === 'tesoura') {
        result = 'Você ganhou';
      }

      if (userChoise === 'pedra') {
        result = 'Você perdeu';
      }
    }

    if (pcChoise === 'tesoura') {
      if (userChoise === 'tesoura') {
        result = 'Empate';
      }

      if (userChoise === 'pedra') {
        result = 'Você ganhou';
      }

      if (userChoise === 'papel') {
        result = 'Você perdeu';
      }
    }

    this.setState({
      userChoise,
      pcChoise,
      result
    });
  }

  render() {
    return (
      <View>

        <Topo />
        
        <View style={styles.panelActions}>

          <View style={styles.btnChoice}>
            <Button title="pedra" onPress={() => this.jokenpo('pedra')} />
          </View>
          <View style={styles.btnChoice}>
            <Button title="papel" onPress={() => this.jokenpo('papel')} />
          </View>
          <View style={styles.btnChoice}>
            <Button title="tesoura" onPress={() => this.jokenpo('tesoura')} />
          </View>
          
        </View>
        
        <View style={styles.palco}>
          <Text style={styles.txtResult}>{this.state.result}</Text>
          
          <Icone escolha={this.state.pcChoise} jogador='Computador' />
          <Icone escolha={this.state.userChoise} jogador='Você' />
          
                    
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnChoice: {
    width: 90
  },
  panelActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResult: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60

  },
  icone: {
    alignItems: 'center',
    marginBottom: 20    
  },
  txtJogador: {
    fontSize: 18
  }

});
