import React from 'react';

import login_classes from "./Login.module.css";

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useFormik } from "formik";

// import { useSelector, useDispatch } from "react-redux";

import { connect } from "react-redux";


const initialValues = {

  login_id: "",

  login_password: "",

  search_dist: "",

  search_state: "",

}

  const onSubmit =  values => {
    console.log ("from data", values)  
  }

const validate = values => {

  let errors  = {  }

  if (!values.login_id) {
      
      errors.login_id = " user must enter correct id ";

  } 

  if (!values.login_password) {
      
      errors.login_password = " user must enter correct password ";

  }

  if (!values.search_dist) {
      
    errors.search_dist = " enter your district to get customized result ";

  }

  if (!values.search_state) {
      
    errors.search_state = " enter your state to get customized result ";

  }


  return errors

}


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);



export default function LoginCredential (props) {

  // var dispatch = useDispatch();
  // var cartitems = useSelector((state) => state.cart);

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  // const onSubmit =  values => {
  //   console.log ("from data", values)
  //   dispatch({ type: "ADD_CART", payload: [values, values] });
  
  // }

  const formik = useFormik ({

    initialValues , 

    onSubmit ,

    validate 

  })

  // console.log("from values", formik.values)

  return (

    <div>
      
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          
        <DialogContent >
          
          <form onSubmit={formik.handleSubmit} className={login_classes.admin_credential}>

            <h1 > Login with Google or Facebook </h1>

            <div>
                <label htmlFor="login_id"> Enter Google or Facebook id </label>
                <input type="text" id="login_id" name="login_id" placeholder=" google or facebook id"
                onChange={formik.handleChange} value={formik.values.login_id} />
                {formik.touched.login_id && formik.errors.login_id ? <div className={login_classes.error_msg}> {formik.errors.login_id} </div> : null}
            </div>


   
            <div>
                <label htmlFor="login_password"> Enter password </label>
                <input type="text" id="login_password" name="login_password" placeholder=" google or facebook password"
                onChange={formik.handleChange} value={formik.values.login_password}/>
                {formik.touched.login_password && formik.errors.login_password ? <div className={login_classes.error_msg}> {formik.errors.login_password} </div> : null}
            </div>

            
            <div>
                <label htmlFor="search_dist"> Enter Dist for Customized Result </label>
                <input type="text" id="search_dist" name="search_dist" placeholder="enter dist" value={props.inputValue}
                onChange={formik.handleChange} value={formik.values.search_dist}/>
                {formik.touched.search_dist && formik.errors.search_dist ? <div className={login_classes.error_msg}> {formik.errors.search_dist} </div> : null}
            </div>

            <div>
                <label htmlFor="search_state"> Enter State for Customized Result </label>
                <input type="text" id="search_state" name="search_state" placeholder="enter dist, state etc"
                onChange={formik.handleChange} value={formik.values.search_state}/>
                {formik.touched.search_state && formik.errors.search_state ? <div className={login_classes.error_msg}> {formik.errors.search_state} </div> : null}
            </div>

            <input type="submit" value="Submit" />

          </form>
          
        </DialogContent>

      </Dialog>
    </div>
  );
}
