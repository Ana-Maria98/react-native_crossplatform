import React from 'react'
import { View, Text } from 'react-native'
import {Link} from "expo-router";

const SignIn = () => {
    return (
        <View>
            <Text>SignIn</Text>
            <Link href="./(auth)/sing-up">Create Account</Link>
        </View>
    )
}

export default SignIn
