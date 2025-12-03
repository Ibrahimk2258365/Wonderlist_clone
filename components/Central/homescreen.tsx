import React, { useState } from "react";

import { TextInput, View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles}>
      {/* here is a one card that contain the button and two text  */}

     <View style={styles}>
        <Text style={styles}>
          Explore the <Text style={styles}>Beautiful world!</Text>
        </Text>
        <Button title="create new button " />
      </View>
      {/* then there is a butotns that a pair  */}
     <View style={styles}>
        <Button title="My bucket" />
        <Button title="Public Bucket" />
      </View>

      {/* here is a three clickable rounded View i think that contain the icon and text   */}
     <View style={styles}>
       <View style={styles}>
          {/* icon */}
          <Text style={styles}>All</Text>
        </View>
       <View style={styles}>
          {/* icon */}
          <Text style={styles}>Visited</Text>
        </View>
       <View style={styles}>
          {/* icon */}
          <Text style={styles}>Pending</Text>
        </View>
      </View>

      {/* then there is a map card but for now i created it simple custom  and that contain the icon country name and para tect i think */}

     <View style={styles}>
       <View style={styles}>{/* that div contain the icon and  */}</View>
       <View style={styles}>
          <Text style={styles}>Spain</Text>
          <Text style={styles}>Camp Nou, Barcelona</Text>
        </View>

        {/* here  View is rounded and clickable and is button  */}
       <View style={styles}>
          {/* that contain  one dot like icon but  little larger then the dot */}

          <Text style={styles}>Pending</Text>
        </View>
        {/* here si also rounded another clickable button that is rounded and clickabel */}
       <View style={styles}>
          {/* and also contain one icon */}

          <Text style={styles}>View On Map</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
