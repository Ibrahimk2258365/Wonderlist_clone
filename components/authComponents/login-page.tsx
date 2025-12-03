import React,{ useState } from "react";
import { TextInput , Text , View, Button , StyleSheet} from "react-native";

 const Login =()=>{
    return (
        <View style={styles}> 
            that is a login component 
            <Text style={styles}>Login</Text>
            <Text style={styles}>Welcome back to WonderList</Text>
            <Text style={styles}>Email</Text>
            <TextInput style={styles} placeholder="Enter your Email"/>


            <Text style={styles}>Password</Text>
            <TextInput style={styles}  placeholder="enter your password "/>


           <View>
             <View style={styles}>
                {/* <RadioButton/> radio button  */}
                <Text style={styles}>Remember me </Text>
                
            </View>
            <View style={styles}>
              <Text style={styles}>  forgot password?</Text>

            </View>
           </View>

           <Button  title="Login"/>

           <Text>---------OR----------</Text>

            <Button  title="Join with Google "/>

            <Text style={styles} >Dont have an account ? <Text>Signup</Text></Text>

           

        </View>
    )
}

const styles =StyleSheet.create({

})

export default Login;
