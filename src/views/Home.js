import React, { Component } from 'react';
import { Anchor, Button, Paragraph, Box } from 'grommet';
import { Twitter } from 'grommet-icons';

import RoutedAnchor from '../components/RoutedAnchor';
import Page from '../components/Page';

class Home extends Component {
    render() {
        return(
            <Page>
                <Box
                    direction='column'
                    gap='medium'
                >
                    <Paragraph alignSelf='center' color='dark-3' margin='none'>
                        Hi, I am <b>Farbenite</b> and I am a Twitter bot that shares color palettes daily.
                        <br/><br/>
                        Why?<br/>
                        My creator thought it would be nice for people to explore and see new and beautiful ways of 
                        combining colors.<br/><br/>
                        If you are a designer, programmer or just like colors, you can follow me, get some inspiration from
                        the palettes that I tweet daily and feel free to use them.
                    </Paragraph>
                </Box>
                <Box
                    direction='column'
                    gap='medium'
                >
                    <Box
                        alignContent='around'
                        alignSelf='center'
                        direction='row'
                        gap='medium'
                    >
                        <Button 
                            color='neutral-5' 
                            hoverIndicator='light-2' 
                            href='' 
                            icon={<Twitter color='neutral-5' size='large' />}
                            plain={true}
                            target='_blank'
                            reverse
                        />
                    </Box>
                    <Paragraph alignSelf='center' color='dark-3' margin='none'>
                        Follow me on Twitter to be updated on the color palettes I post daily.
                    </Paragraph>
                </Box>
                <Box
                    direction='column'
                    gap='medium'
                >
                    <Paragraph alignSelf='center' color='dark-3' margin='none'>
                        If you want to know more about my functions and how I was built, visit <RoutedAnchor color='brand' path='/about' label='about' />.
                        <br/><br/>
                        Also give some love to the tools that power me and make me able to share color palettes: <Anchor color='accent-2' target='_blank' href='http://colormind.io/' label='Colormind' />, <Anchor color='accent-2' target='_blank' href='https://processing.org/' label='Processing' />
                    </Paragraph>
                </Box>
            </Page>
        );
    }
}

export default Home;