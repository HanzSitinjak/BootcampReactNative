import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert(
      'Konfirmasi',
      'Apakah Anda yakin ingin keluar?',
      [
        {
          text: 'Tidak',
          style: 'cancel',
        },
        {
          text: 'Ya',
          onPress: () => {
            // Navigasi ke halaman login
            navigation.navigate('LoginPage');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/Profile.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Hans Agung Sitinjak</Text>
        <Text style={styles.email}>hansagung19@gmail.com</Text>
        <Text style={styles.bio}>Sebagai seorang pemrogram dan pengembang aplikasi, saya berdedikasi untuk menghasilkan solusi teknologi yang inovatif dan efisien. Dengan fokus pada pemecahan masalah dan pengembangan produk yang berkualitas, saya berkomitmen untuk terus mengembangkan kemampuan dan pengetahuan dalam dunia teknologi.</Text>
      </View>
      <Text style={styles.name}>Skill Yang Dimiliki</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.skillsContainer}>
        <View style={styles.skill}>
          <Image
            source={require('../assets/FlutterLogo.png')} 
            style={styles.skillImage}
          />
          <Text style={styles.skillText}>Flutter</Text>
        </View>
        <View style={styles.skill}>
          <Image
            source={require('../assets/ReactNativeLogo.png')} 
            style={styles.skillImage}
          />
          <Text style={styles.skillText}>React-Native</Text>
        </View>
        <View style={styles.skill}>
          <Image
            source={require('../assets/JavaLogo.png')} 
            style={styles.skillImage}
          />
          <Text style={styles.skillText}>Java</Text>
        </View>
        <View style={styles.skill}>
          <Image
            source={require('../assets/KotlinLogo.jpg')} 
            style={styles.skillImage}
          />
          <Text style={styles.skillText}>Kotlin</Text>
        </View>
      </ScrollView>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  skillsContainer: {
    marginTop: 20,
  },
  skill: {
    marginRight: 10,
    alignItems: 'center',
  },
  skillImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  skillText: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ProfileScreen;
