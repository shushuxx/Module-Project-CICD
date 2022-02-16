import React, { Component } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ApiService from '../ApiService';
import Customer from './Customer';

class CustomerDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({
      open: false
    });
  }

  deleteCustomer(id) {
    const url = `/api/del/${id}`;
    fetch(url, {
      method: "DELETE"
    });
    this.props.stateRefresh();

  ApiService.deleteCustomer(Customer)
  .then( res => {
    this.setState({
      message: Customer.customername + '님이 삭제되었습니다.'
    })
    console.log(this.state.message);
    this.props.history.delete(`/api/del`);
  })
  .catch( err => {
    console.log('deleteCustomer() 에러', err);
  })  
  
  }

  render() {
    return (
      <div>
        <Button variant="contained" color="secondary" onClick={this.handleClickOpen}> 삭제</Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle onClose={this.handleClose}>
            삭제 경고
        </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              선택한 고객 정보가 삭제됩니다.
          </Typography>

          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={e => { this.deleteCustomer(this.props.id) }}>삭제</Button>
            <Button variant="outlined" color="primary" onClick={e => { this.deleteCustomer(this.props.id) }}>닫기</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default CustomerDelete;