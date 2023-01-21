import React from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Calendar from './src/components/Calendar';
import { Header } from './src/components/Header';

const HomeScreen = () => {
    return (
        <ImageBackground
            source={require("./assets/images/background-green.png")}
            style={{ width: "100%", height: "100%", opacity: 0.5 }}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.screen}>
                    <Header />
                    {/* <Banner /> */}
                    <Calendar />
                </View>
                {/* <View style={{ marginHorizontal: '3%' }}>
          <Label>Your Activities</Label>
          <View style={{ flexDirection: 'row' }}>
            {data.map((item, index) => (
              <Card data={item} index={index} key={item.key} />
            ))}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Label>Fitness Video</Label>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                opacity: 0.5,
                fontSize: 12,
              }}>
              View All
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            {data.map((item, index) => (
              <VideoPlay index={index} key={item.key} />
            ))}
          </View>
        </View> */}
            </SafeAreaView>
        </ImageBackground>
    );
};

export default HomeScreen;


const styles = StyleSheet.create({

    container: { flex: 1 },
    screen: { margin: '3%' },
}
)