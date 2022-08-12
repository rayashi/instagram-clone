import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import FeedItem from '../../components/FeedItem/FeedItem';
import {feed} from '../../Mocks';
import HomeFeedStories from './HomeFeedStories';

const HomeFeedTimeline = () => {
  return (
    <View style={styles.content}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeFeedStories />
        <FlatList
          data={feed}
          renderItem={({item}) => <FeedItem post={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 16,
  },
});

export default HomeFeedTimeline;
