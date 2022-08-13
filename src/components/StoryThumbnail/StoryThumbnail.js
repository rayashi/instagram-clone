import React, {useContext, useMemo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from '../../App';
import LinearGradient from 'react-native-linear-gradient';

const StoryThumbnail = ({image, username}) => {
  const theme = useContext(ThemeContext);

  const user = useMemo(() => {
    return username.length > 10
      ? username.substring(0, 12 - 3) + '...'
      : username;
  }, [username]);

  return (
    <View style={styles.content}>
      <LinearGradient
        style={styles.avatarBorder}
        colors={['#e5f61b', '#05c9f9', '#5da92f']}>
        <Image
          source={{
            uri: image,
          }}
          style={[styles.avatar, {borderColor: theme.bg}]}
        />
      </LinearGradient>

      <Text style={[styles.username, {color: theme.text}]}>{user}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    marginHorizontal: 4,
    marginTop: 5,
  },
  avatar: {
    width: 70,
    height: 80,
    borderRadius: 40,
    resizeMode: 'cover',
    borderColor: '#e700c9',
    borderWidth: 3,
  },
  avatarBorder: {
    padding: 2,
    borderRadius: 40,
  },
  username: {
    flex: 1,
    marginTop: 3,
    fontSize: 10,
    textAlign: 'center',
  },
});

export default StoryThumbnail;
