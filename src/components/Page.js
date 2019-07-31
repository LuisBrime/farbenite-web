import React, { Children, Component } from 'react';
import { Box, Grid, ResponsiveContext } from 'grommet';

import Header from './Header';
import Footer from './Footer';

import Section from './Section';

import bg from '../utils/bg.png';

class Main extends Component {
    render() {
        const { children } = this.props;
        const childrenRender = Children.map(children, child => {
            return(
                <Section position='main'>{child}</Section>
            );
        });

        return(
            <ResponsiveContext.Consumer>
                {responsive => (
                    <Grid
                        fill
                        columns={responsive !== 'small'
                        ? ['flex']
                        : ['flex']}
                        rows={responsive !== 'small'
                        ? ['xxsmall', 'xsmall', 'flex', 'xsmall']
                        : ['xsmall', 'flex', 'xsmall']}
                        areas={responsive !== 'small'
                        ? [{ name: 'main', start: [0, 1], end: [0, 2] },
                           { name: 'header', start: [0, 0], end: [0, 1] },
                           { name: 'footer', start: [0, 3], end: [0, 3]}]
                        : [{ name: 'main', start: [0, 1], end: [0, 1] },
                           { name: 'header', start: [0, 0], end: [0, 0] },
                           { name: 'footer', start: [0, 2], end: [0, 2]}]}
                    >
                        <Box 
                            responsive
                            gridArea='header' 
                            background={{
                                color: 'brand',
                                image: `url(${bg})`,
                                position: 'left center',
                            }}
                        >
                            <Header position='header' /> 
                        </Box>

                        <Grid
                            fill
                            columns={responsive !== 'small'
                            ? ['medium', 'flex', 'medium']
                            : ['flex']}
                            rows={['flex']}
                            areas={responsive !== 'small'
                            ? [{ name: 'p', start: [1, 0], end: [1, 0] }]
                            : [{ name: 'p', start: [0, 0], end: [0, 0] }]}
                            gridArea='main'
                        >
                            <Box
                                responsive
                                flex='grow'
                                gridArea='p'
                                position='column'
                                overflow='auto'
                            >
                                {childrenRender}
                            </Box>
                        </Grid>


                        <Box
                            responsive
                            gridArea='footer'
                        >
                            <Footer position='footer' />
                        </Box>
                    </Grid>
                )}
            </ResponsiveContext.Consumer>
        );
    }
}

export default Main;