import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header'
import Card from '../../components/Card';


export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='João da Silva'></Header>
      <View style={styles.title}>
        <Text style={styles.titleText}>Em que podemos te ajudar?</Text>
      </View>
      <View style={styles.cards}>
        <Card title='Tradução' desc='Coloque a câmera no texto que deseja traduzir e selecione a língua original e a de tradução. Após alguns segundos o texto estará traduzido'></Card>
        <Card title='Mapa' desc='Mapa local com possíveis pontos de interesse.'></Card>
      </View>
    </View> 
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    marginTop: 30,
    marginLeft: 20
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  cards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})