import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

const LogoutModal = ({ navigation }) => {
    const handleLogout = () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                {
                    text: 'Cancel',
                    onPress: () => navigation.goBack(),
                },
                {
                    text: 'Yes',
                    onPress: () => navigation.replace('Login'),
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Do you want to logout?</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default LogoutModal;
