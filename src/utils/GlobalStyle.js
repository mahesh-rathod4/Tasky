import { StyleSheet } from "react-native";

export default StyleSheet.create({
  CustomFont: {
    // fontFamily: 'Inter-Bold',
  },
  ButtonTitle: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold"
  },
  ButtonBG: {
    backgroundColor: "#20C3AF",
    height: 60,
    alignSelf: "stretch",
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: "center",
  },
  DisableButton: {
    backgroundColor: "#dddddd",
    borderRadius: 8,
    height: 48,
    alignSelf: "stretch",
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: "center",
  },
  TextFiledTitle: {
    fontSize: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "#F7F7F7",
    alignSelf: "stretch",
  },
  TextFieldDisabled: {
    fontSize: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    color: "gray",
    backgroundColor: "#fff",
    alignSelf: "stretch",
    borderRadius: 8,
  },
});
