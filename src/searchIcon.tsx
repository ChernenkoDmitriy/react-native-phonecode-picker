import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
    width?: number;
    height?: number;
};

export const SearchIcon: FC<Props> = ({ width, height }) => (
    <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
        <Path d="M16.5 13.864h-.79l-.28-.267A6.345 6.345 0 0 0 17 9.42C17 5.874 14.09 3 10.5 3S4 5.874 4 9.42c0 3.545 2.91 6.42 6.5 6.42 1.61 0 3.09-.583 4.23-1.551l.27.276v.78l5 4.93 1.49-1.472-4.99-4.939zm-6 0C8.01 13.864 6 11.88 6 9.42c0-2.46 2.01-4.445 4.5-4.445S15 6.96 15 9.42c0 2.459-2.01 4.444-4.5 4.444z" fill="#5A6772" />
    </Svg>
);
