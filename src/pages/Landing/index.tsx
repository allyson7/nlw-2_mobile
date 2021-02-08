import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import landingImag from '../../assets/images_nlw-2/landing.png';
import studyIcon from '../../assets/images_nlw-2/icons/study.png';
import giveClassesIcon from '../../assets/images_nlw-2/icons/give-classes.png';
import heartIcon from '../../assets/images_nlw-2/icons/heart.png';

function Landing() {
  const { navigate } = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  };

  function handleNavigateToStudyPages() {
    navigate('Study');
  }
  
  return (
    <View style={styles.container}>
      <Image source={landingImag} style={styles.banner}/>

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton 
          onPress={handleNavigateToStudyPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />

          <Text style={styles.buttonText}>Estudar</Text>
        </ RectButton>

        <RectButton 
          onPress={handleNavigateToGiveClassesPage} 
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />

          <Text style={styles.buttonText}>Dar aulas</Text>
        </ RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de 285 conexões já realizadas {' '}

        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;