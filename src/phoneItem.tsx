import React, { FC, useCallback, memo } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Country } from './api/countries/ICountries';

interface Props {
	country: Country;
	flag: any;
	onPress: (country: Country) => void;
	itemContainerStyle?: object;
	textStyle?: object;
};

export const PhoneItem: FC<Props> = memo(({ country, flag, onPress, itemContainerStyle, textStyle }) => {

	const onPressCountry = useCallback(() => {
		onPress(country);
	}, []);

	return (
		<TouchableOpacity onPress={onPressCountry} accessibilityLabel={country?.countryName + 'PhoneID'} testID={country?.countryName + 'PhoneID'}>
			<View style={[styles.countryContainer, itemContainerStyle]}>
				<View style={styles.flagAndName}>
					<View style={styles.imagewrapper}>
						{flag
							? <Image source={flag} resizeMode='stretch' style={styles.flag} />
							: <Image source={require('./resources/png_flags/_unknown.png')} resizeMode="stretch" style={styles.flag} />}
					</View>
					<Text style={[styles.text, textStyle]} >+{country?.phcode}</Text>
					<Text style={[styles.text, textStyle, { flex: 1 }]} numberOfLines={1}>{country?.countryName}</Text>
				</View>
			</View>
		</TouchableOpacity >
	);
});

const styles = StyleSheet.create({
	countryContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		height: 60,
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
		fontSize: 16,
		lineHeight: 20,
		color: '#000',
		marginLeft: 18,
	},
	imagewrapper: {
		overflow: 'hidden',
		borderRadius: 4,
		height: 20,
		width: 34,
		marginRight: 5,
		marginLeft: 10,
	},
	flag: {
		left: -1,
		top: -6,
		width: 36,
		height: 32,
	}
});

