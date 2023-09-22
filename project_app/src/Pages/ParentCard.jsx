import React, { Component } from 'react';
import CardCompo from './Tech_';
import BikeImg from './bmw.jpg';

class ProspCard extends Component {
    render() {
        return (
            <>
                {/* <img src={BikeImg} alt="" /> */}
                <div className="row">
                    <div className="col-3"> 
                    <CardCompo title="Props Title" imgSrc="https://mdbootstrap.com/img/new/standard/nature/184.webp" />
                    </div>
                    <div className="col-3"> 
                    <CardCompo title="Product" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4M3ip3piTUTYow4hV-7fuXK5vNxaSsjPXeZKx5uxjg&s" />
                    </div>
                    <div className="col-3"> 
                    <CardCompo title="Other Product" imgSrc={BikeImg} kuchbhi="data" />
                    </div>
                    <div className="col-3"> 
                    <CardCompo title="Other Product" imgSrc={`${process.env.PUBLIC_URL}/BMWBike.jpg`} kuchbhi="data" />
                    </div>
                </div>
            </>
        );
    }
}

export default ProspCard;