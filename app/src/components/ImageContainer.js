export default ImageContainer = ({ image, height = '100%', width = '100%' }) => (
    <TouchableOpacity style={styles.imageContainer} onPress={() => console.log("notif pressed")}>
        <Image source={image} style={[{ height, width }]} />
    </TouchableOpacity>
);