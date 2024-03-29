import React, { Component } from 'react';
import { Box, Button, Paragraph } from 'grommet';
import { EmailInputField, Form, TextAreaField, validators } from 'grommet-controls';
import { Send } from 'grommet-icons';

import Page from '../components/Page';
import { config } from '../utils/emailjs_config';

const emailjs = require('emailjs-com');

class Report extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log(event);

        var template_params = {
            'reply_to': event.email,
            'from_name': event.email,
            'to_name': 'luisbrime@farbenite.xyz',
            'message_html': event.comment
        };

        emailjs.send(config.service_id, config.template_id, template_params, config.userID)
            .then(response => {
                console.log('Success! ', response.status, response.text);
            }, err => {
                console.log('Failed... ', err);
            });
    }

    render() {

        return(
            <Page>
                <Box
                    direction='column'
                    gap='medium'
                >
                    <Paragraph alignSelf='center' color='dark-3' margin='none'>
                        Do you see any error with my functions or have any feedback for me?<br/>
                        Feel free to send a report or a comment to my creator so he can take it in consideration.<br/>
                    </Paragraph>
                </Box>
                <Box
                    alignSelf='center'
                    direction='column'
                    gap='medium'
                >
                    <Form gap='medium' onSubmit={this.handleSubmit}>
                        <EmailInputField color='dark-3' name='email' label='Email' validation={[validators.required(), validators.email()]} />
                        <TextAreaField name='comment' label='Report or comment' resize={false} size='large' validation={[validators.required()]} />
                        <Box align='end' pad={{ vertical: 'medium' }}>
                            <Button 
                                color='brand' 
                                type='submit' 
                                icon={<Send color='brand' />}
                                label='Send' 
                                reverse
                            />
                        </Box>
                    </Form>
                </Box>
            </Page>
        );
    }
}

export default Report;