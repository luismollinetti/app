/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity, StatusBar,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FloatingAction } from 'react-native-floating-action';
import styles from './styles';
import SingleCard from '../../components/Cards';
import { Request, Clients } from '../../assets/icons';
import { Menu, UserReload } from '../../assets/icons';

import { LinearGradient } from 'expo-linear-gradient';

import { BackHandler } from 'react-native';
import Toolbar from '../../components/Toolbar';

import imgBackground from './../../assets/bgApp.png'

import globals from '../../../styles/global';
import stylestool from './stylestool';


const wait = (timeout: any) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

type HomeType = {
  navigation: any;
};



// const Home: React.FC<HomeType> = ({ navigation }) => {
export default function Home({ navigation })  {

  const currencyFormat = (num: number) => {
    return `R$ ${num.toFixed(2).replace('.', ',')}`;
  };

  const actions = [
    {
      color: '#ce0901',
      text: 'PRODUTO',
      margin: 0,
      buttonSize: 45,
      textElevation: 0,
      textStyle: globals.floatingButtonActions,
      textColor: '#ce0901',
      textBackground: '#0000',
      icon: <Request style={{ color: '#FFF' }} size={18} />,
      name: 'Produtos',
      position: 1,
    },
    {
      color: '#ce0901',
      text: 'CLIENTE',
      margin: 0,
      buttonSize: 45,
      textElevation: 0,
      textStyle: globals.floatingButtonActions,
      textColor: '#ce0901',
      textBackground: '#FFFFFF',
      icon: <Clients style={{ color: '#FFF' }} size={18} />,
      name: 'Clientes',
      position: 2,
    },
  ];

  const clientsApproved = ["miguel"]
  const requestsCount = 15
  const sellsValue = 112.50
  const sellsAverange = 22
  const empresa = "Empresa"
  const vendedor = "Vendedor"



  return (

    

    <SafeAreaView style={[globals.scrollContainer]} >

      <Toolbar
        navigation={navigation}
        company={empresa}
        seller={vendedor}
      />
      
     

      <ImageBackground source={imgBackground} style={globals.imageBackground}>
        <ScrollView
          style={globals.scrollContainerNavigation}
          
        >


          <View style={styles.doubleView}>
            <SingleCard bgColor="#FFF">
              <Text style={globals.cardTittle}>CLIENTES{'\n'}APROVADOS</Text>
              <Text style={globals.cardResult}>{clientsApproved}</Text>
            </SingleCard>

            <SingleCard bgColor="#FFF">
              <Text style={globals.cardTittle}>
                PEDIDOS NOS{'\n'}??LTIMOS 30 DIAS
              </Text>
              <Text style={globals.cardResult}>{requestsCount}</Text>
            </SingleCard>
          </View>

          <View style={styles.doubleView}>
            <SingleCard bgColor="#FFF">
              <Text style={globals.cardTittle}>
                TOTAL DE VENDAS{'\n'}30 DIAS
              </Text>
              <Text style={globals.cardResult}>
                {currencyFormat(sellsValue)}
              </Text>
            </SingleCard>

            <SingleCard bgColor="#FFF">
              <Text style={globals.cardTittle}>TICKET M??DIO{'\n'}30 DIAS</Text>
              <Text style={globals.cardResult}>
                {currencyFormat(sellsAverange)}
              </Text>
            </SingleCard>
          </View>

          <View style={{ height: 10 }} />
        </ScrollView>

        <FloatingAction
          overlayColor="rgba(255,255,255,0.8)"
          actions={actions}
          color="#ce0901"
          position="right"
          onPressItem={(name) => {
            navigation.navigate(name);
          }}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};



