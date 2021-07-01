import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'native-base';
import {colors} from '../../styles/main';
import {TextCard} from '../../interfaces/TextCard';

const TextInformation: React.FC<TextCard> = ({leftText, rightText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.left}>{leftText}</Text>
      <Text style={styles.right}>{rightText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 5,
  },
  left: {
    fontSize: 16,
    color: colors.greyDark,
    width: '30%',
  },
  right: {
    fontSize: 16,
    color: colors.blue,
  },
});

export default TextInformation;
