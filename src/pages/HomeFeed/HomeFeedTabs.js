import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {ThemeContext} from '../../App';

const HomeFeedTabs = () => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles.content}>
      <FeatherIcon
        style={styles.icon}
        name="home"
        color={theme.text}
        size={25}
      />
      <FeatherIcon
        style={styles.icon}
        name="search"
        color={theme.text}
        size={25}
      />
      <FeatherIcon
        style={styles.icon}
        name="play-circle"
        color={theme.text}
        size={25}
      />
      <FeatherIcon
        style={styles.icon}
        name="shopping-bag"
        color={theme.text}
        size={25}
      />
      <FeatherIcon
        style={styles.icon}
        name="user"
        color={theme.text}
        size={25}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default HomeFeedTabs;
