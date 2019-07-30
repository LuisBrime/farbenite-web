import React, { Component } from 'react';
import { Box, Grid, ResponsiveContext } from 'grommet';

import Header from './Header';
import Footer from './Footer';

import bg from '../utils/bg.png';

class Main extends Component {
    render() {
        return(
            <ResponsiveContext.Consumer>
                {responsive => (
                    <Grid
                        fill
                        columns={responsive !== 'small'
                        ? ['medium', 'flex', 'medium']
                        : ['flex']}
                        rows={responsive !== 'small'
                        ? ['xxsmall', 'xsmall', 'flex', 'xsmall']
                        : ['xsmall', 'flex', 'xsmall']}
                        areas={responsive !== 'small'
                        ? [{ name: 'main', start: [1, 1], end: [1, 2] },
                           { name: 'header', start: [0, 0], end: [2, 1] },
                           { name: 'footer', start: [1, 3], end: [1, 3]}]
                        : [{ name: 'main', start: [0, 1], end: [0, 1] },
                           { name: 'header', start: [0, 0], end: [0, 0] },
                           { name: 'footer', start: [0, 2], end: [0, 2]}]}
                    >
                        <Box 
                            gridArea='header' 
                            background={{
                                color: 'brand',
                                image: `url(${bg})`,
                                position: 'left center',
                            }}
                        >
                            <Header position='header' /> 
                        </Box>
                        
                        <Footer position='footer' color='brand' />
                    </Grid>
                )}
            </ResponsiveContext.Consumer>
        );
    }
}

export default Main;