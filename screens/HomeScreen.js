import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import axios from "axios";
import { useEffect, useState } from "react";

import { API_USER_ID, API_TOKEN_ID } from "../env";

export default function HomeScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");

  const doSearch = async () => {
    try {
      const response = await axios.get(
        "https://www.stands4.com/services/v2/lyrics.php",
        {
          params: {
            uid: API_USER_ID,
            tokenid: API_TOKEN_ID,
            format: "json",
            term: searchText,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text>Search for a song</Text>
      <TextInput
        style={{
          marginTop: 10,
          height: 40,
          width: 250,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 15,
          padding: 10,
        }}
        placeholder="Enter song name or artist"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <View style={{ marginTop: 30 }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            width: 100,
            backgroundColor: "orange",
            padding: 10,
            borderRadius: 15,
          }}
          onPress={doSearch}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Search
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
