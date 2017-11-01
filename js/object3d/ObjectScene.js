import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
	ViroSceneNavigator,
	ViroARScene,
	ViroMaterials,
	ViroAmbientLight,
	ViroSpotLight,
	ViroDirectionalLight,
	ViroAnimations,
	ViroParticleEmitter,
	ViroSurface,
	Viro3DObject,
	ViroNode
} from 'react-viro';

// import FireworkEmitter from './Fireworks';
// import SnowEmitter from './SnowEmitter';

var ObjectScene = React.createClass({
	getInitialState() {
		return {
			runAnimation: true
		};
	},

	render: function() {
		return (
			<ViroARScene>
				{/* <ViroARScene postProcessEffects={['pincushiondistortion']}> */}
				<ViroAmbientLight color="#ffffff" intensity={200} />
				<ViroNode
					position={[0, -1, -2]}
					dragType="FixedToWorld"
					onDrag={() => {}}
				>
					<ViroSpotLight
						innerAngle={5}
						outerAngle={25}
						direction={[0, -1, 0]}
						position={[0, 5, 0]}
						color="#ffffff"
						castsShadow={true}
						shadowMapSize={2048}
						shadowNearZ={2}
						shadowFarZ={7}
						shadowOpacity={0.7}
					/>

					<Viro3DObject
						source={require('../res/pumpkinman_anim/pumpkinman_anim.vrx')}
						resources={[
							require('../res/pumpkinman_anim/pumpkinman_body_diffuse.png'),
							require('../res/pumpkinman_anim/pumpkinman_head_diffuse.png'),
							require('../res/pumpkinman_anim/pumpkinman_body_normal.png'),
							require('../res/pumpkinman_anim/pumpkinman_head_normal.png'),
							require('../res/pumpkinman_anim/pumpkinman_body_specular.png'),
							require('../res/pumpkinman_anim/pumpkinman_head_specular.png')
						]}
						position={[0, 0, 0]}
						scale={[0.5, 0.5, 0.5]}
						type="VRX"
						onClick={this._onTappedIcecream}
						animation={{ name: '02', run: this.state.runAnimation, loop: true }}
					/>

					<ViroSurface
						rotation={[-90, 0, 0]}
						position={[0, -0.001, 0]}
						width={2.5}
						height={2.5}
						arShadowReceiver={true}
					/>
				</ViroNode>
				{/* <SnowEmitter
        run={true}
        emissionArea={[20, 20]}
        emissionHeight={4.5}
        snowRate={1.0}
        fallSpeed={1.0}
        windShear={1.0} /> */}
				{/* <FireworkEmitter
					loop={true}
					run={true}
					explosionLocation={[0, 5, -8]}
					explosionSize={6.0}
					explosionDelay={1000}
					startColor={'#ff2d2d'}
					endColor={'#42ff42'}
				/> */}
			</ViroARScene>
		);
	},

	_onTappedIcecream() {
		this.setState({
			runAnimation: !this.state.runAnimation
		});
	}
});

module.exports = ObjectScene;
