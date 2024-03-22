import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
  FlatList,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FilterComponent from '../components/FilterComponent';
import MenuCard from '../components/MenuCard';
import { menus, tabs } from '../data';



const HomeScreen = ({navigation}) => {
  const [input, setInput] = useState('');
  const [tab, setTab] = useState(tabs[0]);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedMenus, setSelectedMenus] = useState([]);
  const [data, setData] = useState([...menus]);
  const handleChange = (text) => {
    setInput(text);
  };

  const handleFilter = (selected) => {
    if (selected.length === 0) {
      setData(menus);
      return menus;
    } else {
      console.log(menus.filter(menu => selected.includes(menu.category)));
      setData(menus.filter(menu => selected.includes(menu.category)));
      return menus.filter(menu => selected.includes(menu.category));
    }
  };

  return (
    <View style={styles.container}>
      {!showFilter ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{paddingHorizontal: 20}}>
          <StatusBar backgroundColor="#e5e7eb" />
          <Text style={{fontSize: 22, fontWeight: '500', color: 'black'}}>
            Good Morning
          </Text>
          <Text style={{fontSize: 22, fontWeight: '500', color: 'black'}}>
            Mr Joe!
          </Text>

          <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => handleFilter([input])}>
            <AntDesign
              name="search1"
              color="#9ca3af"
              size={25}
              style={{paddingHorizontal: 10}}
            />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              value={input}
              onChangeText={newText => setInput(newText)}
              placeholder="Search"
            />
            <TouchableOpacity onPress={() => setShowFilter(true)}>
              <Entypo
                name="sound-mix"
                color="#9ca3af"
                size={25}
                style={styles.rotate}
              />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', marginTop: 30}}>
            {tabs.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setTab(item)}
                style={[styles.tab, tab === item && styles.activeTab]}>
                <Text style={{fontSize: 22, color: 'black', fontWeight: '500'}}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <View>
              <Text style={{fontSize: 22, color: '#164e63', fontWeight: '500'}}>
                Satisfy your cravings
              </Text>
              <Text style={{fontSize: 13, color: '#164e63'}}>
                Resturants that suits your palate
              </Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('AllMenus')}>
              <Text style={{fontSize: 16, color: '#164e63'}}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 20}}>
            {
              data.length > 0 ? <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
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
            /> : <Text style={{color: '#164e63', textAlign: 'center', marginTop: 20}}>No menu found</Text>
            }
          </View>
        </ScrollView>
      ) : (
        <FilterComponent
          setState={setShowFilter}
          selectedMenus={selectedMenus}
          setSelectedMenus={setSelectedMenus}
          handleFilter={handleFilter}
        />
      )}
    </View>
  );
};
{
  /* */
}
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#e5e7eb',
    height: '100%',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  input: {
    flex: 1,
    color: 'black'
  },
  rotate: {
    transform: [{rotate: '90deg'}],
    paddingHorizontal: 10,
  },
  tab: {
    flex: 1,
    borderBottomWidth: 4,
    borderBottomColor: '#d1d5db',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    borderBottomColor: '#164e63',
    // borderBottomEndRadius: 10
  },
  filterContainer: {
    position: 'absolute',
    // top: 0,
    backgroundColor: 'red',
    height: '100%',
    paddingHorizontal: 20,
    width: '100%',
    // left: 0,
    borderWidth: 1,
    borderColor: 'black',
  },
 
});
