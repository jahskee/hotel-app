import React, { Component } from 'react';
import {
    Container,
    Header,
    Main,
    Label,
    Form,
    Row,
    Footer,
    FaceImage,
    Input, 
    Select,
    Option,
    HeaderText,
    H2
} from './zstyles';

class CompanyInfo extends Component {

    state = {
        height: window.innerHeight-200,
    }
    updateWindowDimensions = () => {
        this.setState({height: window.innerHeight-300})
        console.log('window resized');
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    render() {
        return (
            <Container>
                <Header>
                    {/* <FaceImage src='https://i.imgur.com/hiCvGuo.png'/> */}
                    <FaceImage src='https://i.imgur.com/qVw0qzI.png'/>
                    <HeaderText>
                        <H2>Hi my name is Jaizon.</H2>
                        <H2>It is a pleasure to assist you.</H2>
                    </HeaderText>
                   
                </Header>
                <Main style={{height: this.state.height}}>
                       <Form>
                            <Row><Label htmlFor='name'>Name</Label><Input name='name' type='text' /></Row>
                            <Row><Label htmlFor='name'>Company</Label><Input name='company' type='text' /></Row>
                            <Row><Label htmlFor='name'>Street</Label><Input name='street' type='text' /></Row>
                            <Row><Label htmlFor='name'></Label><Input name='street2' type='text' /></Row>
                            <Row><Label htmlFor='name'>City</Label><Input name='city' type='text' /></Row>
                            <Row>
                                <Label htmlFor='name'>State</Label>
                                <Select>
                                    <Option value="AL">Alabama</Option>
                                    <Option value="AK">Alaska</Option>
                                </Select>
                            
                            </Row>
                            <Row><Label htmlFor='name'>Zip Code</Label><Input name='zipcode' type='text' /></Row>

                    </Form>
                </Main>
                <Footer><h3>Thank you!</h3></Footer>
            </Container>
        );
    }
}

export default CompanyInfo;