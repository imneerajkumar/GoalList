import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function GoalItem({ item, onDelete }) {
  return (
    <View style={styles.listItem}>
      <View style={styles.textView}>
        <Text style={styles.text}>{item.goal}</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <View style={styles.delView}>
          <Ionicons 
            name="ios-trash-bin"
            size={20}
            color="#d7f5e8"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 10, 
    backgroundColor: "#d7f5e8",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10
  },
  textView: {
    width: "85%"
  },
  text: {
    fontSize: 18
  },
  delView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  }
})

export default GoalItem;