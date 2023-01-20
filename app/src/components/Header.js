export default Header = () => (
    <View style={styles.header}>
        <ImageContainer image={headerImage} />
        <HeaderTitle />
        <ImageContainer image={notification} height={'50%'} width={'50%'} />
    </View>
);