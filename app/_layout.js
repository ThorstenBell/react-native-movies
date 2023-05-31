import {Stack} from "expo-router";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
const Layout = () => {

    return <Stack onLayout={onLayoutRootView()} />
}

export default Layout;