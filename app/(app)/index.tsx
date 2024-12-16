import { Colors } from "@/constants/Colors";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";

export default function Index() {
  return (
    <SafeAreaView>
		<View style={style.headerView}>
			<Text>Dadsad</Text>
		</View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
	headerView: {
		backgroundColor: Colors.dark.tint,
		padding: 10,
		margin: 10,
		borderRadius: 20
	}
})
