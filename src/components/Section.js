import React, { Component } from 'react';
import { Box } from 'grommet';
import { Card } from 'grommet-controls';

class Section extends Component {
    render() {
        const { position, children } = this.props;

        return(
            <Box
                responsive
                wrap
                animation='fadeIn'
                gridArea={position}
                margin='small'
            >
                <Card
                    fill
                    background='light-1'
                    border={{
                        color: 'background',
                        side: 'all',
                        size: 'small'
                    }}
                    elevation='small'
                    gap='small'
                    pad='small'
                >
                    <Card.CardContent>
                        {children}
                    </Card.CardContent>
                </Card>
            </Box>
        );
    }
}

export default Section;