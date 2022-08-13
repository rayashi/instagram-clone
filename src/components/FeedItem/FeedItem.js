import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from '../../App';
import FeatherIcon from 'react-native-vector-icons/Feather';

const FeedItem = ({post}) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.content, {backgroundColor: theme.bg}]}>
      <View style={styles.middle}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <Image
            source={{
              uri: post.avatar,
            }}
            style={styles.avatar}
          />

          <Text style={[styles.username, {color: theme.text}]}>
            {post.username}
          </Text>
        </View>
        <FeatherIcon
          style={styles.icon}
          name="heart"
          color={theme.text}
          size={25}
        />
        <FeatherIcon
          style={styles.icon}
          name="message-circle"
          color={theme.text}
          size={25}
        />
        <FeatherIcon
          style={styles.icon}
          name="send"
          color={theme.text}
          size={25}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    margin: 5,
    borderRadius: 20,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    width: '100%',
  },
  topLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topRight: {
    marginRight: 5,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  bottomLeft: {flexDirection: 'row'},
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'contain',
  },
  username: {
    marginTop: 3,
    fontWeight: 'bold',
    marginLeft: 5,
    textAlign: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 400,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  icon: {
    marginHorizontal: 6,
  },
});

export default FeedItem;
