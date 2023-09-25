import React,{Component} from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    // MDBCardLink,
    // MDBListGroup,
    // MDBListGroupItem
} from 'mdb-react-ui-kit';

class PropsChild extends Component {
    render() {
        return (
            <MDBCard>
                <MDBCardImage src={this.props.imgSrc} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>{this.props.title}</MDBCardTitle>
                    <MDBCardText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, asperiores? {this.props.kuchbhi}
                    </MDBCardText>
                    <MDBBtn href='#'>Button</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        );
    }

}


export default PropsChild;