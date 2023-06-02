import React from 'react'
import {Text, TouchableOpacity, Image} from 'react-native'
import styles from "./film-card.style"

const FilmCard = ({item}) => {
    return (
        <TouchableOpacity style={styles.cardWrapper}>
            <Image
                source={{uri: item?.primaryImage?.url ?? ""}}
                resizeMode="cover"
                style={styles.cardImage}
            ></Image>
            <Text
                style={styles.cardText}
            >{item.titleText.text}</Text>
        </TouchableOpacity>
    )
}

export default FilmCard