import React from 'react'
import {TouchableOpacity, Text, Image} from 'react-native'
import styles from "./screen-header-btn.style";

const ScreenHeaderBtn = ({icon, text, handlePress}) => {
    return (
        <TouchableOpacity onPress={handlePress} style={styles.btnContainer}>
            <Image source={icon} resizeMode="cover" style={styles.btnIcon}/>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

export default ScreenHeaderBtn