import {Formik} from "formik";
import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import {useSelector} from "react-redux";
import * as Yup from "yup";

import {Color, alertTypes} from "../../const";
import {RootState} from "../../store/store";
import {generateId} from "../../utils";
import Button from "../buttons/button";
import Text from "../custom-text/custom-text";
import TrashIcon from "./img/remove-alert.svg";

interface FormProps {
  stuffType: string;
  choosenAlert: string;
  setChoosenAlert: Function;
  onSubmit: (values: {[key: string]: string}) => void;
}

const AddingForm = ({choosenAlert, setChoosenAlert, onSubmit}: FormProps) => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    phoneNumber: Yup.string()
      .min(5, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const initialValuesInStore = useSelector(
    (state: RootState) => state.FORMS.defaultData
  );

  const initialFormValues =
    Object.keys(initialValuesInStore).length === 0
      ? {name: "", email: "", phoneNumber: "", alert: ""}
      : initialValuesInStore;

  return (
    <SafeAreaView>
      <Formik
        style={styles.container}
        initialValues={initialFormValues}
        onSubmit={onSubmit}
        validationSchema={SignupSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.form}>
            <View>
              <Text text="Name:" />
              <TextInput
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                style={styles.input}
              />
              {errors.name && touched.name ? (
                <Text
                  color="red"
                  additionalStyle={styles.errorMessage}
                  text={errors.name}
                />
              ) : null}
            </View>
            <View>
              <Text text="Email:" />
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                style={styles.input}
              />
              {errors.email && touched.email ? (
                <Text
                  color="red"
                  additionalStyle={styles.errorMessage}
                  text={errors.email}
                />
              ) : null}
            </View>
            <View>
              <Text text="Phone number:" />
              <TextInput
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                value={values.phoneNumber}
                style={styles.input}
              />
              {errors.phoneNumber && touched.phoneNumber ? (
                <Text
                  color="red"
                  additionalStyle={styles.errorMessage}
                  text={errors.phoneNumber}
                />
              ) : null}
            </View>

            <Text
              text="Alerts"
              fontWeight="bold"
              fontSize="l"
              additionalStyle={styles.alertsTitle}
            />

            <View style={styles.alertsContainer}>
              {alertTypes.map(({name, color}) => (
                <TouchableOpacity
                  key={generateId()}
                  onPress={() => {
                    setChoosenAlert(choosenAlert === name ? "" : name);
                  }}>
                  <View style={styles.alertItem}>
                    <View
                      style={{
                        ...styles.alertItemCircle,
                        borderColor: color,
                        backgroundColor: color,
                      }}>
                      {choosenAlert === name && <TrashIcon />}
                    </View>
                    <Text text={name} />
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity style={styles.alertsAddingTouchable}>
              <View style={styles.alertsAddingContainer}>
                <View style={styles.alertsAddingCircle}>
                  <Text
                    color="white"
                    additionalStyle={styles.alertsAddingPlus}
                    text="+"
                  />
                </View>
                <Text
                  text="Add an Alert"
                  color="#6AC7BE"
                  additionalStyle={styles.alertsAddingText}
                  fontSize="m"
                />
              </View>
            </TouchableOpacity>

            <Button
              onPress={handleSubmit}
              title="Save"
              backgroundColor={Color.primaryColor}
              color="white"
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    padding: 5,
    width: "100%",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
  form: {
    flex: 1,
    justifyContent: "flex-start",
  },
  errorMessage: {
    textAlign: "right",
  },
  alertsTitle: {
    marginTop: 5,
    marginBottom: 5,
    lineHeight: 21,
  },
  alertsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  alertItem: {
    marginBottom: 15,
    marginHorizontal: 15,
    alignItems: "center",
  },
  alertItemCircle: {
    borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 50,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  alertsAddingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  alertsAddingCircle: {
    borderWidth: 1,
    borderColor: "#6AC7BE",
    width: 40,
    height: 40,
    borderRadius: 50,
    marginBottom: 5,
    backgroundColor: "#6AC7BE",
    alignItems: "center",
    justifyContent: "center",
  },
  alertsAddingPlus: {fontSize: 30},
  alertsAddingText: {
    marginLeft: 7,
  },
  alertsAddingTouchable: {
    marginBottom: 25,
  },
});

export default AddingForm;
