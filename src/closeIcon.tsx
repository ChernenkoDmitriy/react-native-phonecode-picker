import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

export const CloseIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg width={width || 16} height={height || 16} viewBox="0 0 16 16" fill="none">
            <Path fillRule="evenodd" clipRule="evenodd" d="M11.2591 3.75125C11.5294 4.02162 11.5386 4.45083 11.2795 4.70993L4.71153 11.2779C4.45243 11.537 4.02322 11.5278 3.75286 11.2575C3.4825 10.9871 3.47336 10.5579 3.73246 10.2988L10.3004 3.73086C10.5595 3.47176 10.9887 3.48089 11.2591 3.75125Z" fill={color || "#97ADB6"} />
            <Path fillRule="evenodd" clipRule="evenodd" d="M3.75265 3.75125C4.02302 3.48089 4.45223 3.47176 4.71133 3.73086L11.2793 10.2988C11.5384 10.5579 11.5292 10.9871 11.2589 11.2575C10.9885 11.5278 10.5593 11.537 10.3002 11.2779L3.73225 4.70993C3.47316 4.45083 3.48229 4.02162 3.75265 3.75125Z" fill={color || "#97ADB6"} />
        </Svg>
    )
};
