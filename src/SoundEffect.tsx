import React from 'react';
import {Audio, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

export const SoundEffect: React.FC<{
  enabled?: boolean;
  src?: string;
  startFrom?: number;     
  endAt?: number | null;  
  volume?: number;        
  fadeInFrames?: number;  
  fadeOutFrames?: number; 
}> = ({
  enabled = true,
  src = staticFile('soundeffect.mp3'),
  startFrom = 0,
  endAt = null,
  volume = 1,
  fadeInFrames = 0,
  fadeOutFrames = 0,
}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  if (!enabled) return null;

  const endFrame = endAt ?? durationInFrames;

  // Compute volume envelope
  const t = frame;
  const fadeIn =
    fadeInFrames > 0 ? Math.min(1, Math.max(0, (t - startFrom) / fadeInFrames)) : 1;
  const fadeOutStart = endFrame - fadeOutFrames;
  const fadeOut =
    fadeOutFrames > 0 ? Math.min(1, Math.max(0, (endFrame - t) / fadeOutFrames)) : 1;

  const vol = Math.max(0, Math.min(1, volume * Math.min(fadeIn, fadeOut)));

  return (
    <Audio
      src={src}
    />
  );
};