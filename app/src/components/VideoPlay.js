export default VideoPlay = () => (
    <View
        style={{
            borderRadius: 15,
            marginHorizontal: 12,
            shadowOffset: { width: -5, height: 3 },
            shadowColor: 'grey',
            shadowOpacity: 0.5,
            shadowRadius: 3,
            backgroundColor: '#fff',
        }}>
        <View style={{ borderRadius: 10, overflow: 'hidden' }}>
            <ImageBackground
                source={couple}
                style={{
                    height: 150,
                    width: 300,
                }}>
                <LinearGradient
                    locations={[0, 1.0]}
                    colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.60)']}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                    }}></LinearGradient>
            </ImageBackground>
            <Text
                style={{
                    position: 'absolute',
                    bottom: 5,
                    left: 10,
                    fontFamily: 'Poppins-Regular',
                    color: '#fff',
                }}>
                Transformation
            </Text>
            <View
                style={{
                    position: 'absolute',
                    backgroundColor: '#fff',
                    padding: 5,
                    right: 10,
                    top: 10,
                    borderRadius: 5,
                }}>
                <Image source={star} style={{ height: 10, width: 10 }} />
            </View>
        </View>
        <View
            style={{
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 15,
            }}>
            <View
                style={{
                    position: 'absolute',
                    backgroundColor: '#8860a2',
                    padding: 10,
                    right: 25,
                    top: -15,
                    borderRadius: 15,
                    zIndex: 3,
                }}>
                <Image source={play} style={{ height: 10, width: 10 }} />
            </View>
            <Text style={{ fontFamily: 'Poppins-Regular' }}>
                2 Hour Bulking Trainer
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12 }}>
                    <Image source={book} style={{ height: 15, width: 15 }} />
                    {'   Beginner'}
                </Text>
                <Text
                    style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: 12,
                        color: '#8860a2',
                    }}>
                    45 Min
                </Text>
            </View>
        </View>
    </View>
);