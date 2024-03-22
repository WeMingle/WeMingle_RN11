import React from 'react';
import { Image, View } from 'react-native';
import { AccountButton, BaseSafeView, CommonInput, CommonText, CommonTouchableOpacity, Container, RowBox } from '../../component/Styled';
import Back_Icon from '../../assets/Back_Icon.png';
import { useNavigation } from '@react-navigation/native';
import Profile_Icon from '../../assets/profile.png';
import { Colors } from '../../component/Colors';
import AccountHeader from '../../component/header/AccountHeader';

const SignUpCompleteScreen = () => {
  const navigation = useNavigation();

  return (
    <BaseSafeView>
      <Container>
        <AccountHeader headerTitle={'회원 가입'} />

        <RowBox>
          <View style={{ height: 4, width: '100%', backgroundColor: '#0E6FFF', borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}></View>
        </RowBox>
        <CommonText marginT={15} fontSize={12}>
          회원가입을 위한 마지막 단계입니다.
        </CommonText>
        <CommonText fontSize={12}>프로필을 설정해주세요</CommonText>
        <CommonTouchableOpacity width={80} height={80} bgColor={Colors.c_gray200} style={{ borderRadius: 80, alignSelf: 'center', marginTop: 38 }}>
          <Image source={Profile_Icon} style={{ width: '100%', height: '100%' }} />
        </CommonTouchableOpacity>

        <CommonText marginT={28} fontSize={14}>
          닉네임
        </CommonText>
        <CommonInput />
        <CommonText marginT={4} fontSize={12} color={'#276EF2'}>
          사용 가능한 닉네임입니다.
        </CommonText>

        <AccountButton style={{ bottom: 20, position: 'absolute', alignSelf: 'center' }} onPress={() => navigation.navigate('SignIn')} bgColor={'#D7DCE5'} marginT={20}>
          <CommonText color={'#fff'}>회원 가입</CommonText>
        </AccountButton>
      </Container>
    </BaseSafeView>
  );
};

export default SignUpCompleteScreen;
