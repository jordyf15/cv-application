import React from 'react';
import defaultPicture from '../../images/default-picture.png';
class FileInput extends React.Component{
    render(){
        const {handleOnChange, value, inputId,imageId, alt} = this.props;
        return(
            <div>
            {value===''
            ?<img id={imageId} src={defaultPicture} alt={alt}/>
            :<img id={imageId} src={value} alt={alt}/>
            }
          
            <input type="file" id={inputId} onChange={handleOnChange}/>
            </div>
        );
    }
}

export default FileInput;