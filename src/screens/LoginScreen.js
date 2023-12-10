import { View, Text, StyleSheet } from 'react-native';

export default function Login () {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    text: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 16
    }
})