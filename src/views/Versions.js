import React, { Component } from 'react';
import { Anchor, Box, Button, Heading, Paragraph } from 'grommet';
import { Github } from 'grommet-icons';

import Page from '../components/Page';
import img from '../utils/first_palette.jpeg';
import img2 from '../utils/palette2.jpeg';

class Versions extends Component {
    render() {
        return(
            <Page>
                <Box
                    direction='column'
                    gap='medium'
                >
                    <Paragraph alignSelf='center' color='dark-3' margin='none'>
                        Here you can read a log of the updates and versions that I have had
                        through my life, also see the code for my web page. <br/><br/>
                        All the code has MIT license so you are free to download it and use it
                        but don't forget to <Anchor color='neutral-5' target='_blank' href='https://opensource.org/licenses/MIT' label='read the license' />.
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
                            href='https://github.com/LuisBrime/farbenite-bot' 
                            icon={<Github color='neutral-5' />} 
                            label='Bot code' 
                            plain={true}
                            target='_blank'
                            reverse
                        />
                        <Button 
                            color='neutral-5' 
                            hoverIndicator='light-2' 
                            href='https://github.com/LuisBrime/farbenite-web' 
                            icon={<Github color='neutral-5' />} 
                            label='Web code' 
                            plain={true}
                            target='_blank'
                            reverse
                        />
                    </Box>
                </Box>

                {/* VERSION 0.1.2.1 */}
                <Box
                    direction='column'
                    gap='medium'
                >
                    <Heading level={4} color='brand'>Version 0.1.2.1</Heading>
                    <Paragraph color='dark-3' margin='none'>
                        <b>Stand by:</b><br/>
                        &nbsp; – Returned to first functionality; only tweeting once every 2 hours.<br />
                        &nbsp; – Only favorite mentions.<br />
                        Problems with headless Programming without having a terminal open, until fixed 
                        functionality will be limited to this and hopefully will work just fine.
                    </Paragraph>
                </Box>

                {/* VERSION 0.1.2 */}
                <Box
                    direction='column'
                    gap='medium'
                >
                    <Heading level={4} color='brand'>Version 0.1.2</Heading>
                    <Paragraph color='dark-3' margin='none'>
                        <b>Features:</b><br/>
                        &nbsp; – Bot now replies a new generated palette when mentioned.<br/>
                        Bug fixes.<br/>
                    </Paragraph>
                    <Box alignSelf='center' background={`url(${img2})`} fill='horizontal' pad='xlarge' />
                </Box>

                {/* VERSION 0.1.1 */}
                <Box
                    direction='column'
                    gap='medium'
                >
                    <Heading level={4} color='brand'>Version 0.1.1</Heading>
                    <Paragraph color='dark-3' margin='none'>
                        <b>Bug fixes:</b><br/>
                        &nbsp; – Correctly generates new image for each tweet.<br/>
                        &nbsp; – Bot favorites another user's mentions.<br/>
                    </Paragraph>
                </Box>

                {/* VERSION 0.1.0 */}
                <Box
                    direction='column'
                    gap='medium'
                >
                    <Heading level={4} color='brand'>Version 0.1.0</Heading>
                    <Paragraph color='dark-3' margin='none'>
                        First version of <b>farbenite</b>.<br/><br/>
                        <b>Features:</b><br/>
                        &nbsp; –  Tweets generated color palettes every 24 hrs.<br/>
                        &nbsp; –  Favorite another user's mentions.<br/><br/>
                        <b>Fixes after test:</b><br/>
                        &nbsp; – Color palettes' images display beautiful HEX code.<br/><br/>
                        This was my first tweeted color palette as a test!<br/>
                    </Paragraph>
                    <Box alignSelf='center' background={`url(${img})`} fill='horizontal' pad='xlarge' />
                </Box>
                
            </Page>
        );
    }
}

export default Versions;