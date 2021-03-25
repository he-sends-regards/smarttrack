import React, {useState} from "react";
import {SafeAreaView, StyleSheet, Alert} from "react-native";
import {useDispatch} from "react-redux";

import Text from "../../components/custom-text/custom-text";
import AddingForm from "../../components/stuff-form/stuff-form";
import {formType} from "../../const";
import {ActionType} from "../../store/actions";

type AddStuffType = {
  stuffType: string;
  setFormStatus: Function;
  formStatus: {isOpened: boolean; initiator: string; options: {id?: string}};
};

type onSumbitArgs = {
  [key: string]: string;
};

const AddStuff = ({stuffType, setFormStatus, formStatus}: AddStuffType) => {
  const [choosenAlert, setChoosenAlert] = useState("");
  const dispatch = useDispatch();

  const onSubmit = ({name, email, phoneNumber, alert}: onSumbitArgs) => {
    if (formStatus.initiator === formType.ADD) {
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
    } else if (formStatus.initiator === formType.EDIT) {
      dispatch({
        type: ActionType.UPDATE_STUFF,
        payload: {
          type: stuffType,
          data: {
            id: formStatus.options.id,
            name,
            email,
            phoneNumber,
            rooms: ["1", "2"],
          },
        },
      });
    }

    setFormStatus({isOpened: false});

    return Alert.alert(
      `New ${stuffType.slice(
        0,
        stuffType.length - 1
      )} with such data:\nName: ${name}\nEmail: ${email}\nPhone number: ${phoneNumber}\nhas been added`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        text={`${
          formStatus.initiator === formType.ADD ? "Add new" : "Edit"
        } ${stuffType.slice(0, stuffType.length - 1)}`}
        additionalStyle={styles.title}
        fontSize="l"
      />

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
    lineHeight: 24,
  },
});

export default AddStuff;
