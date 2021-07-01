import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FlatListFeed from '../../components/feed/FlatList';
import {Props} from '../../interfaces/props';

const Feed: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <FlatListFeed />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});

export default Feed;
