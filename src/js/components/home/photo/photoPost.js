/**
 * User: abhijit.baldawa
 */
import React from 'react';
import PaperComponent from "../../paper/paper";

const PhotoPost = (props) => {
    const { title, thumbnailUrl, id, albumId } = props;

    return (
        <PaperComponent
            header={`ID: ${id}, Album Id: ${albumId}`}
            title={title}
            content={<img src={thumbnailUrl} key={id}/>}
        />
    );
};

export default PhotoPost;