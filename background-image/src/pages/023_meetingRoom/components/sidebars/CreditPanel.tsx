import React from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./css";

export const CreditPanel = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="body1" color="textSecondary">
                About us
            </Typography>
            <Typography variant="body2">
                This program is powered by{" "}
                <a href="https://www.flect.co.jp/" rel="noopener noreferrer" target="_blank">
                    FLECT
                </a>
                .
                <br />
                <a href="https://github.com/w-okada/flect-chime-sdk-demo" rel="noopener noreferrer" target="_blank">
                    github
                </a>
            </Typography>

            <div className={classes.lineSpacer} />
            <div className={classes.lineSpacer} />

            <Typography variant="body1" color="textSecondary">
                Acknowledgment
            </Typography>
        </div>
    );
};
