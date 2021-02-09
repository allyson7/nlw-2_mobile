import React, { useState } from 'react';
import { Image, Text, View, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import heartOutlineIcon from '../../assets/images_nlw-2/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images_nlw-2/icons/unfavorite.png';
import whatsappIcon from '../../assets/images_nlw-2/icons/whatsapp.png';

import styles from './styles';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: string;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);
  
  function handleLinkToWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }

  async function handleToggleFavorite() {
    if (isFavorited) {

    } else {
      const favorites = await AsyncStorage.getItem('favorites');

      let favoritesArray =[];

      if (favorites) {
        favoritesArray = JSON.parse(favorites);
      }

      favoritesArray.push(teacher);

      setIsFavorited(true);
      await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
    }
  }
  
  return (
    <View style={styles.container}> 
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: teacher.avatar }}
        />

        <View style={styles.profileInfo}>
          <Text style ={styles.name}>{teacher.name}</Text>
          <Text style ={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[
              styles.favoriteButton, 
              isFavorited ? styles.favorited : {}
            ]}
          >
            { isFavorited 
              ? <Image source={unfavoriteIcon} />
              : <Image source={heartOutlineIcon} /> 
            }
            
            
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem;