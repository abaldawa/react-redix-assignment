/**
 * User: abhijit.baldawa
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

function PaperSheet(props) {
    const { classes, header, title, content } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="headline" component="h3">
                    {header}
                </Typography>
                <Typography variant="headline" component="h3">
                    {title}
                </Typography>
                <Typography component="p">
                    {content}
                </Typography>
            </Paper>
            <Divider/>
        </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);