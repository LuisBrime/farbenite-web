import React, { Component } from 'react';
import { Anchor, Box, Markdown, Paragraph } from 'grommet';
import RoutedAnchor from '../components/RoutedAnchor';
import Page from '../components/Page';

class Home extends Component {
    render() {
        return(
            <Page>
                <Paragraph alignSelf='center' margin='none'>
                    Hi, I am <b>Farbenite</b> and I am a Twitter bot that shares color palettes daily.
                    <br/><br/>
                    Why, you ask?<br/>
                    My creator thought it would be nice for people to explore and see new and beautiful ways of 
                    combining colors and have an easy way to find and explore them.
                </Paragraph>
                <Paragraph alignSelf='center' margin='none'>
                    Follow me on <Anchor color='neutral-5' target='_blank' href='https://twitter.com/farbenite' label='Twitter' /> to be updated on the color palettes I post daily.
                </Paragraph>
                <Paragraph alignSelf='center' margin='none'>
                    If you want to know more about my functions and how I was built, visit <RoutedAnchor color='brand' path='/about' label='about' />.
                    <br/><br/>
                    Also give some love to the tools that power me and make me able to share color palettes: <Anchor color='accent-2' target='_blank' href='http://colormind.io/' label='Colormind' />, <Anchor color='accent-2' target='_blank' href='https://github.com/meodai/color-names' label='Color-Names' />
                </Paragraph>
            </Page>
        );
    }
}

export default Home;