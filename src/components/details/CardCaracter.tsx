import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Image, Box, Stack, Heading} from 'native-base';
import {colors} from '../../styles/main';
import TextInformation from '../utils/TextInformation';
import {Item} from '../../interfaces/Item';

const CardCaracter: React.FC<Item> = ({item}) => {
  return (
    <Box shadow={3} rounded="lg" style={styles.container}>
      <Image
        source={{uri: item.image}}
        alt="caracter"
        height={250}
        roundedTop="md"
      />
      <Stack space={4} p={4}>
        <Heading size={'md'}>{item.name}</Heading>
        <View style={styles.list}>
          <TextInformation leftText={'Origin:'} rightText={item.origin.name} />
          <TextInformation leftText={'Status:'} rightText={item.status} />
          <TextInformation leftText={'Species:'} rightText={item.species} />
          <TextInformation leftText={'Gender:'} rightText={item.gender} />
          <TextInformation leftText={'Created:'} rightText={item.created} />
        </View>
      </Stack>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  list: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default CardCaracter;
