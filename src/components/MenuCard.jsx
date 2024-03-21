import { ImageBackground, View, Text, StyleSheet } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
const MenuCard = ({name, location, category, types, img}) => {
    return (
      <ImageBackground source={{uri: img}} style={styles.menuCard}>
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
  const styles = StyleSheet.create({
  menuCard: {
    width: 180,
    height: 220,
    marginVertical: 15,
    margin: 12,
    borderRadius: 10,
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: '#ccc',
    position: 'relative',
    padding: 10,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});

  export default MenuCard;