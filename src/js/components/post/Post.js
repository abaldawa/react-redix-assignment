/**
 * User: abhijit.baldawa
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {fetchPosts, addPost, clearError} from '../../actions/postActions';
import SinglePost from './singlePost/singlePost';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import ErrorModal from "../modals/modal"

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    root: {
        flexGrow: 1,
    }
});

class PostComponent extends Component {
    constructor() {
        super();

        this.state = {
            title: "",
            body: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleErrorModalClose = this.handleErrorModalClose.bind(this);
    }

    handleErrorModalClose() {
        this.props.clearError();
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit() {
        event.preventDefault();
        const { title, body } = this.state;
        this.props.addPost({ title, body, userId: 1 });
        this.setState({ title: "", body:"" });
    }

    componentDidMount() {
        if( !this.props.postsArr.length ) {
            this.props.fetchPosts()
        }
    }

    render() {
        const { title, body } = this.state;
        const { classes, isLoading, errorMessage } = this.props;

        let errorModal;

        if( errorMessage ) {
            errorModal = <ErrorModal
                open={true}
                title={"Error"}
                bodyText={errorMessage}
                handleClose={this.handleErrorModalClose}
            />
        }

        return (
            <div>
                <div className={classes.root}>
                    <LinearProgress style={{display:isLoading ? "block": "none"}}/>
                </div>
                <fieldset>
                    <legend>Create Post</legend>
                    <table style={{"marginLeft":"40%"}}>
                        <tbody>
                            <tr>
                                <td><h3>Title:</h3></td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        value={title}
                                        onChange={this.handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><h3>Body</h3></td>
                                <td>
                                    <textarea
                                        id="body"
                                        value={body}
                                        onChange={this.handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Button variant="contained" color="primary" disabled={isLoading} className={classes.button} onClick={this.handleSubmit}>
                                        Submit
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>

                <div>
                    {this.props.postsArr.map((postObj) =>
                        <SinglePost
                            title={postObj.title}
                            userId={postObj.userId}
                            id={postObj.id}
                            body={postObj.body}
                            key={postObj.id}/>
                    )}
                </div>
                {errorModal}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            fetchPosts,
            addPost,
            clearError
        },
        dispatch
    );
};

const mapStateToProps = state => ({
    isLoading: state.post.isLoading,
    postsArr: state.post.postsArr,
    errorMessage: state.post.errorMessage
});

const Post = connect(mapStateToProps, mapDispatchToProps)(PostComponent);
export default withStyles(styles)(Post);