import React, {Fragment} from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import './UserCard.styles.css';

const UserCard = ({
        created_at,
        user_id,
        username,
        dateType,
        float,
        img,
        backgroundColor
    }) => {
    return <Fragment>
        <div className='owner' style={{float: float, backgroundColor: backgroundColor}}>
            <div className='user-block'>
                <div className='action-time'>{dateType ? dateType : 'asked'} { moment(created_at).fromNow(true) } ago</div>
                <div className='user-logo'>
                    <Link className='user-link' to={`/users/${user_id}`}>
                        <div className='logo-wrapper'>
                            <img alt='user_logo' src={img}/>
                        </div>
                    </Link>
                </div>
                <div className='user-profile'>
                    <Link className='user-profile-link' to={`/users/${user_id}`}>{username}</Link>
                </div>
            </div>
        </div>
    </Fragment>
};

export default UserCard;