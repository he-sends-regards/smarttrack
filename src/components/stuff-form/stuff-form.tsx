import {Formik} from "formik";
import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Yup from "yup";

import {Color, alertTypes} from "../../const";
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

const AddingForm = ({
  stuffType,
  choosenAlert,
  setChoosenAlert,
  onSubmit,
}: FormProps) => {
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

  const initialFormValues = {name: "", email: "", phoneNumber: "", alert: ""};

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={onSubmit}
      validationSchema={SignupSchema}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
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

          <TouchableOpacity
            onPress={() => Alert.alert("Add on alert")}
            style={styles.alertsAddingTouchable}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    alignItems: "center",
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    padding: 14,
    width: "100%",
    marginVertical: 10,
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
  form: {
    width: "100%",
  },
  errorMessage: {
    textAlign: "right",
  },
  alertsTitle: {
    marginTop: 25,
    marginBottom: 5,
    lineHeight: 21,
  },
  alertsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginBottom: 40,
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
