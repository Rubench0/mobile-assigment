import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Image, Box, Stack, Heading} from 'native-base';
import {colors} from '../../styles/main';
import {useNavigation} from '@react-navigation/native';
import TextInformation from '../utils/TextInformation';
import {Item} from '../../interfaces/Item';

const ItemCard: React.FC<Item> = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detalle', {item: item})}>
      <Box shadow={3} rounded="lg" style={styles.container}>
        <Stack space={4} p={4}>
          <Heading size={'md'}>{item.name}</Heading>
          <Box>
            <Image
              source={{
                uri: item.image,
              }}
              alt="imag"
              height={250}
              roundedTop="md"
            />
          </Box>
          <View style={styles.list}>
            <TextInformation
              leftText={'Origin:'}
              rightText={item.origin.name}
            />
            <TextInformation leftText={'Created:'} rightText={item.created} />
          </View>
        </Stack>
      </Box>
    </TouchableOpacity>
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

export default ItemCard;
