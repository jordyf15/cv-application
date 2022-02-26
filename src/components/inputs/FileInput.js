import React from 'react';
import defaultPicture from '../../images/default-picture.png';

const FileInput = ({handleOnChange, value, inputId, imageId, alt}) => {
    return <div>
        {value===''
        ?<img id={imageId} src={defaultPicture} alt={alt}/>
        :<img id={imageId} src={value} alt={alt}/>}
        <input type="file" id={inputId} onChange={handleOnChange}/>
    </div>
}

export default FileInput;