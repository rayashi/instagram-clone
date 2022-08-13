import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {ThemeContext} from '../../App';

const HomeFeedTabs = () => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.content, {backgroundColor: theme.text}]}>
      <FeatherIcon style={styles.icon} name="user" color={theme.bg} size={25} />
      <FeatherIcon
        style={styles.icon}
        name="search"
        color={theme.bg}
        size={25}
      />
      <FeatherIcon style={styles.icon} name="home" color={theme.bg} size={25} />
      <FeatherIcon
        style={styles.icon}
        name="play-circle"
        color={theme.bg}
        size={25}
      />
      <FeatherIcon
        style={styles.icon}
        name="shopping-bag"
        color={theme.bg}
        size={25}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    margin: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default HomeFeedTabs;
