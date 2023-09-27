import { StyleSheet } from "react-native";
import Colors from "./Colors";
import { deviceWidth, moderateScale, scale } from "../utils/ScreenRatio";

const CommonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eff5f3',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    centerContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    inputBoxStyle: {
        // width: deviceWidth/1.2,
        alignSelf: 'center',
        flex: 1,
        borderBottomWidth: 1,
        borderColor: Colors.grey,
        marginTop: moderateScale(10),
        fontSize: moderateScale(13),
    },
    miniText: {
        fontSize: moderateScale(12),
    },
    mediumText: {
        fontSize: moderateScale(16),
        marginVertical: moderateScale(12),
        color: Colors.black,
        fontWeight: 'bold'
    },
    smallText: {
        fontSize: moderateScale(14),
        marginVertical: moderateScale(6),
        color: Colors.primary
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // flex: 1,
        // backgroundColor: 'pink'
    },
    shadow: {
        elevation: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    shadowBox: {
        margin: moderateScale(16),
        paddingHorizontal: moderateScale(16),
        paddingTop: moderateScale(8),
        paddingBottom: 0,
        borderRadius: 10,
        backgroundColor: Colors.white,
    },
    avatar: {
        width: moderateScale(120),
        height: moderateScale(120),
        borderRadius: moderateScale(60),
        backgroundColor: Colors.grey
    }
})

export default CommonStyles;