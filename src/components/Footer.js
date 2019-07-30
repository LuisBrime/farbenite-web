import React, { Component } from 'react';
import { Anchor, Box, Text } from 'grommet';
import { Favorite } from 'grommet-icons';

class Footer extends Component {
    render() {
        const { position, color } = this.props;

        return(
            <Box
                fill
                responsive
                align='center'
                alignContent='stretch'
                direction='column'
                gap='medium'
                gridArea={position}
            >
                <Box
                    responsive
                    justify='center'
                >
                    <Text size='small' margin='none' color='dark-2'>
                        Made with <Favorite color='brand' size='small' /> by <Anchor color='brand' target='_blank' href='https://github.com/LuisBrime' label='Luis Brime' />
                    </Text>
                </Box>
                <Box
                    responsive
                    justify='center'
                >
                    <Text size='small' margin='none' color='dark-2'>
                        Give some love to <Anchor color='brand' target='_blank' href='http://colormind.io/' label='Colormind' />
                    </Text>
                </Box>
            </Box>
        );
    }
}

export default Footer;