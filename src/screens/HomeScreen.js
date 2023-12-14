import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
                <Text style={styles.text}>Homepage</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    }
});