import {AbsoluteFill} from 'remotion';
import React from 'react';

export const Background: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				background: 'linear-gradient(to bottom, #ccff00ff, #9c9c9cff)',
			}}
		/>
	);
};
