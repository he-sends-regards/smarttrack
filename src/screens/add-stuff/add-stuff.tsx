import React, {useState} from "react";
import {SafeAreaView, StyleSheet, Alert} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import Text from "../../components/custom-text/custom-text";
import AddingForm from "../../components/stuff-form/stuff-form";
import {ActionType} from "../../store/actions";
import {RootState} from "../../store/store";

type AddStuffType = {
  stuffType: string;
};

type onSumbitArgs = {
  [key: string]: string;
};

const AddStuff = ({stuffType}: AddStuffType) => {
  const [choosenAlert, setChoosenAlert] = useState("");
  const dispatch = useDispatch();

  const initialValues = useSelector(
    (state: RootState) => state.FORMS.defaultData
  );
  const doesStoreHaveInitialValues = Object.keys(initialValues).length > 0;

  const onSubmit = ({name, email, phoneNumber, alert}: onSumbitArgs) => {
    if (doesStoreHaveInitialValues) {
      dispatch({
        type: ActionType.UPDATE_STUFF,
        payload: {
          type: stuffType,
          data: {
            id: initialValues.id,
            name,
            email,
            phoneNumber,
            rooms: ["1", "2"],
          },
        },
      });
    } else {
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
    }

    dispatch({type: ActionType.SWITCH_STUFF_FORM_STATUS});

    return Alert.alert(`Done!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        text={`${
          doesStoreHaveInitialValues ? "Edit" : "Add new"
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
    height: "100%",
    paddingHorizontal: 16,
    alignItems: "center",
    paddingTop: 30,
  },
  title: {
    lineHeight: 24,
  },
});

export default AddStuff;
