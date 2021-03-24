import React, {useState} from "react";
import {Text, SafeAreaView, StyleSheet, Alert} from "react-native";
import {useDispatch} from "react-redux";

import AddingForm from "../../components/adding-form/adding-form";
import {ActionType} from "../../store/actions";

type AddStuffType = {
  stuffType: string;
  setIsFormOpened: Function;
};

type onSumbitArgs = {
  [key: string]: string;
};

const AddStuff = ({stuffType, setIsFormOpened}: AddStuffType) => {
  const [choosenAlert, setChoosenAlert] = useState("");
  const dispatch = useDispatch();

  const onSubmit = ({name, email, phoneNumber, alert}: onSumbitArgs) => {
    dispatch({
      type: ActionType.ADD_STUFF,
      payload: {
        type: stuffType,
        data: {
          name,
          email,
          phoneNumber,
          rooms: ["1", "2"],
        },
      },
    });

    setIsFormOpened(false);

    return Alert.alert(
      `New ${stuffType.slice(
        0,
        stuffType.length - 1
      )} with such data:\nName: ${name}\nEmail: ${email}\nPhone number: ${phoneNumber}\nhas been added`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Add new {stuffType.slice(0, stuffType.length - 1)}
      </Text>

      <AddingForm
        stuffType={stuffType}
        choosenAlert={choosenAlert}
        setChoosenAlert={setChoosenAlert}
        onSubmit={onSubmit}
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
