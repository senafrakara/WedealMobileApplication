import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from './../../assets/theme/ThemeProvider';
import NavBar from '../../src/components/MyCards/NavBar';
import CardButtons from '../../src/components/MyCards/CardButtons';
import CardInfo from '../../src/components/MyCards/CardInfo';
import CardTransactions from '../../src/components/MyCards/CardTransactions';

const Cards = () => {
  const theme = useTheme();

  return (
    <View style={[styles.container]}>
      <View style={{flex: 2}}>
        <NavBar />
      </View>
      <View style={{flex: 4}}>
        <CardButtons />

        <View
          style={{
            borderTopColor: theme.colors.gray,
            borderTopWidth: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 2,
          }}>
          <CardInfo />
          <CardTransactions />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FF6F61',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  cardBalanceLabel: {
    color: '#FFF',
    fontSize: 14,
  },
  cardBalance: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  actionButton: {
    backgroundColor: '#FF6F61',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  actionText: {
    color: '#FFF',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardInfo: {
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardNumber: {
    fontSize: 16,
    color: '#333',
  },
  cardExpiry: {
    fontSize: 16,
    color: '#333',
  },
  cardCVC: {
    fontSize: 16,
    color: '#333',
  },
  transactions: {
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 8,
  },
  transaction: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
});

export default Cards;
