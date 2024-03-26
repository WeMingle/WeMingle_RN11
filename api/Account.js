import axios from 'axios';
import { BASE_URL, makeApiToken } from './Common';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SignUp = async (payload) => {
  const url = BASE_URL + '/member/signup';
  const response = await axios.post(url, payload, 'accept: application/json', 'Content-Type: application/json').catch((error) => {
    console.log(error);
  });

  const responseData = response.data.responseData;

  await AsyncStorage.multiSet([
    ['accessToken', responseData.accessToken],
    ['refreshToken', responseData.refreshToken],
  ]);
};

export const AddProfile = async (payload) => {
  const url = BASE_URL + '/member/profile';
  const response = await axios.post(url, payload).catch((error) => {
    console.log(error);
  });

  const responseData = response.data.responseMessage;
  if (responseData === 'Profile update completed') {
    return true;
  } else return false;
};

export const CheckNickName = async (payload) => {
  const url = `${BASE_URL}/nickname/${payload.nickName}/availability`;

  const response = await axios.get(url).catch((e) => {
    console.log(e);
  });
  if (response.data.responseMessage === '사용 가능한 닉네임입니다.') {
    return true;
  } else {
    return false;
  }
};
