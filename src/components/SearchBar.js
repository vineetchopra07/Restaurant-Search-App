import React from 'react';
import { View, TextInput , StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const SearchBar = ({ term , onTermChange , onTermSubmit }) => {
  return (
    <View style ={styles.backgroundstyle}>
    <FontAwesome5 name="search-location" style={styles.iconstyle} />
    <TextInput 
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.inputstyle} 
      placeholder='search'
      value={term}
      onChangeText={onTermChange }
      onEndEditing={onTermSubmit }
      />
    </View>
  );
};

const styles = StyleSheet.create({
    backgroundstyle: {
        backgroundColor:'#D3D3D3',
        height : 50,
        borderRadius:20,
        marginHorizontal:10,
        marginTop:10,
        marginBottom:5,
        flexDirection: 'row'
    },
    inputstyle:{ 
        fontSize:20,
        flex:1
    }, 
    iconstyle:{
        fontSize:30 ,
        alignSelf:'center',
        marginHorizontal:15,
        color:'darkred' 
    }
});

export default SearchBar;
