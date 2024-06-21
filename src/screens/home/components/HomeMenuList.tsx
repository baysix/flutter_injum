import React from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import CustomText from '../../../components/customText/CustomText'; // 경로 확인
import AntDesign from 'react-native-vector-icons/AntDesign'; // Import from AntDesign

import styled from 'styled-components/native';

const HomeMenuList: React.FC = () => {
  return (
    <HomeMenuContainer>
      <MenuItem>
        <MenuIcon>
          <AntDesign name="search1" color="#b87b00" size={25} />
        </MenuIcon>
        <MenuTitle>매장찾기</MenuTitle>
      </MenuItem>
      <MenuItem>
        <MenuIcon>
          <AntDesign name="calendar" color="#b87b00" size={25} />
        </MenuIcon>
        <MenuTitle>내 예약</MenuTitle>
      </MenuItem>
      <MenuItem>
        <MenuIcon>
          <AntDesign name="creditcard" color="#b87b00" size={25} />
        </MenuIcon>
        <MenuTitle>쿠폰</MenuTitle>
      </MenuItem>
      <MenuItem>
        <MenuIcon>
          <AntDesign name="wechat" color="#b87b00" size={25} />
        </MenuIcon>
        <MenuTitle>상담내역</MenuTitle>
      </MenuItem>
      <MenuItem>
        <MenuIcon>
          <AntDesign name="form" color="#b87b00" size={25} />
        </MenuIcon>
        <MenuTitle>공지사항</MenuTitle>
      </MenuItem>
    </HomeMenuContainer>
  );
};

const HomeMenuContainer = styled.View`
  margin-top: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
`;

const MenuItem = styled.TouchableOpacity`
  background-color: #ffcc66;
  flex-basis: 30%; /* Each item takes up 30% of the row */
  margin: 0.8%; /* Adjust for spacing between items */
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  border-radius: 10px;
`;

const MenuIcon = styled.View`
  padding: 15%;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
`;
const MenuTitle = styled(CustomText)`
  font-size: 14px;
  font-weight: 600;
  color: #b87b00;
  margin-top: 10px;
`;

export default HomeMenuList;
