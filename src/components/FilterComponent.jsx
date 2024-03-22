import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {options} from '../data';

const FilterComponent = ({
  setState,
  setSelectedMenus,
  selectedMenus,
  handleFilter,
}) => {
  // const [selectedMenus, setSelectedMenus] = useState([]);

  const toggleSelection = subcategory => {
    if (selectedMenus.includes(subcategory)) {
      setSelectedMenus(selectedMenus.filter(item => item !== subcategory));
    } else {
      setSelectedMenus([...selectedMenus, subcategory]);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#e5e7eb" />
      <View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '500',
            color: 'black',
            borderBottomWidth: 2,
            borderBottomColor: '#d1d5db',
            paddingHorizontal: 20,
            paddingBottom: 10,
          }}>
          Filters
        </Text>

        <View style={{gap: 40, marginTop: 60, paddingHorizontal: 20}}>
          {options.map((item, index) => (
            <View key={index}>
              <Text style={{fontSize: 18, color: 'black', fontWeight: '500'}}>
                {item.category}
              </Text>

              <View style={{flexDirection: 'row', gap: 10, marginTop: 10}}>
                {item.subCategories.map((subcategory, subIndex) => (
                  <TouchableOpacity
                    key={subIndex}
                    onPress={() => toggleSelection(subcategory)}
                    style={[
                      styles.subcategoryButton,
                      selectedMenus.includes(subcategory) &&
                        styles.selectedSubcategory,
                    ]}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: selectedMenus.includes(subcategory)
                          ? 'white'
                          : '#1e293b',
                      }}>
                      {subcategory}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>

      <View
        style={{
          padding: 20,
          borderTopWidth: 2,
          borderTopColor: '#d1d5db',
          paddingHorizontal: 20,
          paddingVertical: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setState(false)}
          style={{
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => (handleFilter(selectedMenus), setState(false))}
          style={{
            backgroundColor: '#1e293b',
            height: 60,
            width: '70%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Apply Filters</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  subcategoryButton: {
    borderWidth: 1,
    borderColor: '#1e293b',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  selectedSubcategory: {
    backgroundColor: '#1e293b',
  },
});

export default FilterComponent;
