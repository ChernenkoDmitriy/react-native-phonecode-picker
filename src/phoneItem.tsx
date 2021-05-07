import React, { FC } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Country } from './api/countries/ICountries';

interface Props {
	country: Country;
	flag: any;
	testID: string;
	onPress: (country: { countryName: string; phcode: string; key: string; mask: string; }) => void;
	itemContainerStyle?: object;
	textStyle?: object;
};

export const PhoneItem: FC<Props> = ({ country: { countryName, phcode, key, mask }, flag, testID, onPress, itemContainerStyle, textStyle }) => {
	return (
		<TouchableOpacity onPress={() => { onPress({ countryName, phcode, key, mask }) }} accessibilityLabel={testID} testID={testID}>
			<View style={[styles.countryContainer, itemContainerStyle]}>
				<View style={styles.flagAndName}>
					<View style={styles.imagewrapper}>
						{flag
							? <Image source={flag} resizeMode="stretch" style={{ width: 30, height: 30 }} />
							: <Image source={require('./resources/png_flags/_unknown.png')} resizeMode="stretch" style={{ width: 30, height: 30 }} />}
					</View>
					<Text style={[styles.text, textStyle, { flex: 1 }]} numberOfLines={1}>{countryName}</Text>
				</View>
				<Text style={[styles.text, textStyle]} >+{phcode}</Text>
			</View>
		</TouchableOpacity >
	);
};

const styles = StyleSheet.create({
	countryContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		height: 50,
		alignItems: 'center',
	},
	flagAndName: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
		marginRight: 5,
		marginLeft: 5,
	},
	text: {
		fontSize: 14,
		lineHeight: 18,
		color: '#000',
		marginRight: 15,
		marginLeft: 5,
	},
	imagewrapper: {
		height: 30,
		width: 30,
		marginRight: 5,
		marginLeft: 10,
		shadowOpacity: 0.25,
		shadowRadius: 3,
		elevation: 2,
		shadowColor: '#000',
		shadowOffset: { height: 0, width: 0 },
	},
});