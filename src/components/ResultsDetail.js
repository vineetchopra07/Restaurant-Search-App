import React from 'react';
import {View , Text, Image , StyleSheet} from 'react-native';

const ResultsDetail = ({result}) => {
    return(
        <View>
            <Image source={{uri: result.image_url}} style={styles.imageStyle} />
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.rating}>{result.rating} stars , {result.review_count} Reviews</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    imageStyle:{
        width:275,
        borderRadius:4,
        height:200,
        marginLeft:15,
        marginBottom:5
    },name:{
        fontWeight:'bold',
        fontSize:16,
        color:'dimgray',
        marginLeft:15,
    },rating :{
        color:'chocolate',
        marginLeft:15
    }

});

export default ResultsDetail;