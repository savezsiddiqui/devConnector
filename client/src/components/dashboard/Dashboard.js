import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { Link } from 'react-router-dom';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';

const Dashboard = ({
    getCurrentProfile,
    deleteAccount,
    auth: { user, isAuthenticated },
    profile: { loading, profile }
}) => {

    useEffect(() => {
        getCurrentProfile();
    }, [isAuthenticated, getCurrentProfile]);

    return loading && profile === null ? <Spinner /> :
        <>
            <h1 className='large text-primary'>Dashboard</h1>
            <p className='lead'>
                <i className='fas fa-user'></i>{' '}
                Welcome {user && user.name}
            </p>
            <>
                {profile !== null ?
                    <>
                        <DashboardActions />
                        <Experience experience={profile.experience} />
                        <Education education={profile.education} />
                    </> :
                    <>
                        <p>You have not yet setup a profile, please add some info </p>
                        <Link to='create-profile' className='btn btn-primary my-1'>
                            Create Profile
                        </Link>
                    </>
                }
                <div className='my-2'>
                    <button className='btn btn-danger' onClick={() => { deleteAccount() }}>
                        <i className='fas fa-user-minus'></i>{' '}
                        Delete Account
                    </button>
                </div>
            </>
        </>
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
