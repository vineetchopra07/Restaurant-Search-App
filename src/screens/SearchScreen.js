import React, { useState } from 'react';
import { View, Text, StyleSheet , ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
const [term, setTerm] = useState('');
const [searchApi , results , errMsg ] = useResults();

const FilterResultsByPrice = (price) => {
  //price === $ || $$ || $$$ 
  return results.filter(results =>{
    return results.price === price;
  });
};

  return (
    <View style={{flex:1}}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      { errMsg ? <Text>{errMsg}</Text> : null }
      <ScrollView>
      <ResultsList results={FilterResultsByPrice('$')} title=" Cost Effective"  />
      <ResultsList results={FilterResultsByPrice('$$')} title=" Bit pricier" />
      <ResultsList results={FilterResultsByPrice('$$$')} title=" Bit spender" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
