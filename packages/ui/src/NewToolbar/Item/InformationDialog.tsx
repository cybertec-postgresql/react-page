import React from 'react';

import { withStyles, WithStyles } from '@material-ui/core/styles';
import { ButtonProps } from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Plugin } from '@cybertec/ory-editor-core/lib/service/plugin/classes';

type DialogTitleProps = Partial<WithStyles> & ButtonProps & {
  onClose: () => void;
};

const DialogTitleWithoutStyle: React.SFC<DialogTitleProps> = (props) => {
  const { children, classes, onClose } = props;

  return (
    <MuiDialogTitle disableTypography={true} className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(DialogTitleWithoutStyle);

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

export type DialogInformationProps = {
  handleClose: () => void;
  open: boolean;
  plugin: Plugin;
};

class DialogInformation extends React.Component<DialogInformationProps> {
  render() {
    const { open, handleClose, plugin } = this.props;
    return (
      <div>
        <Dialog
          aria-labelledby="information-dialog-title"
          open={open}
          fullWidth={true}
          maxWidth="xs"
        >
          <DialogTitle id="information-dialog-title" onClose={handleClose}>
            Information
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom={true}>
              {plugin.description ? plugin.description : 'No description'}
            </Typography>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default DialogInformation;
