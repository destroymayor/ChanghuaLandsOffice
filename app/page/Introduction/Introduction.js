/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//本所簡介
import React, { Component } from "react";
import { StyleSheet, Platform, Image, Linking, ScrollView, Text, View } from "react-native";

import Btn from "../../utils/Button";
import screen from "../../Style/screen";

export default class Introduction extends Component {
  _NavigationBtn(page) {
    const { navigate } = this.props.navigation;
    navigate(page);
  }

  _NavigationBtnWeb(page, PageName, PageUrl) {
    const { navigate } = this.props.navigation;
    if (Platform.OS === "android") {
      navigate(page, {
        PageName: PageName,
        PageUrl: PageUrl
      });
    } else {
      Linking.openURL(PageUrl);
    }
  }

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/introduction.png")}>
        <ScrollView>
          <Btn
            ImageSource={require("../../image/btn/Introduction/i1.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(this, "QurArea")}
          />
          <Btn
            ImageSource={require("../../image/btn/Introduction/i2.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(this, "latestNews")}
          />
          <Btn
            ImageSource={require("../../image/btn/Introduction/i3.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtnWeb.bind(
              this,
              "WebPage",
              "聯絡我們",
              "http://www.xh-land.gov.tw/chaspx/guestbook.aspx?web=104"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/Introduction/i4.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(this, "LocationTraffic")}
          />
          <Btn
            ImageSource={require("../../image/btn/Introduction/i5.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(this, "OfficeHours")}
          />
          <Btn
            ImageSource={require("../../image/btn/Introduction/i6.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(this, "EachClassBusiness")}
          />
          <Btn
            ImageSource={require("../../image/btn/Introduction/i7.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(this, "FloorPresentation")}
          />
          <Btn
            ImageSource={require("../../image/btn/Introduction/i8.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(this, "FBandYoutube")}
          />
        </ScrollView>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: screen.width,
    height: screen.height
  }
});
