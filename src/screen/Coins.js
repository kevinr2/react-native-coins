import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TextInput, StatusBar } from 'react-native'
import { GetCoins } from '../API/coinsAPi'
import styled from 'styled-components/native'
import CoinItem from '../components/CoinItem'


export default function Coins() {

    const [Coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
    const [refreshing, setRefreshing] = useState(false)
    useEffect(() => {
        (async () => {
            const response = await GetCoins();
            setCoins(response)
        })()
    }, [])
    const CoinFilter = Coins.filter((coin) => {
        return coin.name.toLowerCase().includes(search.toLowerCase())
            || coin.symbol.toLowerCase().includes(search.toLowerCase())
    })
    return (

        <Container >
            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <StatusBar backgroundColor="#141414" />
                <Text style={{ color: 'white', marginTop: 10 }}> Crytomarket</Text>
                <TextInput onChangeText={text => setSearch(text)} placeholder='Search Icons' placeholderTextColor="#858585" style={{ color: 'white', borderBottomColor: '#4657CE', borderBottomWidth: 1, width: '40%', textAlign: 'center' }} />
            </View>

            <FlatList
                style={{ width: '90%' }}
                data={CoinFilter}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <CoinItem
                        name={item.name}
                        id={item.id}
                        image={item.image}
                        symbol={item.symbol}
                        price={item.current_price}
                        priceChange={item.market_cap_change_percentage_24h}
                    />

                }}
                refreshing={refreshing}
                onRefresh={async () => {
                    setRefreshing(true)
                    await GetCoins()
                    setRefreshing(false)
                }}
            />
        </Container>
    )
}

const Container = styled(View)`
background-color:#141414;
align-items: center;
padding-bottom:10px;
height: 100%;
`