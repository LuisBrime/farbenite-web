import React, { Component } from 'react';
import { Anchor, Box, Button, Heading, Paragraph } from 'grommet';
import { Github } from 'grommet-icons';

import Page from '../components/Page';

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
                <Box
                    direction='column'
                    gap='medium'
                >
                    <Heading level={4} color='brand'>Version 0.1.1</Heading>
                </Box>
                <Box
                    direction='column'
                    gap='medium'
                >
                    <Heading level={4} color='brand'>Version 0.1.0</Heading>
                </Box>
            </Page>
        );
    }
}

export default Versions;