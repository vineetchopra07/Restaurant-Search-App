import React , {useState , useEffect }from 'react';
import { Text , StyleSheet ,View , FlatList , Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import yelp from '../api/yelp';

const ResultShowScreen = ({navigation}) => {
    const [result , setResult ] = useState(null);
    const id = navigation.getParam('id');

    const getResults = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect ( () => {
        getResults(id);
    } , [] );

    if(!result){
        return null;
    }

    return(
        <View>
            <Text style={styles.HotelName}>$ HOTEL_NAME = {result.name} $</Text>
            <FlatList 
            data = {result.photos}
            keyExtractor = { (photo) => photo}
            renderItem = { ({item}) => {
                return <Image style={styles.image} source = {{ uri : item}} />
            }}
            />
        </View>
    )

}

const styles=StyleSheet.create({
    HotelName:{
        fontWeight:'bold',
        fontSize:19,
        textDecorationLine:"underline",
        textShadowColor:'black',
        alignSelf:'center',
        color:'chocolate'

    },image :{
        height:270,
        width:200,
        margin:2,
        alignSelf:'center'
    }
});

export default ResultShowScreen;