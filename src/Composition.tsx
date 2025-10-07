import React from 'react';
import {Background} from './Background';
import {AbsoluteFill, Audio, staticFile, useCurrentFrame} from 'remotion';
import {Dots} from './Dots';
import {RedHearts} from './RedHearts';
import {YellowHearts} from './YellowHearts';
import {Stars} from './Stars';
import {Slowed} from './SlowedTrail';
import {Memoji} from './Animoji';
import {TextFade} from './text';
import {Overlay} from './Overlay'; // NEW

export type MyCompositionProps = {
    showDots: boolean;
    showRedHearts: boolean;
    showYellowHearts: boolean;
    showStars: boolean;
    showMemoji: boolean;
    showBackground: boolean;
    showSoundEffect: boolean;
    showText: boolean;
    showOverlayVideo: boolean; // still used to toggle the UI overlay
};

export const MyComposition: React.FC<MyCompositionProps> = ({
    showDots = true,
    showRedHearts = true,
    showYellowHearts = true,
    showStars = true,
    showMemoji = true,
    showBackground = true,
    showSoundEffect = true,
    showText = true,
    showOverlayVideo = false,
}) => {
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill>
            {showBackground && <Background />}
            <Slowed>
                {showDots && <Dots />}
                {showRedHearts && <RedHearts />}
                {showYellowHearts && <YellowHearts />}
                {showStars && <Stars />}
            </Slowed>
            {showMemoji && <Memoji />}

            {showText && <TextFade text="Hello World!" startAt={0} damping={200} />}

            {/* Overlay UI (no MP4 needed) */}
            {showOverlayVideo && <Overlay />}

            {showSoundEffect && (
                <Audio src={staticFile('soundeffect.mp3')} />
            )}
        </AbsoluteFill>
    );
};
