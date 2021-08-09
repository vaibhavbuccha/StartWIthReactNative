import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "vaibhav", key: 1 },
    { name: "rishabh", key: 2 },
    { name: "pratham", key: 3 },
    { name: "sahil", key: 4 },
    { name: "aananya", key: 5 },
    { name: "radhika", key: 6 },
    { name: "nidhi", key: 7 },
    { name: "hritika", key: 8 },
  ]);

  const pressHandler = (id) => {
    alert(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.key != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {people.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 20,
  },
});
