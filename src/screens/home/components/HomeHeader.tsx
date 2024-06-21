import React from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import CustomText from '../../../components/customText/CustomText'; // 경로 확인
import AntDesign from 'react-native-vector-icons/AntDesign'; // Import from AntDesign

import styled from 'styled-components/native';

const HomeHeader: React.FC = () => {
  return (
    <Container>
      <HomeHeaderContainer>
        <HomeHeaderTextWrap>
          <Text>
            안녕하세요, <UserName>홍길동님!</UserName>
          </Text>
          <UserSubTitle>What would you like to do?</UserSubTitle>
        </HomeHeaderTextWrap>
        <HomeUserButton>
          <AntDesign name="user" color="#fff" size={25} />
        </HomeUserButton>
      </HomeHeaderContainer>
    </Container>
  );
};

const Container = styled.View`
  padding: 0 10px;
`;
const HomeHeaderContainer = styled.View`
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const HomeHeaderTextWrap = styled.View``;

const Text = styled(CustomText)`
  font-size: 18px;
  font-weight: 600;
  color: #ffcc66;
`;

const UserName = styled(CustomText)`
  font-size: 20px;
  font-weight: 600;
  color: #f5b942;
`;

const UserSubTitle = styled(CustomText)`
  font-size: 16px;
  font-weight: 400;
  color: #ffcc66;
  margin-top: 5px;
`;

const HomeUserButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: #ffcc66;
  border: 1px solid #ffcc66;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export default HomeHeader;
