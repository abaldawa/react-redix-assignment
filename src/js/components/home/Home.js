/**
 * User: abhijit.baldawa
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import {fetchPosts, clearError} from "../../actions/homeActions";
import PhotoPost from "./photo/photoPost";
import ErrorModal from "../modals/modal"

const styles = theme => ({
    root: {
        flexGrow: 1,
    }
});

class HomeComponent extends Component {
    constructor() {
        super();
        this.handleOnScroll = this.handleOnScroll.bind(this);
        this.handleErrorModalClose = this.handleErrorModalClose.bind(this);
    }

    handleErrorModalClose() {
        this.props.clearError();
    }

    handleOnScroll(){
        const
            scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop,
            scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight,
            clientHeight = document.documentElement.clientHeight || window.innerHeight,
            scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

        if (scrolledToBottom) {
            if(!this.props.isLoading) {
                this.props.fetchPosts();
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll);
        if( !this.props.photosArr.length ) {
            this.props.fetchPosts()
        }
    }

    render() {
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
                {this.props.photosArr.map((photoObj) =>
                    <PhotoPost
                        title={photoObj.title}
                        thumbnailUrl={photoObj.thumbnailUrl}
                        id={photoObj.id}
                        albumId={photoObj.albumId}
                        key={photoObj.id}/>
                )}
                <div className={classes.root}>
                    <LinearProgress style={{display:isLoading ? "block": "none"}}/>
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
            clearError
        },
        dispatch
    );
};

const mapStateToProps = state => ({
    isLoading: state.home.isLoading,
    photosArr: state.home.photosArr,
    errorMessage: state.home.errorMessage
});

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default withStyles(styles)(Home);

