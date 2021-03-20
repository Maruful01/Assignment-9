import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import ReactPlayer from 'react-player'

const Location = () => {
    return (
        <div>
        {/* <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
       <div>
       <h1>{this.state.selectedPlace.name}</h1>
       </div>
      </InfoWindow>
       </Map> */}
       <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3793057441717!2d90.3906813153625!3d23.733849695324427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8e90a449e4f%3A0xb7092a9c25197fa4!2z4Kai4Ka-4KaV4Ka-IOCmrOCmv-CmtuCnjeCmrOCmrOCmv-CmpuCnjeCmr-CmvuCmsuCnnw!5e0!3m2!1sbn!2sbd!4v1616228207329!5m2!1sbn!2sbd"></iframe>
        </div>
            
    );
};
export default Location;
// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyBtbAC2dXKS8NIuDNbNyDUEGMputCp3Y_E")
//   })(Location)
 
