import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/Colors';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    padding: 20,
    alignItems: 'center',
    elevation: 4,
    shadowColor: Colors.text.primary,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.surface,
  },
});

export default Header;
