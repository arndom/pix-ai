import React from 'react';
import './StyleTransfer.css';

function StyleTransfer() {
    return (
        <div className = 'styleTransfer'>

            <div className = 'styleTransfer__Input'>

                <div className = 'styleTrtyleTransfer__InputContent'>
                    <input
                        accept="image/*"
                        className='styleTrtyleTransfer__InputContentInput'
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                            Upload
                        </Button>
                    </label>
                </div>

                <div className = 'styleTrtyleTransfer__InputStyle'>

                </div>

            </div>

            <div className = 'styleTransfer__Output'>

            </div>
            
        </div>
    )
}

export default StyleTransfer
