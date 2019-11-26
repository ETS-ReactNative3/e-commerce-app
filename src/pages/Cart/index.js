import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';
import TabIcon from '~/components/TabIcon';

export default function Cart() {
  return (
    <View>
      <Text>Carrinho</Text>
    </View>
  );
}

Cart.navigationOptions = {
  tabBarLabel: <Text style={{ fontSize: 11 }}>Carrinho</Text>,
  tabBarIcon: props => <TabIcon name="shopping-cart" {...props} />,
  tabBarBadge: true,
};