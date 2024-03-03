import {View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Privacy = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.txtContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backArrow}>
          <MaterialIcons name="arrow-back-ios-new" style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.txtContainer}>
          <Text style={styles.txtHeading}>Privacy Policy</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.oneContainer}>
          <Text style={styles.txtQuestion}>What Is Privacy?</Text>
          <Text style={styles.txtPara}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like)
          </Text>
        </View>

        <View style={styles.spacing} />

        <View style={styles.oneContainer}>
          <Text style={styles.txtQuestion}>What Is Privacy?</Text>
          <Text style={styles.txtPara}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like)
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  txtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
  },

  txtHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    justifyContent: 'center',
  },

  oneContainer: {
    marginHorizontal: 16,
    marginTop: 20,
  },

  txtQuestion: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },

  txtPara: {
    fontSize: 16,
    color: '#898996',
    marginTop: 15,
    lineHeight: 25,
  },

  spacing: {
    marginBottom: 20,
  },

  backArrow: {
    marginRight: 0,
  },

  backIcon: {
    fontSize: 28,
    color: '#000',
  },
});
export default Privacy;
