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
        colors={['#fa046c', '#d300c5', '#fbc22e']}>
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
    marginHorizontal: 8,
    marginTop: 5,
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 40,
    resizeMode: 'contain',
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
