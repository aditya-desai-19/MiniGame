import {View, Text, StyleSheet, Pressable} from 'react-native';

const PrimaryButton = ({children}) => {

    const Pressed = () => {
        console.log("Pressed");
    };

    return(
        <View style={styles.buttonOuterContainer}>
            {/* android_ripple: it provides a animation when button is clicked */}
            <Pressable style={(pressed) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
            onPress={Pressed} 
            android_ripple={{color:"#FFABAB"}}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden"
    },
    buttonInnerContainer: {
        backgroundColor: "#D14D72",
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2
    },
    buttonText: {
        color: "white"
    },
    pressed: {
        opacity: 0.75
    }
});
export default PrimaryButton;