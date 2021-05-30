import React from "react";
import { CSSProperties } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Link } from "react-router-dom";
import google_logo from "./../../assets/components/search/images/google.png";
import search_icon from "./../../assets/components/search/images/search.png";

interface SearchProps {

}

interface CustomStyle {
  searchIcon: CSSProperties;
  googleLogo: CSSProperties;
  searchInput: CSSProperties;
  actionButton: CSSProperties;
}

export const Search: React.FC<SearchProps> = (props: SearchProps) => {
  return (
    <View style={styles.container}>
      <View style={
        {
          justifyContent: "flex-end",
          height: 200
        }
      }>
       <img src={google_logo} style={primitiveStyle.googleLogo} />
      </View>
      <View style={styles.searchContainer}>
        <img src={search_icon} style={primitiveStyle.searchIcon} />
        <input type="text" style={primitiveStyle.searchInput} />
      </View>
      <View style={styles.actionContainer}>
        <button type="submit" onClick={() => {}} style={primitiveStyle.actionButton}>Recherche Google</button>
        <button type="submit" onClick={() => {}} style={primitiveStyle.actionButton}>J'ai de la chance</button>
      </View>
      <Text style={{
        paddingTop: 11,
        fontFamily: "arial, sans-serif",
        fontSize: 13,
        color: "#222"
      }}>
        Google disponible en: <Link to="" style={{textDecoration: "none"}}>English</Link>  <Link to="" style={{textDecoration: "none"}}>Malagasy</Link>
      </Text>
    </View>
  );
}

const primitiveStyle: CustomStyle = {
  googleLogo: {
    width: 272,
    height: 92,
    marginBottom: 15
  },
  searchIcon: {
    width: 15,
    height: 15,
    marginLeft: 10,
    marginRight: 10
  },
  searchInput: {
    width: "100%",
    height: 36,
    border: "none",
    backgroundColor: "inherit"
  },
  actionButton: {
    marginTop: 11,
    marginBottom: 11,
    backgroundColor: "#f8f9fa",
    border: "1px solid #f8f9fa",
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4,
    paddingLeft: 16,
    paddingRight: 16,
    height: 36,
    minWidth: 54,
    fontFamily: "arial, sans-serif",
    fontSize: 14,
    color: "#3c4043"
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start"
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      width: 583,
      height: 44,
      borderStyle: "solid",
      borderColor: "#dfe1e5",
      borderWidth: 1,
      borderRadius: 24,
      marginTop: 20
    },
    actionContainer: {
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      paddingTop: 18
    }
  }
)
