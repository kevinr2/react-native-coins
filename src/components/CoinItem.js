import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function CoinItem({ name, image, price, symbol, priceChange }) {


    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
            <View style={{ flexDirection: 'row' }}>
                <Image style={{ width: 30, height: 30 }} source={{ uri: `${image}` }} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: '#fff' }}>{name}</Text>
                    <Text style={{ color: '#434343', textTransform: 'uppercase' }}>{symbol}</Text>
                </View>
            </View>
            <View>
                <Text style={{ color: 'white', textAlign: 'right' }}>$ {price}</Text>
                <Text style={[Style.priceChange, priceChange > 0 ? Style.priceDown : Style.priceUp]}>{priceChange}</Text>
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    priceChange: {
        textAlign: 'right'
    },
    priceUp: {
        color: 'red'
    }
    , priceDown: {
        color: 'green'
    }
})