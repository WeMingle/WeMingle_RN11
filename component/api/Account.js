import axios from "axios"
import { BASE_URL, makeApiToken } from "./Common"
import AsyncStorage from "@react-native-async-storage/async-storage"


export const SignUp = async (payload) => {

  const url = BASE_URL + '/member/signup'
  const response = await axios.post(url, payload, 'accept: application/json',
    'Content-Type: application/json').catch(error => {
    })

  const responseData = response.data.responseData

  await AsyncStorage.multiSet([['accessToken', responseData.accessToken], ['refreshToken', responseData.refreshToken]])


}