import React, {useState} from "react";
import {Text, SafeAreaView, StyleSheet} from "react-native";

import AddingForm from "../../components/adding-form/adding-form";

type AddStuffType = {
  stuffType: string;
};

const AddStuff = ({stuffType}: AddStuffType) => {
  const [choosenAlert, setChoosenAlert] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Add new {stuffType.slice(0, stuffType.length - 1)}
      </Text>

      <AddingForm
        stuffType={stuffType}
        choosenAlert={choosenAlert}
        setChoosenAlert={setChoosenAlert}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Poppins-Regular",
  },
});

export default AddStuff;
