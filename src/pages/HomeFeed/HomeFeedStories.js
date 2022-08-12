import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import StoryThumbnail from '../../components/StoryThumbnail/StoryThumbnail';
import {users} from '../../Mocks';

const HomeFeedStories = () => {
  return (
    <View style={styles.content}>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <StoryThumbnail
            image={item.picture?.large}
            username={item.login?.username}
          />
        )}
        keyExtractor={item => item.login.uuid}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingVertical: 2,
    flex: 3,
  },
});

export default HomeFeedStories;
