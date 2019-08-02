import React, { Component } from 'react';
import { Box, Button, Grid, Heading, Layer, ResponsiveContext } from 'grommet';
import { Menu, Close } from 'grommet-icons';

import RoutedAnchor from '../components/RoutedAnchor';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        };
    }

    render() {
        const { position } = this.props; 
        const { show } = this.state;

        let node;
        if (show) {
            const close = () => this.setState({ show: false });
            node = (
                <Layer
                    full='horizontal'
                    position='top'
                    responsive={false}
                    onEsc={close}
                    onClickOutside={close}
                >
                    <Box
                        align='center'
                        direction='column'
                        pad='small'
                    >
                        <Box margin='small'>
                            <Button icon={<Close color='brand' />} onClick={close} />
                        </Box>
                        <Box aling='start' alignSelf='start' margin='small' gap='large'>
                            <RoutedAnchor color='brand' path='/' label='Home' />
                            <RoutedAnchor color='brand' path='/about' label='About' />
                            <RoutedAnchor color='brand' path='/versions-log' label='Versions' />
                            <RoutedAnchor color='brand' path='/donate' label='Donate' />
                            <RoutedAnchor color='brand' path='/report-comment' label='Report' />
                        </Box>
                    </Box>
                </Layer>
            );
        }

        return(
            <ResponsiveContext.Consumer>
                {responsive => (
                    <Grid
                        fill
                        gridArea={position}
                        columns={responsive !== 'small'
                        ? ['small', 'flex', 'small']
                        : ['flex']}
                        rows={['flex']}
                        areas={responsive !== 'small' 
                        ? [{ name: 'menu', start: [1, 0], end: [1, 0] }]
                        : [{ name: 'menu', start: [0, 0], end: [0, 0] }]}
                    >
                        {responsive !== 'small' 
                        ? (
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
                                    <RoutedAnchor color='background' path='/versions-log' label='Versions' />
                                    <RoutedAnchor color='background' path='/donate' label='Donate' />
                                    <RoutedAnchor color='background' path='/report-comment' label='Report' />
                                </Box>
                                <Box
                                    responsive
                                    pad='small'
                                >
                                    <RoutedAnchor path='/'><Heading responsive level={3} color='background'>farbenite.</Heading></RoutedAnchor>
                                </Box>
                            </Box>
                        )
                        : (
                            <Box
                                fill
                                responsive
                                align='center'
                                direction='row'
                                gap='medium'
                                gridArea='menu'
                                justify='around'
                            >
                                {node}
                                <Box
                                    responsive
                                    pad='xsmall'
                                >
                                    <RoutedAnchor path='/'><Heading responsive level={2} color='background'>farbenite.</Heading></RoutedAnchor>
                                </Box>
                                <Box
                                    responsive
                                    pad='xsmall'
                                >
                                    <Button icon={<Menu color='background' />} onClick={() => this.setState({ show: true })} />
                                </Box>
                            </Box>
                        )
                        }
                    </Grid>
                )}
            </ResponsiveContext.Consumer>
        );
    }
}

export default Main;