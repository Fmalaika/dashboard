import React, { Component } from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import Box from './Box';
import PropTypes from 'prop-types';

class CountArea extends Component {
    render() {
        return (
            <React.Fragment>
               <Box color="blue"  count="4500" text="Total Orders" iconImage={ShoppingCartOutlinedIcon}/>
               <Box color="green" count="2000" text="Total Revenue" iconImage={PieChartOutlinedIcon}/>
               <Box color="pink" count="1000" text="Total Expenses" iconImage={AccountBalanceWalletOutlinedIcon}/>
               <Box color="yellow" count="3000" text="New Users" iconImage={PermIdentityOutlinedIcon}/>
            </React.Fragment>
            )
        }
    }

    CountArea.propTypes = {
        iconImage:  PropTypes.elementType
      };
    
export default CountArea