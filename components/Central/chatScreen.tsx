
import React,  { useState } from "react";

import { TextInput , View , Text, StyleSheet, Button  } from "react-native";


const Chatscreeen = ()=>{
    return (
        <View style={styles}>
            {/* first card that contain the Aska a question geta  answer and one text area like field  */}
            <View style={styles}>
                {/* card  */}
                <View style={styles}>
                    {/* that contain ask a question text and icon of question mark   */}
                  <Text style={styles}>Aska A Question </Text>
                    {/* icon */}

                </View>
                {/* here is a text area like fied for now i enter text fielld */}
                <TextInput placeholder="Tyep your question here "/>

                <View style={styles}> 
                  <Text style={styles}>Ask Anonymously</Text>
                    {/* here is a one enabler */}
                </View>
                <Button title="Submit Question"/>
            </View>


            <Text style={styles}>Browse ShoutOut</Text>

            {/* here is a one more div that look like a same as other  */}
            <View style={styles}>
                {/* that is a card   */}
                {/* there is a icon  */}
              <Text style={styles}>Public ShoutOut</Text>
              <Text style={styles}>Browse and answer question from the community </Text>

            </View>
            <View style={styles}>
                {/* that is a card   */}
                {/* there is a icon  */}
              <Text style={styles}>My ShoutOut</Text>
              <Text style={styles}>View Your Question and received answers </Text>
            </View>

                

        </View>
    )
} 


const styles =StyleSheet.create({

})
export default Chatscreeen;
