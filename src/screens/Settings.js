/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import BackgroundTop from '../components/BackgroundTop'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'

export default function Settings({ navigation }) {
  return (
    <BackgroundTop>
      <BackButton goBack={navigation.goBack} />
      <Text style={style.header}>Settings</Text>
      <Paragraph>Activate on Shake</Paragraph>
      <View style={{ flexDirection: 'row' }}>
        <View style={style.buttonStyle}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('LoginScreen')}
          >
            Activate
          </Button>
        </View>
        <View style={style.buttonStyle}>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('LoginScreen')}
          >
            Deactivate
          </Button>
        </View>
      </View>
      <Paragraph style={style.ParagraphStyle}>Sensitivity Level</Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate('Dashboard')}>
        Sensitivity Level
      </Button>
      <Paragraph style={style.ParagraphStyle}>PIN password</Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate('Dashboard')}>
        Enrolled
      </Button>
      <Paragraph style={style.ParagraphStyle}>Fingerprint</Paragraph>
      <Button mode="outlined" onPress={() => navigation.navigate('Dashboard')}>
        Not Enrolled
      </Button>
      <View style={style.bottomContainer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Dashboard')}
          style={style.buttonFar}
        >
          SAVE
        </Button>
      </View>
    </BackgroundTop>
  )
}

const style = StyleSheet.create({
  buttonStyle: {
    marginHorizontal: 10,
    marginTop: -15,
  },
  ParagraphStyle: {
    marginTop: 30,
  },
  header: {
    marginTop: 30,
    fontSize: 28,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  bottomContainer: {
    width: 300,
    flex: 1,
    justifyContent: 'flex-end',
  },
})
