import React from "react";
import MainFrameView from "../../../common/components/MainFrameView";
import AppHeader from "../../../common/components/AppHeader";
import { Images, Strings } from "../../../common/res";
import { useNavigation } from "@react-navigation/native";
import style from "./style";
import {
  ImageBackground,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ms } from "../../../common/res/Scale";
import PieChart from "react-native-pie-chart";
import CustomPieChart from "../../../common/components/Chart/CustomPieChart";
const Reports = () => {
  const data = [
    { id: 1, label: "Empty Can Report" },
    { id: 2, label: "Payment Report" },
    { id: 3, label: "Sales Report" },
    { id: 4, label: "Deposit Report" },
    { id: 5, label: "Customer Report" },
    { id: 6, label: "Stack Report" },
    { id: 7, label: "Demage Report" },
    { id: 8, label: "Supplierwise Report" },
    { id: 9, label: "Deposit Refund Report" },
    { id: 10, label: "Profit&Loss Report" },
    { id: 11, label: "Customer Remainder Sales" },
    { id: 12, label: "In Active Customer List" },
  ];
  const navigation = useNavigation();
  return (
    <MainFrameView>
      {/* <ImageBackground
        source={Images.Linear}
        style={{width: '100%', height: '100%'}}> */}
      <AppHeader
        headerText={Strings.report}
        showMenuIcon={true}
        onMenuPress={() => navigation.openDrawer()}
      />
      <View style={{ marginHorizontal: 15, marginTop: 15,alignItems:'center' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ProfitReport")}
          style={style.listView}
        >
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
      {/* </ImageBackground> */}
    </MainFrameView>
  );
};

export default Reports;
