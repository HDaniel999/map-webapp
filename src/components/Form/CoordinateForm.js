import React, { Component } from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { newCoordinate } from '../../services/ApiService'

const { Text } = Typography;

export default class CoordinateForm extends Component {

    constructor(){
        super();
        this.onChangeField = this.onChangeField.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeField (coordinate) {
        const { target } = coordinate
        this.setState({ [target.name]: target.value })

    }

    handleSubmit(event) {
        event.preventDefault();
        newCoordinate(this.state);
        window.location.reload(false);
    }

    state = {
        lat: '',
        lng: '',
      };

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>

                <Form.Item>
                    <Text>Ingersa la Latitud</Text>
                    <Input 
                    label="lat" 
                    name="lat"
                    onChange={this.onChangeField}
                    />
                </Form.Item>

                <Form.Item>
                    <Text>Ingersa la Longitud</Text>
                    <Input
                    label="lng"
                    name="lng"
                    onChange={this.onChangeField}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary"  htmlType="submit">Guardar Coordenadas</Button>
                </Form.Item>

            </Form>
        )
    }
}