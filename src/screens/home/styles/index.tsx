import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: 56,
        paddingHorizontal: 10,
        marginTop: 40,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        zIndex: 1000
    },
    headerOptions: {
        alignItems: "center",
        flexDirection: "row",
        gap: 20,
        marginRight: 5
    },
    stories: {
        width: "100%",
        paddingLeft: 12,
        paddingVertical: 3,
        alignItems: "center"
    },
    story: {
        alignItems: "center",
        marginRight: 10,
        gap: 3
    },
    storiesCardImage: {
        width: 79,
        height: 79,
        borderWidth: 4,
        borderColor: "black",
        borderRadius: 50,
    },
    storiesCardText: {
        color: "white",
        fontSize: 12,
    },
    storiesCardMain: {
        width: 25,
        height: 25,
        backgroundColor: "#0395F5",
        borderRadius: 50,
        position: "absolute",
        bottom: 22,
        right: 5,
        borderColor: "black",
        borderWidth: 2,
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
    },
    storiesCardMainPlus: {
        width: 9,
        height: 9
    },
    content: {
        width: '100%',
        marginBottom: 10,
    },
    contentItemHeader: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 12,
        height: 52
    },
    contentItemFooter: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 12,
        height: 50
    },
    contentItemHeaderTxt: {
        color: "white",
    },
    contentItemFooterTxt: {
        color: "white",
        marginBottom: 3
    },
    contentItemHeaderImg: {
        width: 30,
        height: 30,
    },
    contentItemHeaderLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    contentItemFooterLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },
    infoPost: {
        paddingHorizontal: 15
    },
    viewHr: {
        height: 1,
        width: '100%',
        backgroundColor: "#0f0f0f",
        marginTop: 8
    },
    contentItem: {
        marginBottom: 12
    },
    contentItemImgPost: {
        width: '100%',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        borderTopColor: '#4e4e4e',
        borderTopWidth: 0.5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'black'
    }
});
