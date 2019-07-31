import React, { Component } from 'react';
import { Anchor, Box, Text, ResponsiveContext } from 'grommet';
import { Favorite, Github, Twitter } from 'grommet-icons';

class Footer extends Component {
    render() {
        const { position } = this.props;

        return(
            <ResponsiveContext.Consumer>
                {responsive => (
                    <Box
                        responsive
                        align='end'
                        alignContent='stretch'
                        alignSelf='center'
                        direction={responsive !== 'small' ? 'row' : 'column'}
                        gap='medium'
                        gridArea={position}
                        margin='small'
                        pad='small'
                    >
                        <Box
                            responsive
                            direction='column'
                            gap='small'
                        >
                            <Box
                                responsive
                                justify='center'
                            >
                                <Text size='small' margin='none' color='dark-2'>
                                    Made with <Favorite color='brand' size='small' /> by <Anchor color='brand' target='_blank' href='https://github.com/LuisBrime' label='Luis Brime' />
                                </Text>
                            </Box>
                           {/* 
                            <Box
                                responsive
                                justify='center'
                            >
                                <Text size='small' margin='none' color='dark-2'>
                                    Give some love to <Anchor color='brand' target='_blank' href='http://colormind.io/' label='Colormind' />
                                </Text>
                            </Box>
                            */}
                        </Box>
                        <Box
                            responsive
                            alignContent='center'
                            alignSelf='center'
                            direction='row'
                            gap='small'
                            pad='medium'
                        >
                            <Anchor target='_blank' href='https://twitter.com/farbenite' icon={<Twitter color='brand' size='medium' />} />
                            <Anchor target='_blank' href='https://github.com/LuisBrime/farbenite-bot' icon={<Github color='brand' size='medium' />} />
                        </Box>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        );
    }
}

export default Footer;