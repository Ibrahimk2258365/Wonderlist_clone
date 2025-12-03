import React, { useState } from "react";

import { TextInput, Text, View, Button , StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles} >
      {/* card one  that contain profile picture email id and name  */}
        <View style={styles} >
        <Text >Ibrahim Khan</Text>
        <Text style={styles}>ik2258365@gmail.com</Text>
      </View>
      {/* that card contain email id phone number and button  is of  */}
        <View style={styles} >
        <Text style={styles}>Email</Text>
        <TextInput placeholder="Enter your Email" />
        <Text style={styles}>Phone Number</Text>
        <TextInput placeholder="Enter your phone number" />

        <Button title="Edit Profile" />

      </View>
    </View>
  );
};

const styles =StyleSheet.create({

})



export default ProfileScreen;
