import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    bottom:10,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: "transparent",
    justifyContent: "space-between",
    alignItems: "center",
  },
  likeBtn: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#e6048c",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  likeBtnImage: {
    width: "40%",
    height: "40%",
    tintColor: "#e6048c",
  },
  applyBtn: {
    flex: 1,
    backgroundColor: "#0071ce",
    marginTop: SIZES.medium,
    marginBottom: -17,
    height: "50%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.medium,
    borderRadius: SIZES.medium,
  },
  applyBtnText: {
    fontSize: SIZES.large,
    color: COLORS.white,
    fontFamily: FONT.bold,
    padding:10
  },
});

export default styles;
