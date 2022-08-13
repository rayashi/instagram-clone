import React, {useContext} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {ThemeContext} from '../../App';
import DarkLogo from '../../assets/logo-dark.png';
import LightLogo from '../../assets/logo-light.png';

const HomeFeedHeader = () => {
  const theme = useContext(ThemeContext);

  return (
    <SafeAreaView style={styles.content}>
      <Image
        source={theme.name === 'dark' ? DarkLogo : LightLogo}
        style={styles.logo}
      />
      <View style={styles.buttons}>
        <FeatherIcon
          style={styles.icon}
          name="pocket"
          color={theme.text}
          size={25}
        />
        <FeatherIcon
          style={styles.icon}
          name="heart"
          color={theme.text}
          size={25}
        />
        <FeatherIcon
          style={styles.icon}
          name="zap"
          color={theme.text}
          size={25}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: 100,
    height: '100%',
  },
  buttons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default HomeFeedHeader;
