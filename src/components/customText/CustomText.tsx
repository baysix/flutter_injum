// components/CustomText.tsx
import React from 'react';
import {Text, StyleSheet, TextProps, TextStyle} from 'react-native';

interface CustomTextProps extends TextProps {
  style?: TextStyle | TextStyle[];
}

const CustomText: React.FC<CustomTextProps> = props => {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'NanumGothic', // 추가한 폰트 패밀리 이름
  },
});

export default CustomText;
