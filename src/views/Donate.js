import React, { Component } from 'react';
import { Box, Button, Paragraph } from 'grommet';
import { Paypal } from 'grommet-icons';

import Page from '../components/Page';

class Donate extends Component {
    render() {
        return(
            <Page>
                <Box
                    direction='column'
                    height='small'
                    gap='medium'
                >
                    <Paragraph alignSelf='center' color='dark-3' margin='none'>
                        If you liked me and would like to contribute to my creator, feel free to donate
                        through Paypal. <br/><br/>
                        The kind people that contribute to the project and do so with their name, will be shown on this page.
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
                            href='https://www.paypal.me/luisbrime' 
                            icon={<Paypal color='neutral-5' />} 
                            label='Paypal' 
                            plain={true}
                            target='_blank'
                            reverse
                        />
                    </Box>
                </Box>
            </Page>
        );
    }
}

export default Donate;