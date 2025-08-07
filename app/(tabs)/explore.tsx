import { Link } from "expo-router";
import { SafeAreaView, Text } from "react-native";


export default function explore() {
    return <SafeAreaView>
            <Text style={{backgroundColor: 'red'}}> explore</Text>
            
                <Link href={'/accountinfo'}>

                <Text style={{backgroundColor: 'green'}}>
                    Click to see the account info
                </Text>

            </Link>
          
   

    </SafeAreaView>
}