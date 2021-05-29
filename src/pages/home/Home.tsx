import React from 'react';
import { View , StyleSheet} from 'react-native';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { Search } from '../../components/search/Search';

interface HomeProps {

}

export const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>  
        <Header/>
      </View>
      <View style={styles.search}>
       <Search />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      flexDirection: "column"
    },
    header: {
      height: "8%"
    },
    search: {
      flex: 1,
      height: "64%"
    },
    footer: {
      height: "14%"
    }
  }
);