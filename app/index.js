import {Stack} from "expo-router";
import {SafeAreaView, ScrollView} from "react-native";
const Home = () => {
    return (
        <SafeAreaView>
            <Stack.Screen options={{
                headerStyle: {backgroundColor: "#eaeaea"},
                headerShadowVisible: false,
                headerLeft: "Hello",
                headerRight: "World",
                headerTitle: ""

            }} />
            <ScrollView showsVerticalScrollIndicator={false}>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;