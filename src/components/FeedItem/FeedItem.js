import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from '../../App';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const FeedItem = ({post}) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles.content}>
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
        <EntypoIcon
          style={styles.topRight}
          name="dots-three-horizontal"
          color={theme.text}
          size={16}
        />
      </View>
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />
      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
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
        <View style={styles.bottomRight}>
          <FontAwesomeIcon
            style={styles.icon}
            name="bookmark-o"
            color={theme.text}
            size={25}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    paddingVertical: 8,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
    paddingHorizontal: 5,
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
  },
  icon: {
    marginHorizontal: 6,
  },
});

export default FeedItem;
