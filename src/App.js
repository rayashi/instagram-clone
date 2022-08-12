import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, useColorScheme, View} from 'react-native';
import Themes from './Themes';
import HomeFeed from './pages/HomeFeed/HomeFeed';

export const ThemeContext = React.createContext(Themes.light);

const App: () => Node = () => {
  const theme = useColorScheme() === 'dark' ? Themes.dark : Themes.light;

  return (
    <ThemeContext.Provider value={theme}>
      <View style={[styles.content, {backgroundColor: theme.bg}]}>
        <SafeAreaView style={styles.content}>
          <HomeFeed />
        </SafeAreaView>
      </View>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  content: {flex: 1},
});

export default App;
