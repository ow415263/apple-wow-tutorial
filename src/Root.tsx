import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {z} from 'zod';

// Define the editable props schema
const myCompositionSchema = z.object({
    showDots: z.boolean().default(true),
    showRedHearts: z.boolean().default(true),
    showYellowHearts: z.boolean().default(true),
    showStars: z.boolean().default(true),
    showMemoji: z.boolean().default(true),
    showBackground: z.boolean().default(true),
    showSoundEffect: z.boolean().default(true),
    showText: z.boolean().default(true), // NEW
});

export const RemotionRoot: React.FC = () => {
    return (
        <>
            <Composition
                id="MyComp"
                component={MyComposition}
                durationInFrames={130}
                fps={30}
                width={1920}
                height={1080}
                schema={myCompositionSchema}
                defaultProps={{
                    showDots: true,
                    showRedHearts: true,
                    showYellowHearts: true,
                    showStars: true,
                    showMemoji: true,
                    showBackground: true,
                    showSoundEffect: true,
                    showText: true,
                    showOverlayVideo: true,
                }}
            />
        </>
    );
};
