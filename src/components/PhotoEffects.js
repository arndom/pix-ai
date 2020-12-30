import React from 'react';
import PhotoEffect from './PhotoEffect';
import styleTransfer from '../assets/images/style-transfer.jpg';
import faceFilter from '../assets/images/face-filters.jpg';
import oldColor from '../assets/images/old-color.jpg'
import './PhotoEffects.css';
import PhotoEffect2 from './PhotoEffect2';

function PhotoEffects() {
    return (
        <div className='photoEffects'>

            <PhotoEffect
                src = {faceFilter}
                short = 'PixAI - Face filters and so much more'
                more = 'Transform yourself into something else.'
                tab = 'face'
            />

            <PhotoEffect2    
                src = {styleTransfer}
                short = 'Style Transfer'
                more = 'Combine art styles with personal photos, create something uniquely you.'
            />

            <PhotoEffect
                src = {oldColor}
                short = 'Old to New'
                more = 'Bring life to old black and white photos with this feature powered by AI.'
                tab = 'old'
            />          
        </div>
    )
}

export default PhotoEffects
