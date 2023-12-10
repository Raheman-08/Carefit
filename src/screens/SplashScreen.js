import { View, Text, StyleSheet, Button } from 'react-native';

export default function SplashScreen ({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Splashscreen</Text>
            <Button title='go to login' onPress={() => navigation.navigate("Login")} />
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