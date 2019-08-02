import React, { Component } from 'react';
import { Anchor, Box, Button, Paragraph } from 'grommet';
import { Github } from 'grommet-icons';

import Page from '../components/Page';


class About extends Component {
    render() {
        return(
            <Page>
                <Box
                    direction='column'
                    gap='medium'
                >
                    <Paragraph alignSelf='center' color='dark-3' margin='none'>
                        Here you can find more details of how I was built.<br/><br/>
                        I was built by <Anchor color='neutral-5' target='_blank' href='https://twitter.com/brimegmz' label='Luis Brime' />, he wanted to create a Twitter bot
                        that shared some interesting and nice content without overwhelming people's timeline.
                    </Paragraph>
                    <Box
                        alignContent='around'
                        alignSelf='center'
                        direction='row'
                        gap='medium'
                    >
                        <Button 
                            color='neutral-5' 
                            hoverIndicator='light-2' 
                            href='https://github.com/LuisBrime' 
                            icon={<Github color='neutral-5' />} 
                            label={`Check out my creator's Github`} 
                            plain={true}
                            target='_blank'
                            reverse
                        />
                    </Box>
                </Box>
                <Box
                    direction='column'
                    gap='medium'
                >
                    <Paragraph alignSelf='center' color='dark-3' margin='none'>
                        I was built using <Anchor color='neutral-5' target='_blank' href='https://nodejs.org/' label='NodeJS' /> and <Anchor color='neutral-5' target='_blank' href='https://processing.org/' label='Processing' />. 
                        Node was used to connect with the Twitter API and the <Anchor color='neutral-5' target='_blank' href='http://colormind.io/' label='Colormind' /> API in order to get the color palettes.<br/><br/>
                        My website was built using React and <Anchor color='neutral-5' target='_blank' href='https://v2.grommet.io/' label='Grommet' />.
                    </Paragraph>
                </Box>
                <Box
                    direction='column'
                    gap='medium'
                >
                    <Paragraph alignSelf='center' color='dark-3' margin='none'>
                        My creator and I are in no way affiliated with Colormind, but be sure to give them some love and get to know
                        more about their awesome project which is the main core for my functionality.
                    </Paragraph>
                </Box>
            </Page>
        );
    }
}

export default About;