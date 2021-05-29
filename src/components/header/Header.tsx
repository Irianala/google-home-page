import React, { CSSProperties } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Link } from "react-router-dom";
import app_icon from './../../assets/components/header/images/apps-button.png';
import user_icon from './../../assets/components/header/images/user.png';
interface HeaderProps {

}
export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <View style = {styles.container}>
      <Link to="/" style = {primitiveStyle.link}>Gmail</Link>
      <Link to="/" style={primitiveStyle.link}>Image</Link>
      <Link to="/"><img src={app_icon} style={primitiveStyle.appIcon} /></Link>
      <Link to="/"><img src={user_icon} style={primitiveStyle.profileIcon} /></Link>
    </View> 
  );
}

interface CustomStyle {
  link: CSSProperties;
  appIcon: CSSProperties;
  profileIcon: CSSProperties;
}

const primitiveStyle: CustomStyle = {
  link: {
    fontFamily: "arial, sans-serif",
    fontSize: 13,
    textDecoration: "none",
    color: "black",
    marginLeft: 7,
    marginRight: 7
  },
  appIcon: {
    width: 16,
    height: 16,
    marginLeft: 15,
    marginRight: 15
  },
  profileIcon: {
    width: 32,
    height: 32,
    marginRight: 15,
    marginLeft: 15
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  }
});