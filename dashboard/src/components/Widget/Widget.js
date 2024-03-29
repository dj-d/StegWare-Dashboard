import React, { useState } from "react";
import { Paper, IconButton, Menu, MenuItem, Typography } from "@material-ui/core";
import { MoreVert as MoreIcon } from "@material-ui/icons";
import classnames from "classnames";

// styles
import useStyles from "./styles";

export default function Widget({children, title, noBodyPadding, bodyClass, disableWidgetMenu, header, noHeaderPadding,
                                   headerClass, style, noWidgetShadow, ...props }) {
    let classes = useStyles();

    // local
    let [moreButtonRef, setMoreButtonRef] = useState(null);
    let [isMoreMenuOpen, setMoreMenuOpen] = useState(false);

    const [openDetail, setDetail] = useState(false);
    const [openEdit, setEdit] = useState(false);
    const [openDelete, setDelete] = useState(false);

    const detailClickChange = () => {
        setDetail(!openDetail);
        props.isDetailOpen(openDetail);
    }

    const editClickChange = () => {
        setEdit(!openEdit);
        props.isEditOpen(openEdit);
    }

    const deleteClickChange = () => {
        setDelete(!openDelete);
        props.isDeleteOpen(openDelete);
    }

    return (
        <div className={classes.widgetWrapper} style={style && { ...style }}>

            <Paper className={classes.paper}
                   classes={{ root: classnames(classes.widgetRoot, { [classes.noWidgetShadow]: noWidgetShadow }) }}>

                <div className={classnames(classes.widgetHeader, {
                    [classes.noPadding]: noHeaderPadding,
                    [headerClass]: headerClass
                })}>

                    {header ? (
                        header
                    ) : (
                        <React.Fragment>

                            {/* Title */}
                            <Typography variant="h5" color="textSecondary" noWrap>
                                {title}
                            </Typography>

                            {/* SubMenu - Icon */}
                            {!disableWidgetMenu && (
                                <IconButton
                                    color="primary"
                                    classes={{ root: classes.moreButton }}
                                    aria-owns="widget-menu"
                                    aria-haspopup="true"
                                    onClick={() => setMoreMenuOpen(true)}
                                    buttonRef={setMoreButtonRef}>

                                    <MoreIcon />

                                </IconButton>
                            )}
                        </React.Fragment>
                    )}

                </div>

                <div className={classnames(classes.widgetBody, {
                    [classes.noPadding]: noBodyPadding,
                    [bodyClass]: bodyClass
                })}>

                    {children}

                </div>
            </Paper>

            {/* SubMenu - Items*/}
            <Menu id="widget-menu" open={isMoreMenuOpen} anchorEl={moreButtonRef}
                  onClose={() => setMoreMenuOpen(false)} disableAutoFocusItem>

                <MenuItem onClick={() => detailClickChange()}>
                    <Typography>
                        Detail
                    </Typography>
                </MenuItem>

                <MenuItem onClick={() => editClickChange()}>
                    <Typography>
                        Edit
                    </Typography>
                </MenuItem>

                <MenuItem onClick={() => deleteClickChange()}>
                    <Typography>
                        Delete
                    </Typography>
                </MenuItem>

            </Menu>

        </div>
    );
}
