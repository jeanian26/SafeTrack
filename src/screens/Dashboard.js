/* eslint-disable prettier/prettier */
/* eslint-disable import/no-duplicates */
import React, { useEffect } from 'react'
import { setDoc, addDoc, collection, onSnapshot } from 'firebase/firestore'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
// eslint-disable-next-line import/named
import { logoutUser, db } from '../api/auth-api'
import { FIREBASE_CONFIG } from '../core/config'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Welcome to SafeTract</Header>
      <Paragraph>Your Own Security System</Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate('Home')}>
        Home
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('SocialNetwork')}
      >
        Social Network
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Map')}>
        Map
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Video')}>
        Video
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Settings')}>
        Settings
      </Button>
      <Button mode="outlined" onPress={logoutUser}>
        Logout
      </Button>
    </Background>
  )
}
