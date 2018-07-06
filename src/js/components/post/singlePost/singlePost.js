/**
 * User: abhijit.baldawa
 */
import React from 'react';
import PaperComponent from "../../paper/paper";

const SinglePost = (props) => {
    const { classes, title, userId, id, body } = props;

    return (
        <PaperComponent
            header={`ID: ${id}, User ID: ${userId}`}
            title={title}
            content={body}
        />
    );
};

export default SinglePost;