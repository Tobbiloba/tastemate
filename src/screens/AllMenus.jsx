import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { menus } from '../data';
import MenuCard from '../components/MenuCard';
const Menu = ({name, location, category, types, img}) => {
  return (
    <ImageBackground source={{uri: img}} style={styles.menuCard}>
      {/* Background Overlay */}
      <View style={styles.overlay} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <View
          style={{
            padding: 4,
            borderRadius: 50,
            backgroundColor: 'white',
          }}>
          <Feather name="bookmark" size={18} color="#020617" />
        </View>
        <View
          style={{
            padding: 4,
            borderRadius: 50,
            backgroundColor: 'white',
          }}>
          <Feather name="heart" size={18} color="#020617" />
        </View>
      </View>
      <View>
        <Text style={{fontSize: 16, color: 'white'}}>{name}</Text>
        <Text style={{fontSize: 13, color: 'white'}}>{location}</Text>
        <Text style={{fontSize: 12, color: 'white'}}>{types.join(' | ')}</Text>
      </View>
    </ImageBackground>
  );
};

const AllMenus = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={26} color="black" />
        </TouchableOpacity>

        <Text style={{color: 'black', fontSize: 19, fontWeight: '500'}}>
          Satisfy your Cravings
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        <FlatList
          data={menus}
          numColumns={2} // Display 2 items per row
          renderItem={({item}) => (
            <MenuCard
              name={item.name}
              location={item.location}
              category={item.category}
              types={item.types}
              img={item.img}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default AllMenus;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#e5e7eb',
    height: '100%',
  },
});
