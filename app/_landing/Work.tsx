import { Section } from "./Section"
import { YouTubeEmbed } from '@next/third-parties/google'

export const Work = () => {
    return (
        <Section>
            <h2 className='text-3xl lg:text-4xl font-bold'>My Best Work </h2>
            <p className="text-lg text-muted-foreground mt-2 lg:mt-4">This video make thousand of view and grow the channel of my client</p>
            <div className="grid grid-cols-2 mt-4 lg:mt-6 gap-2 lg:gap-4">
                <div className="rounded-md overflow-hidden shadow-md">
                    <YouTubeEmbed videoid="4EPxQ0Paajs" />
                </div>
                <div className="rounded-md overflow-hidden shadow-md">
                    <YouTubeEmbed videoid="WL0sPFXuF9k" />
                </div>
                <div className="rounded-md overflow-hidden shadow-md">
                    <YouTubeEmbed videoid="JjsT-i-ZEBc" />
                </div>
                <div className="rounded-md overflow-hidden shadow-md">
                    <YouTubeEmbed videoid="_4TPM6clQjM" />
                </div>
        </div>
        </Section >
    )
}