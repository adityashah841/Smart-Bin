export default BottomTab = () => (
    <View
        style={{
            position: 'absolute',
            bottom: 10,
            margin: 10,
            marginHorizontal: 25,
            borderRadius: 20,
            padding: 10,
            // width: '100%',
            backgroundColor: '#EDEDED',
            flexDirection: 'row',
            alignItems: 'center',
        }}>
        <BottomButton image={home} />
        <BottomButton image={heart} />
        <BottomButton
            image={plus}
            style={{
                position: 'absolute',
                left: '43%',
                top: -25,
                backgroundColor: '#fff',
                padding: 8,
                borderRadius: 20,
            }}
        />
        <BottomButton />
        <BottomButton image={calendar} />
        <BottomButton image={profile} />
    </View>
);