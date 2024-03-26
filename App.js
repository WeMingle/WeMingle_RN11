import { Provider } from 'react-redux';
import RootScreen from './screen/RootScreen';
import { Store } from './redux/Store';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Pretendard-Medium': require('./assets/fonts/Pretendard-Medium.ttf'),
    'Pretendard-Regular': require('./assets/fonts/Pretendard-Regular.ttf'),
    'Pretendard-SemiBold': require('./assets/fonts/Pretendard-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider store={Store}>
      <RootScreen onLayout={onLayoutRootView} />
    </Provider>
  );
}
