/* eslint-disable prettier/prettier */
import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import { FIREBASE_CONFIG } from '../core/config'

export default function Dashboard({navigation}) {

  return (
    <Background>
      
        <Logo />
        <Header>{ FIREBASE_CONFIG.userID }</Header>
        <Button mode="contained" onPress={ () => navigation.navigate('Settings')}>
          Settings
        </Button>
        <Button mode="contained" onPress={ () => navigation.navigate('Settings')}>
          Settings
        </Button>
        <Button mode="contained" onPress={ () => navigation.navigate('Settings')}>
          Settings
        </Button>
        <Button mode="contained" onPress={ () => navigation.navigate('Settings')}>
          Settings
        </Button>
        <Button mode="outlined" onPress={logoutUser}>
          Logout
        </Button>
    </Background>
  )
}
