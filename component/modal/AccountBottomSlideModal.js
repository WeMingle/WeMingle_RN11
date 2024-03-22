import React, { useEffect } from 'react';
import { View, Modal, Dimensions } from 'react-native';
import { CommonText, CommonTouchableOpacity, Container, ModalContainer, RowBox } from '../../component/Styled';
import { Colors } from '../Colors';
import { Checkbox, RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const AccountBottomSlideModal = ({ modalVisible, setModalVisible, setPostData, SignUpEmail }) => {
  const navigation = useNavigation();

  useEffect(() => {
    setPostData(prev => {
      return { ...prev, signupPlatform: 'NONE', phoneType: 'AOS', firebaseToken: 'test', allowNotification: true }
    })
  }, [])

  return (
    <>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible((prev) => !prev);
        }}
      >
        <Container style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <ModalContainer>
            <CommonText textAlignC>서비스 이용 약관 동의</CommonText>
            <RowBox alignC marginT={28}>
              <RadioButton value="first" status={'checked'} onPress={() => console.log('asd')} />
              <CommonText>전체 동의 하기</CommonText>
            </RowBox>
            <View style={{ height: 1, backgroundColor: Colors.c_gray300, marginTop: 12 }}></View>
            <RowBox alignC marginT={20} justify={'space-between'}>
              <RowBox alignC>
                <Checkbox value="first" status={'checked'} onPress={() => console.log('asd')} />
                <CommonText fontSize={14}>[필수] 위밍글 서비스 이용약관 동의</CommonText>
              </RowBox>
              <CommonText underline color={Colors.c_gray400} fontSize={14}>
                보기
              </CommonText>
            </RowBox>

            <RowBox alignC marginT={10} justify={'space-between'}>
              <RowBox alignC>
                <Checkbox value="first" status={'checked'} onPress={() => console.log('asd')} />
                <CommonText fontSize={14}>[필수] 개인정보 수집 및 이용 동의</CommonText>
              </RowBox>
              <CommonText underline color={Colors.c_gray400} fontSize={14}>
                보기
              </CommonText>
            </RowBox>

            <RowBox alignC marginT={10} justify={'space-between'}>
              <RowBox alignC>
                <Checkbox value="first" status={'checked'} onPress={() => console.log('asd')} />
                <CommonText fontSize={14}>[선택] 위치 기반 서비스 약관동의</CommonText>
              </RowBox>
              <CommonText underline color={Colors.c_gray400} fontSize={14}>
                보기
              </CommonText>
            </RowBox>

            <RowBox alignC marginT={10} justify={'space-between'}>
              <RowBox alignC>
                <Checkbox value="first" status={'checked'} onPress={() => console.log('asd')} />
                <CommonText fontSize={14}>[선택] 마케팅 정보 수신동의</CommonText>
              </RowBox>
              <CommonText underline color={Colors.c_gray400} fontSize={14}>
                보기
              </CommonText>
            </RowBox>
            <CommonTouchableOpacity
              onPress={() => {
                SignUpEmail()
                return
                setModalVisible(false);
                navigation.navigate('SignUpComplete');
              }}
              justifyC
              alignC
              style={{ position: 'absolute', bottom: 0 }}
              bgColor={'#000'}
              width={Dimensions.get('screen').width}
              height={48}
            >
              <CommonText color={'#fff'}>다음단계</CommonText>
            </CommonTouchableOpacity>
          </ModalContainer>
        </Container>
      </Modal>
    </>
  );
};

export default AccountBottomSlideModal;
