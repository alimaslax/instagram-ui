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
        flexDirection: "row"
    },
    headerOptions: {
        alignItems: "center",
        flexDirection: "row",
        gap: 20,
        marginRight: 5
    },
    stories: {
        width: "100%",
        paddingLeft: 20,
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
    }
});
