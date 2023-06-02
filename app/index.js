import {Stack} from "expo-router";
import {ActivityIndicator, FlatList, SafeAreaView, ScrollView, View, Text} from "react-native";
import useFetch from "../hook/useFetch";
import ScreenHeaderBtn from "../components/common/ScreenHeaderBtn/ScreenHeaderBtn";
import FilmCard from "../components/common/FilmCard/FilmCard";
import {icons} from "../constants"
const Home = () => {
    const { data, isLoading, error, reFetch } = useFetch("titles/x/upcoming", {
        limit: 10,
    });
    return (
        <SafeAreaView>
            <Stack.Screen options={{
                headerStyle: {backgroundColor: "#eaeaea"},
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn icon={icons.menu} text="prev"/>
                ),
                headerRight: () => (
                    <ScreenHeaderBtn text="next"/>
                ),
                headerTitle: "Film App"

            }} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View>
                        <Text>Upcoming films</Text>
                    </View>

                    <View>
                        {isLoading ? (
                            <ActivityIndicator size='large' />
                        ) : error ? (
                            <Text>Something went wrong</Text>
                        ) : (
                            <FlatList
                                data={data}
                                renderItem={({ item }) => (
                                    <FilmCard item={item}></FilmCard>
                                )}
                                contentContainerStyle={{columnGap: 16}}
                                keyExtractor={(item) => item.id}
                                horizontal
                            />
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;