import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import api from '../../services/api';
import ItemCard from './ItemCard';

const FlatListFeed: React.FC<any> = ({props}) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    queryItems();
  }, [page]);

  const queryItems = async () => {
    try {
      let response: any = await api(`character/?page=${page}`, 'GET', {}, {});
      response.data.results.map((character: any) => {
        items.push(character);
      });
    } catch (error) {}
  };

  const renderItem = ({item}) => {
    return <ItemCard item={item} />;
  };

  const emptyList = () => {
    return <Text>Sin resultados</Text>;
  };

  const queryMore = () => {
    setPage(page + 1);
  };

  return (
    <SafeAreaView>
      <FlatList
        data={items}
        renderItem={element => renderItem(element)}
        keyExtractor={(item: any) => item.id}
        horizontal={false}
        numColumns={1}
        ListEmptyComponent={emptyList}
        onEndReached={queryMore}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default FlatListFeed;
