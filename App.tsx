import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Colors, Gaps } from './shared/tokens';
import { Button } from './shared/Button/Button';

export default function App() {
  return (
    
    <View style={styles.container}>
      <ImageBackground 
      style={styles.backgroundImage}
      resizeMode='contain'
      source={require('./assets/background-image.png')}
      >
      <View style={styles.blockText}>
        <Text style={styles.title}>Одно из самых вкусных кофе в городе!</Text>
        <Text style={styles.subtitle}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
      </View>
      </ImageBackground>
      <Button
        text='Начать'
        style={{alignSelf: 'stretch', marginHorizontal: 30}}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 70,
    marginTop: 70,
    gap: Gaps.g24,
    },
  blockText: {
    paddingHorizontal: 30,
    flexDirection: 'column',
    gap: Gaps.g8,
    
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 34,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.white,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.gray,
  },
});
