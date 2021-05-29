import { Link } from 'react-router-dom';
import React, { CSSProperties } from "react";
import { StyleSheet, View, Text, TextStyle } from "react-native";

interface FooterProps {

}

interface CustomStyle {
  link: CSSProperties;
}

export const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.footerTitle}>
        <Text style={
          {
            fontFamily: "arial, sans-serif",
            fontSize: 15,
            color: "#70757a"
          }
        }>
          Madagascar
        </Text>
      </View>
      <View style={styles.footerAction}>
        <View style={styles.actionLeft}>
          <Link to="/blank" style={primitiveStyle.link}>A propos</Link>
          <Link to="/" style={primitiveStyle.link}>Publicité</Link>
          <Link to="/" style={primitiveStyle.link}>Entreprise</Link>
          <Link to="/" style={primitiveStyle.link}>Comment fonctionne la recherche Google</Link>
        </View>
        <View style={styles.actionRight}>
          <Link to="/" style={primitiveStyle.link}>Confidentialité</Link>
          <Link to="/" style={primitiveStyle.link}>Conditions</Link>
          <Link to="/" style={primitiveStyle.link}>Paramètres</Link>
        </View>
      </View>
    </View>
  );
}

const primitiveStyle: CustomStyle = {
  link: {
    padding: 15,
    color: "#70757a",
    fontFamily: "arial, sans-serif",
    textDecoration: "none"
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#f2f2f2"
    },
    footerTitle: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingLeft: 30,
      borderBottomColor: "#dadce0",
      borderBottomWidth: 1,
      borderBottomStyle: "solid"
    },
    footerAction: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      fontFamily: "arial, sans-serif",
      fontSize: 14,
      paddingLeft: 20,
      paddingRight: 20
    },
    actionLeft: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    actionRight: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center"
    }
  }
)