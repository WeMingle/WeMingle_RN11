import React, { useState } from 'react';
import { Image } from 'react-native';
import { CenterBox, CommonText, RowBox } from '../../component/Styled';
import Back_Icon from '../../assets/Back_Icon.png';
import { useNavigation } from '@react-navigation/native';

const AccountHeader = ({ headerTitle }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <RowBox alignC paddingB={10}>
      <Image source={Back_Icon} style={{ width: 40, height: 40, marginRight: 5, right: 5 }} />
      <CommonText fontSize={18}>{headerTitle}</CommonText>
    </RowBox>

  );
};

export default AccountHeader;
