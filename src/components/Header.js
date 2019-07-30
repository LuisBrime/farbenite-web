import React, { Component } from 'react';
import { Anchor, Box, Grid, Heading, Image, ResponsiveContext } from 'grommet';

class Main extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        event.preventDefault();
        console.log(event.target.href);
        window.history.pushState(undefined, undefined, event.target.href);
    }

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
                                <Anchor color='background' href='/' onClick={this.onClick} label='Home' />
                                <Anchor color='background' href='/about' onClick={this.onClick} label='About' />
                                <Anchor color='background' href='/donate' onClick={this.onClick} label='Donate' />
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