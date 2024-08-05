import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { basicFeatures } from '@/constants/features'

const Home = () => {
  return (
    <SafeAreaView className='flex-1' style={{backgroundColor:'#f1f1f1'}}>
        <View>
            <Text>Welcome name</Text>
        </View>
        <View className='items-center w-full justify-center space-y-3 flex-1'>
            {basicFeatures.map(feature => ( 
            <Pressable className='bg-slate-400 w-[80%] py-2 rounded-lg' key={feature.id}>
                <Text className='text-lg text-center'>{feature.name}</Text>
            </Pressable>
            ))}
        </View>
    </SafeAreaView>
  )
}

export default Home