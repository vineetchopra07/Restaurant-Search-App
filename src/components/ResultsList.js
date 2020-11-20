import React from 'react';
import { View, Text , StyleSheet , FlatList , TouchableOpacity  } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({title , results , navigation }) => {
    if(!results.length){
        return null;
    }
    return(
        <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data ={results}
            keyExtractor={ (result) => result.id}
            renderItem={({item}) => {
                return (
                <TouchableOpacity onPress={() => navigation.navigate('Results', { id: item.id } )} >
                <ResultsDetail result={item}/>
                </TouchableOpacity>
                );
        }} 
        />
        </View>
    )
};

const styles = StyleSheet.create({
    title:{
        fontSize:22,
        fontWeight:'bold',
        color:'dimgray',
        marginLeft:10,
        textDecorationLine: 'underline'
    }
});

export default withNavigation(ResultsList);