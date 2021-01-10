import React from 'react';
import { Link } from 'react-router-dom';

import UserCard from '../UserCard/UserCard.component';
import TagBadge from '../TagBadge/TagBadge.component';

import './PostItem.styles.css';
// accepted_answer_id: 65574035,
// answer_count: 1,
// bounty_amount: 50,
// bounty_closes_date: 1610385245,
// content_license: "CC BY-SA 4.0",
// creation_date: 1609599389,
// is_answered: true,
// last_activity_date: 1610179545,
// last_edit_date: 1609866970,
// link: "https://stackoverflow.com/questions/65540474/how-to-add-order-in-processing-if-user-is-returning-using",
// owner: { reputation: 121, user_id: 6391799, user_type: "registered", profile_image: "https://i.stack.imgur.com/bVTDb.jpg?s=128&g=1", display_name: "SillyNinja" },
// question_id: 65540474,
// score: 3,
// tags: ["wordpress","PHP","javascript"],
// title: "How to add order in processing if user is returning using?",
// view_count: 81,
const PostItem = ({ post: { id,score, title, body, tagname, username, user_id, answer_count, comment_count, views, creation_date,owner,view_count } }) => {
    const answerVoteUp = (
        <div className='vote answer'>
            <span className='vote-count'>{answer_count}</span>
            <div className='count-text'>answers</div>
        </div>
    )

    const answerVoteDown = (
        <div className='vote'>
            <span className='vote-count'>{answer_count}</span>
            <div className='count-text'>answers</div>
        </div>
    )

    return (
        <div className='posts'>
            <div className='stats-container'>
                <div className='stats'>
                    <div className='vote'>
                        <span className='vote-count'>{score}</span>
                        <div className='count-text'>votes</div>
                    </div>
                    {answer_count > 0 ? answerVoteUp : answerVoteDown}
                    <div className='vote'>
                        <div className='count-text'>{view_count} views</div>
                    </div>
                </div>
            </div>
            <div className='summary'>
                <h3><Link to={`/questions/${id}`}>
                    {title}
                </Link></h3>
                <div className='brief'>
                    {title.substring(0, 200)}...
                </div>
                <TagBadge
                    tag_name={tagname}
                    size={'s-tag'}
                    float={'left'}
                />
                <UserCard
                    created_at={creation_date}
                    user_id={owner.user_id}
                    username ={owner.display_name}
                    img={owner.profile_image}
                    float={'right'}
                    backgroundColor={'transparent'}
                />
            </div>
        </div>

    )
};

export default PostItem;