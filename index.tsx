import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.blockText}>
        <Text style={styles.title}>Одно из самых вкусных кофе в городе!</Text>
        <Text style={styles.subtitle}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
      </View>
      <Button title='Начать'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 70,
    marginTop: 70,
    padding: 30,
    gap: 24,
    },
  blockText: {
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: '600',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: '#A9A9A9',
  },
});
