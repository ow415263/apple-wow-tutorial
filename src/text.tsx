import React from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {TransitionSeries, springTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';

export const TextFade: React.FC<{
  text?: string;
  startAt?: number;        
  damping?: number;       
  bottomPadding?: number;  
  style?: React.CSSProperties;
}> = ({
  text = 'Hello world',
  startAt = 0,
  damping = 400,
  bottomPadding = 64, 
  style,
}) => {
  const {fps, durationInFrames} = useVideoConfig();

  const timing = springTiming({config: {damping}});
  const transitionDuration = timing.getDurationInFrames({fps});

  const leadFrames = Math.max(1, Math.floor(startAt) + transitionDuration);
  const afterFrames = Math.max(1, durationInFrames - leadFrames + transitionDuration);

  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={leadFrames}>
        <AbsoluteFill />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition timing={timing} presentation={fade()} />

      <TransitionSeries.Sequence durationInFrames={afterFrames}>
        <AbsoluteFill
          style={{
            justifyContent: 'flex-end', 
            alignItems: 'center',
            paddingBottom: bottomPadding,
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              fontSize: 120,
              fontWeight: 800,
              color: 'white',
              textShadow: '0 10px 40px rgba(0,0,0,0.5)',
              textAlign: 'center',
              ...style,
            }}
          >
            {text}
          </div>
        </AbsoluteFill>
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};