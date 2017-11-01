/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	Text,
	View,
	StyleSheet,
	PixelRatio,
	TouchableHighlight
} from 'react-native';

import { ViroSceneNavigator, ViroARSceneNavigator } from 'react-viro';

/*
 TODO: Insert your API key below
 */
var sharedProps = {
	apiKey: '2E6F2EF2-6DC1-4766-9580-703C83C85F5A'
};

// Sets the default scene you want for AR and VR
// var InitialARScene = require('./js/HelloWorldSceneAR');
var InitialVRScene = require('./js/HelloWorldScene');


// const InitialARScene = require('./js/object3d/ObjectScene.js');
const InitialARScene = require('./js/portal/PortalScene.js');

var UNSET = 'UNSET';
var VR_NAVIGATOR_TYPE = 'VR';
var AR_NAVIGATOR_TYPE = 'AR';

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export default class ViroSample extends Component {
	constructor() {
		super();

		this.state = {
			navigatorType: defaultNavigatorType,
			sharedProps: sharedProps
		};
		this._getExperienceSelector = this._getExperienceSelector.bind(this);
		this._getARNavigator = this._getARNavigator.bind(this);
		this._getVRNavigator = this._getVRNavigator.bind(this);
		this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(
			this
		);
	}

	// Replace this function with the contents of _getVRNavigator() or _getARNavigator()
	// if you are building a specific type of experience.
	render() {
		if (this.state.navigatorType == UNSET) {
			return this._getExperienceSelector();
		} else if (this.state.navigatorType == VR_NAVIGATOR_TYPE) {
			return this._getVRNavigator();
		} else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
			return this._getARNavigator();
		}
	}

	// Presents the user with a choice of an AR or VR experience
	_getExperienceSelector() {
		return (
			<View style={localStyles.outer}>
				<View style={localStyles.inner}>
					<Text style={localStyles.titleText}>
						Choose your desired experience:
					</Text>

					<TouchableHighlight
						style={localStyles.buttons}
						onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
						underlayColor={'#68a0ff'}
					>
						<Text style={localStyles.buttonText}>AR</Text>
					</TouchableHighlight>

					<TouchableHighlight
						style={localStyles.buttons}
						onPress={this._getExperienceButtonOnPress(VR_NAVIGATOR_TYPE)}
						underlayColor={'#68a0ff'}
					>
						<Text style={localStyles.buttonText}>VR</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}

	// Returns the ViroARSceneNavigator which will start the AR experience
	_getARNavigator() {
		return (
			<ViroARSceneNavigator
				{...this.state.sharedProps}
				initialScene={{ scene: InitialARScene }}
			/>
		);
	}

	// Returns the ViroSceneNavigator which will start the VR experience
	_getVRNavigator() {
		return (
			<ViroSceneNavigator
				{...this.state.sharedProps}
				initialScene={{ scene: InitialVRScene }}
			/>
		);
	}

	// This function returns an anonymous/lambda function to be used
	// by the experience selector buttons
	_getExperienceButtonOnPress(navigatorType) {
		return () => {
			this.setState({
				navigatorType: navigatorType
			});
		};
	}
}

var localStyles = StyleSheet.create({
	outer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'black'
	},
	inner: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: 'black'
	},
	titleText: {
		paddingTop: 30,
		paddingBottom: 20,
		color: '#fff',
		textAlign: 'center',
		fontSize: 25
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 20
	},
	buttons: {
		height: 80,
		width: 150,
		paddingTop: 20,
		paddingBottom: 20,
		marginTop: 10,
		marginBottom: 10,
		backgroundColor: '#68a0cf',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#fff'
	}
});

AppRegistry.registerComponent('RNViroARSnapchat', () => ViroSample);

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent('ViroSample', () => ViroSample);
