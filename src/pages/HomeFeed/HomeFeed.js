import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeFeedHeader from './HomeFeedHeader';
import HomeFeedTabs from './HomeFeedTabs';
import HomeFeedTimeline from './HomeFeedTimeline';

const HomeFeed = () => {
  return (
    <View style={styles.content}>
      <HomeFeedHeader />
      <HomeFeedTimeline />
      <HomeFeedTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default HomeFeed;
