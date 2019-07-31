import React, { Component } from 'react';
import { Box, Grid, Heading, ResponsiveContext } from 'grommet';
import RoutedAnchor from '../components/RoutedAnchor';

class Main extends Component {
    render() {
        const { position } = this.props; 

        return(
            <ResponsiveContext.Consumer>
                {responsive => (
                    <Grid
                        fill
                        gridArea={position}
                        columns={responsive !== 'small'
                        ? ['small', 'flex', 'small']
                        : ['small', 'small']}
                        rows={['flex']}
                        areas={[{ name: 'menu', start: [1, 0], end: [1, 0] }]}
                    >
                        <Box
                            fill
                            responsive
                            align='center'
                            direction='row-reverse'
                            gap='xlarge'
                            gridArea='menu'
                            justify='around'
                        >
                            <Box
                                responsive
                                direction='row'
                                gap='medium'
                                justify='evenly'
                                pad='large'
                            >
                                <RoutedAnchor color='background' path='/' label='Home' />
                                <RoutedAnchor color='background' path='/about' label='About' />
                                <RoutedAnchor color='background' path='/updates-blog' label='Versions' />
                                <RoutedAnchor color='background' path='/donate' label='Donate' />
                            </Box>
                            <Box
                                responsive
                                pad='small'
                            >
                                <Heading responsive level={3} color='background'>farbenite.</Heading>
                            </Box>
                        </Box>
                    </Grid>
                )}
            </ResponsiveContext.Consumer>
        );
    }
}

export default Main;