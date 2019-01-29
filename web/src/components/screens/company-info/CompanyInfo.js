import React, { Component } from 'react';
import {
    Container,
    Header,
    Label,
    Form,
    Row,
    FaceImage,
    Input, 
    Select,
    Option,
    HeaderText,
    H2,
    Button,
    MailImage,
    Text1
} from './zstyles';

class CompanyInfo extends Component {

    state = {
        height: window.innerHeight,
    }
    updateWindowDimensions = () => {
        this.setState({height: window.innerHeight})
        console.log('window resized');
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    render() {
        return (
            <Container style={{height: this.state.height}}>
                <Header>
                    {/* <FaceImage src='https://i.imgur.com/hiCvGuo.png'/> */}
                    <FaceImage src='https://i.imgur.com/qVw0qzI.png'/>
                    <HeaderText>
                        <H2>Hi my name is Jaizon,</H2>
                        <H2>my pleasure to assist you.</H2>
                    </HeaderText>
                   
                </Header>
              
                       
                       <Form>
                            <MailImage src='https://i.imgur.com/bx92YRh.png' />
                             <Text1>Where to send the documents?</Text1>
                            <Row><Label htmlFor='name'>Name</Label><Input name='name' type='text' /></Row>
                            <Row><Label htmlFor='name'>Company</Label><Input name='company' type='text' /></Row>
                            <Row><Label htmlFor='name'>Street</Label><Input name='street' type='text' /></Row>
                            <Row><Label htmlFor='name'></Label><Input name='street2' type='text' /></Row>
                            <Row><Label htmlFor='name'>City</Label><Input name='city' type='text' /></Row>
                            <Row><Label htmlFor='name'>Zip Code</Label><Input name='zipcode' type='text' /></Row>
                            <Row>
                                <Label htmlFor='name' style={{paddingRight: '15px'}}>State</Label>
                                <Select name='state'>
                                    <Option value=" ">[Select]</Option>
                                    <Option value="AL">Alabama</Option>
                                    <Option value="AK">Alaska</Option>
                                </Select>
                            
                            </Row>
                           
                            <Row>
                                <Label htmlFor='name' style={{paddingRight: '15px'}}>Country</Label>
                                <Select name='country'>
                                    <Option value="US">United States</Option>
                                    <Option value="UK">United Kingdom</Option>
                                </Select>
                            
                            </Row>
                            <Button>Request for Documents</Button>
                    </Form>
           
             
            </Container>
        );
    }
}

export default CompanyInfo;