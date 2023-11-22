import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import COLORS from '/Users/estebanayala/Documents/Aplicaciones moviles/Botanify/botanify/const/colors';
const Button = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 80,
        backgroundColor: COLORS.blue,
        marginVertical: 20,
        fontWeight: 'bold', 
        fontSize: 28,
        marginRight: 5,
        marginTop: 35,
      }}>
      <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
