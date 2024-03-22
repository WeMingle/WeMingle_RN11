import { Dimensions, Platform, StatusBar } from 'react-native';
import styled, { css } from 'styled-components/native';

export const BaseSafeView = styled.View`
  flex: 1;
  background-color: ${(props) => props.bgColor || '#fff'};
  padding-top: ${StatusBar.currentHeight}px;
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  ${(props) => `justify-content: ${props.justify}` || ''};
`;

export const CommonText = styled.Text`
  font-size: ${(props) => props.fontSize || 20}px;
  color: ${(props) => props.color || '#000'};
  margin-top: ${(props) => props.marginT || 0}px;
  text-align: ${(props) => (props.textAlignC ? 'center' : 'left')};
  ${(props) => (props.underline ? 'text-decoration-line: underline' : '')};
`;

export const RowBox = styled.View`
  flex-direction: row;
  ${(props) => (props.alignC ? 'align-items: center;' : '')};
  justify-content: ${(props) => (props.justify ? props.justify : '')};
  padding-top: ${(props) => props.paddingT || 0}px;
  padding-bottom: ${(props) => props.paddingB || 0}px;
  margin-top: ${(props) => props.marginT || 0}px;
`;

export const CenterBox = styled.View`
  align-items: center;
  margin-top: ${(props) => props.marginT || 15}px;
  padding-top: ${(props) => props.paddingT || 0}px;
  justify-content: ${(props) => props.justify};
`;

export const CommonTouchableOpacity = styled.TouchableOpacity`
  width: ${(props) => props.width || 0}px;
  height: ${(props) => props.height || 0}px;
  background-color: ${(props) => props.bgColor || '#fff'};
  align-items: ${(props) => (props.alignC ? 'center' : 'flex-start')};
  justify-content: ${(props) => (props.justifyC ? 'center' : 'flex-start')};
`;

export const StartButton = styled(CommonTouchableOpacity)`
  border-radius: 50px;
  width: 250px;
  height: 48px;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => props.marginT || 0}px;
`;

export const AccountHeader = styled(RowBox)`
  align-items: center;
  padding: 0 0 10px 0;
`;

export const CommonInput = styled.TextInput`
  width: 100%;
  height: 44px;
  border-width: 1px;
  border-color: #d7dce5;
  margin-top: 8px;
  border-radius: 4px;
  padding: 12px;
  background-color: ${(props) => props.bgColor || '#fff'};
`;

export const AccountButton = styled(CommonTouchableOpacity)`
  width: 100%;
  height: 48px;
  border-radius: 15px;

  align-items: center;
  justify-content: center;
  margin-top: ${(props) => props.marginT || 0}px;
`;

export const FlexAutoView = styled.View`
  flex: auto;
`;

// Modal

export const ModalContainer = styled.View`
  width: ${Dimensions.get('screen').width}px;
  height: ${Dimensions.get('screen').height / 2}px;
  background-color: #fff;
  bottom: 0px;
  position: absolute;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 20px;
`;
