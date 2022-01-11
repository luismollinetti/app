import { StatusBar } from 'expo-status-bar';
import { Form } from '@unform/mobile';
import React, { ReactElement, useCallback, useRef, useState } from 'react';
import { User, Key, Company as CompanyIcon, Email } from '../../assets/icons';
import Button from '../../components/Button';

import {
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  Text,
  View,
  KeyboardAvoidingView,
  TextInputProps,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';   
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';   
import Input from '../../components/form/Input'
import global from '../../../styles/global'; 
import { FormHandles,SubmitHandler } from '@unform/core';
import img from '../../assets/logo/money.png'
import { Feather } from '@expo/vector-icons';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/core';
import Toast from 'react-native-root-toast';

import Loading from '../../components/Loading';





export default function Login() {

 // const [email,setEmail] = useState(null)
//  const [password,setPassword] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(true);

  const navigation = useNavigation();

  const handleSubmit: SubmitHandler<FormData> = useCallback(
    async (data: any) => {
      try {
        setIsLoading(true);
        const FormSchema = yup.object().shape({
          company: yup.string().required('Selecione a sua empresa.'),
          user: yup.string().required('Selecione o seu usuário.'),
          password: yup.string().required('Campo obrigatório!'),
        });
        
        await FormSchema.validate(data, {
          abortEarly: false,
        });

 

        if (formRef.current) formRef.current.setErrors({});
        

        // reset();
      } catch (err) {
        const errorMessages: Record<string, any> = {};
        if (err instanceof yup.ValidationError) {
          err.inner.forEach((error) => {
            const errorPath = error.path ? error.path : '';
            errorMessages[errorPath] = error.message;
          });
          formRef.current?.setErrors(errorMessages);
        } else {
          Alert.alert(
            'Ocorreu um erro inesperado. 😥 \n Tente novamente mais tarde.',
          );
        }
      }
    },
    [],
  );
  
  const onPasswordIconPress = (): void => {
      setPasswordVisible(!passwordVisible);
    }

  const renderPasswordIcon = (props: TextInputProps): ReactElement => (
      <TouchableWithoutFeedback onPress={onPasswordIconPress}>
        <Feather {...props} name={!passwordVisible ? 'eye-off' : 'eye'} />
      </TouchableWithoutFeedback>
  );  
 


  if (isLoading) return <Loading />;
  
  return (
    <KeyboardAvoidingView behavior="padding" style={global.container}>

          <View style={global.wrapperContainer}>


            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View>
            
              <Image source={img} style={styles.image} resizeMode="contain" />

              <Text style={styles.title}>
                <Text style={global.h1Text}>Mobile</Text>
              </Text>

              <Text style={styles.subtitle}>
                <Text style={global.h3Text}>
                  Seja bem-vindo!{'\n'}
                  Digite seu E-mail e Senha.
                </Text>
              </Text>
              </View>
            </TouchableWithoutFeedback>
        
            <Form ref={formRef} onSubmit={handleSubmit} style={styles.formStyle}>
  
                  <Input
                     
                      label="Email"
                    
                      placeholder="Digite aqui sua senha!"
                      name="password"
                 
                      AccessoryLeft={Email}
                      style={{ marginBottom: 30 }}         
                   
                  
                    />

                      <Input
                      secureTextEntry={passwordVisible}
                      label="Senha"
                      placeholder="Digite aqui sua senha!"
                      name="password"
                      AccessoryRight={renderPasswordIcon}
                      AccessoryLeft={Key}
                      style={{ marginBottom: 30 }}
                    />

                    <Button
                    title="ENTRAR"
                    onPress={() => formRef.current?.submitForm()}
                  /> 
                
 


            </Form>
         </View>
         </KeyboardAvoidingView>
  );
}
