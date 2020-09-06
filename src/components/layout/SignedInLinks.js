import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    const { profile } = props;
    return (
        <ul className="right">
            <li><NavLink to='/create-project'>New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li>
                <NavLink to='/profile' className="btn btn-floating pink lighten-1">
                    {profile.initials}
                </NavLink>
            </li>
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);