import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: 'white',
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: 'white',
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 55,
    borderRadius:20,
    padding:10,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 4.65, // Shadow radius (blur radius)
    elevation: 8, // Elevation for Android shadow
    backgroundColor: 'white', // Background color of the search container
    width:380
  },
  searchContainer3: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 70,
    width:360,
    borderRadius:100,
    padding:10,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 4.65, // Shadow radius (blur radius)
    elevation: 8, // Elevation for Android shadow
    backgroundColor: 'white', // Background color of the search container
    margin:10
  },
  searchContainer2: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 70,
    borderRadius:100,
    padding:40,
    margin:20
  },
  searchWrapper2: {
    flex: 1,
    backgroundColor: COLORS.gray2,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
    marginTop:70,
 marginLeft:1
  },
  searchWrapper: {
    flex: 1,
    backgroundColor:'#e6048c',
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
  },
  searchWrapper3: {
    flex: 1,
    backgroundColor: '#e6048c',
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    fontSize:SIZES.medium,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    backgroundColor:'white'
  },
  searchInput3: {
    fontFamily: FONT.regular,
    fontSize:SIZES.large,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    backgroundColor:'white'
  },
  searchInput2: {
    borderColor:'#e8e8e8',
    borderWidth:1,
    height:50,
    borderRadius:10,
    backgroundColor:'white',
    width: 350,
    paddingHorizontal:120
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: 'rgb(37, 150, 190)',
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center"
  },
  searchBtn2: {
    width: 50,
    height: "100%",
    backgroundColor: '#0071ce',
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center"
  },
  searchBtnImage: {
    width: "80%",
    height: "70%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.small,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    backgroundColor:'white',
    borderWidth: 1,
    borderColor: activeJobType === item ? 'white' : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color:'black',
  }),
});

export default styles;
