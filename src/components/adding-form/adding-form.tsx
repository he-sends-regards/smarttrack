import {Formik} from "formik";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import * as Yup from "yup";

import Button from "../../components/buttons/button";
import {Color, allertTypes} from "../../const";

interface FormProps {
  choosenAllert: string;
  setChoosenAllert: Function;
}

type onSumbitArgs = {
  [key: string]: string;
};

const AddingForm = ({choosenAllert, setChoosenAllert}: FormProps) => {
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

  const onSubmit = ({name, email, phoneNumber, allert}: onSumbitArgs) =>
    Alert.alert(
      `Name: ${name}\nEmail: ${email}\nPhone number: ${phoneNumber}\nAllerts: ${allert}`
    );

  const initialFormValues = {name: "", email: "", phoneNumber: "", allert: ""};

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={onSubmit}
      validationSchema={SignupSchema}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.form}>
          <View>
            <Text>Name:</Text>
            <TextInput
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              style={styles.input}
            />
            {errors.name && touched.name ? (
              <Text style={styles.errorMessage}>{errors.name}</Text>
            ) : null}
          </View>
          <View>
            <Text>Email:</Text>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              style={styles.input}
            />
            {errors.email && touched.email ? (
              <Text style={styles.errorMessage}>{errors.email}</Text>
            ) : null}
          </View>
          <View>
            <Text>Phone number:</Text>
            <TextInput
              onChangeText={handleChange("phoneNumber")}
              onBlur={handleBlur("phoneNumber")}
              value={values.phoneNumber}
              style={styles.input}
            />
            {errors.phoneNumber && touched.phoneNumber ? (
              <Text style={styles.errorMessage}>{errors.phoneNumber}</Text>
            ) : null}
          </View>

          <Text style={styles.allertsTitle}>Allerts</Text>

          <View style={styles.allertsContainer}>
            {allertTypes.map(({name, color}) => (
              <TouchableOpacity
                onPress={() => {
                  setChoosenAllert(choosenAllert === name ? "" : name);
                }}>
                <View style={styles.allertItem}>
                  <View
                    style={{
                      ...styles.allertItemCircle,
                      borderColor: color,
                      backgroundColor: color,
                    }}>
                    <Text>
                      {choosenAllert === name && (
                        <Image source={require("./img/remove-allert.png")} />
                      )}
                    </Text>
                  </View>
                  <Text>{name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            onPress={() => Alert.alert("Add on allert")}
            style={styles.allertsAddingTouchable}>
            <View style={styles.allertsAddingContainer}>
              <View style={styles.allertsAddingCircle}>
                <Text style={styles.allertsAddingPlus}>+</Text>
              </View>
              <Text style={styles.allertsAddingText}>Add an Allert</Text>
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
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Poppins-Regular",
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
    color: "red",
    textAlign: "right",
  },
  allertsTitle: {
    marginTop: 25,
    marginBottom: 5,
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    lineHeight: 21,
  },
  allertsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginBottom: 40,
  },
  allertItem: {
    marginBottom: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  allertItemCircle: {
    borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 50,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  allertsAddingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  allertsAddingCircle: {
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
  allertsAddingPlus: {color: "white", fontSize: 30},
  allertsAddingText: {
    marginLeft: 7,
    color: "#6AC7BE",
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
  allertsAddingTouchable: {
    marginBottom: 25,
  },
});

export default AddingForm;
