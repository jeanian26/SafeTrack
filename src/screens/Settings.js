/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import BackButton from '../components/BackButton'


export default function Settings({navigation}) {
  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>Let’s start</Header>
        <Paragraph>
            This is the settings page
        </Paragraph>
        <Button mode="outlined" onPress={() => navigation.navigate('Dashboard')}>
            Dashboard
        </Button>
        <Button mode="outlined" onPress={logoutUser}>
            Logout
        </Button>
    </Background>
  )
}
