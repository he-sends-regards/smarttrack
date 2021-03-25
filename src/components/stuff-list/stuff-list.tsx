import React from "react";
import {StyleSheet, SafeAreaView, FlatList} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "../../store/store";
import {generateId} from "../../utils";
import StuffItem from "../stuff-item/stuff-item";

interface StuffListProps {
  activeListItem: string;
  setFormStatus: Function;
}

const StuffList = ({activeListItem, setFormStatus}: StuffListProps) => {
  const dispatch = useDispatch();

  const onStuffItemDelete = (id: string, type: string = activeListItem) =>
    dispatch({type: "DELETE_STUFF", payload: {type, id}});

  const stuffData = useSelector((state: RootState) => state.STUFF.stuff);

  const renderItem = ({item, index}: any) => {
    return (
      <StuffItem
        stuffWorkerData={item}
        index={index}
        onStuffItemDelete={onStuffItemDelete}
        setFormStatus={setFormStatus}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={stuffData[activeListItem]}
        renderItem={renderItem}
        keyExtractor={generateId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "75%", // Solve without hardcode
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    marginTop: 15,
  },
});

export default StuffList;
