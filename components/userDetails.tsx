import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface UserDetailsProps {
    firstName:string,
    lastName:string
}

export default function UserDetails(props:UserDetailsProps) {
    
    return (
        <View style={styles.container}>
            <Text testID="test">{props.firstName} {props.lastName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
