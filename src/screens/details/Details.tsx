import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CardCaracter from '../../components/details/CardCaracter';
import {Props} from '../../interfaces/props';

const Details: React.FC<Props> = (props: any) => {
  return (
    <View style={styles.container}>
      <CardCaracter item={props.route.params.item} />
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

export default Details;
