import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    borderRadius: SIZES.small,
    backgroundColor: "#fff9fd",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    height:110
  },
  logoContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    overflow:"hidden",
  },
  logoImage: {
    width: "100%",
    height: "100%",
    objectFit:"fill"
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobName: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.primary,
  },
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
});

export default styles;
