import axios from 'axios';
import { axiosPrivate } from './Common';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SignUp = async (payload) => {
  const response = await axiosPrivate.post(url, payload, 'accept: application/json', 'Content-Type: application/json').catch((error) => {
    console.log(error);
  });

  const responseData = response.data.responseData;

  await AsyncStorage.multiSet([
    ['accessToken', responseData.accessToken],
    ['refreshToken', responseData.refreshToken],
  ]);
};

export const AddProfile = async (payload) => {
  const response = await axiosPrivate.post(url, payload).catch((error) => {
    console.log(error);
  });

  const responseData = response.data.responseMessage;
  if (responseData === 'Profile update completed') {
    return true;
  } else return false;
};

export const CheckNickName = async (payload) => {
  const response = await axiosPrivate.get(url).catch((e) => {
    console.log(e);
  });
  if (response.data.responseMessage === '사용 가능한 닉네임입니다.') {
    return true;
  } else {
    return false;
  }
};
