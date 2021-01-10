import React, { Component, useState, useEffect, Fragment } from "react";
import { DotsLoader, Navbar } from "../../components";
import { Images } from "../../theme/index";
import PageTitle from '../../components/PageTitle/PageTitle.component';
import TagBadge from '../../components/TagBadge/TagBadge.component';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup.component';
import { ReactComponent as Logo } from '../../assets/LogoGlyphMd.svg';
import { getQuestions, getTags, getUser } from '../../config/simpleApiCalls'
import moment from 'moment';
import PostItem from '../../components/PostItem/PostItem.component';
import { Link } from 'react-router-dom';

import "./styles.css";
const FeatureList = (props) => {

    const [sortType, setSortType] = useState('tags');
    const [answerCout,setAnswerCount] = useState(0)
    const [scoreCount,setScoreCount] = useState(0)
    const [user, setUser] = useState(null)
    const [tags, setTags] = useState(null)
    const [questions, setQuestions] = useState(null);
    useEffect(async () => {
        const userId = props.match.params.user
        try {
            const userbystack = await getUser(userId);
            const questionsBystack = await getQuestions(userId);
            const tagsByStack = await getTags(userId);
            setUser(userbystack?.data?.items[0])
            setQuestions(questionsBystack.data.items)
           const answerSum = await questionsBystack.data.items.reduce( function(a, b){
                return a + b["answer_count"];
            }, 0);
            const scoreSum = await questionsBystack.data.items.reduce( function(a, b){
                return a + b["score"];
            }, 0);
            setScoreCount(scoreSum)
            setAnswerCount(answerSum)
            setTags(tagsByStack.data.items)
      
        } catch (err) {

        }
    }, [])
    return <Fragment>
        
        <PageTitle title={`User ${user?.display_name} - Stack Overflow`} />
        <div id='mainbar' className='user-main-bar pl24 pt24'>
            <div className='user-card'>
                <div className="grid--cell s-navigation mb16">
                    <Link to="#" className="s-navigation--item is-selected"
                        data-shortcut="P">Profile</Link>
                    <Link to="#" className="s-navigation--item"
                        data-shortcut="A">Activity</Link>
                </div>
                <div className='grid'>
                    <div className='img-card'>
                        <div className='avatar-card'>
                            <div className='avatar'>
                                <Link className='avatar-link' to={`/users/${props.match.params.user}`}>
                                    <div className='logo-wrapper'>
                                        <img src={user?.profile_image} alt='user-logo' />
                                    </div>
                                </Link>
                            </div>
                            <div className='title'>
                                <div className='grid'>
                                    {user?.reputation}
                                &nbsp;
                                <span className='fc-light'>
                                        PROFILE VIEWS
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='content-card'>
                        <div className='content-grid'>
                            <div className='info-cell'>
                                <div className='info'>
                                    <div className='details'>
                                        <h2>{user?.display_name}</h2>
                                    </div>
                                    <div className='date'>
                                        <p>
                                            user created &nbsp;-&nbsp;{moment(user?.creation_date).fromNow(false)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='stats-cell'>
                                <div className='count-sec'>
                                    <div className='counts'>
                                        <div className='cells'>
                                            <div className='column-grid'>
                                                <div className='head'>
                                                    {answerCout}
                                                </div>
                                                <div className='foot'>
                                                    answers
                                            </div>
                                            </div>
                                        </div>
                                        <div className='cells'>
                                            <div className='column-grid'>
                                                <div className='head'>
                                                    {questions ? questions?.length:0}
                                                </div>
                                                <div className='foot'>
                                                    questions
                                            </div>
                                            </div>
                                        </div>
                                        <div className='cells'>
                                            <div className='column-grid'>
                                                <div className='head'>
                                                    {scoreCount}
                                                </div>
                                                <div className='foot'>
                                                    score
                                            </div>
                                            </div>
                                        </div>
                                        <div className='cells'>
                                            <div className='column-grid'>
                                                <div className='head '>
                                                    {tags?tags.length:0}
                                                </div>
                                                <div className='foot'>
                                                    tags
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ButtonGroup
                            buttons={['tags', 'questions']}
                            selected={sortType}
                            setSelected={setSortType}
                        />
            <div className='row-grid'>
                <div className='grid-cell1'>
                    <div className='cell-layout'>
                        <div className='community'>
                            <h3 className=''>
                                <span className='icon'>
                                    <svg aria-hidden='true' className='svg-icon native icon-logo-sex' width='18' height='18' viewBox='0 0 18 18'>
                                        <path d='M3 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2H3z' fill='#8FD8F7' />
                                        <path d='M15 11H3c0 1.1.9 2 2 2h5v3l3-3a2 2 0 0 0 2-2z' fill='#155397' />
                                        <path fill='#46A2D9' d='M3 5h12v2H3z' /><path fill='#2D6DB5' d='M3 8h12v2H3z' />
                                    </svg>
                                </span>
                                <span className='text fw-bold '>Communities</span>
                            </h3>
                            <ul>
                                <li className='item'><Link to='/'>
                                    <span><Logo className='logo' /></span>
                                    <span className='fc-blue-600 fs-body2'>Stack Overflow</span>
                                </Link></li>
                            </ul>
                        </div>
                        <div className='user-posts'>
                            <h3 className=''>
                                Top network posts
                        </h3>
                            <p className='fc-light'>
                                We respect a laser-like focus on one topic.
                        </p>
                        </div>
                    </div>
                </div>
                {sortType ==="tags" &&<div className='grid-cell2'>
                    <div className='top-tags'>
                        <h3 className='fw-bold'>
                            Top Tags
                    </h3>
                        <div className='top-tags-sec'>
                           {tags &&tags.map((v,i) =>
                           <div className='top-tags-cells'>
                                <div className='top-cell'>
                                    <div className='tag-cell '>
                                        <TagBadge
                                            tag_name={v.name}
                                            size={'s-tag s-tag__lg'}
                                            float={'left'}
                                        />
                                        <div className='score'>
                                            <div className='score-txt'>
                                                <div className='score-tab'>
                                                    <span className='txt fc-light'>Posts</span>
                                                    <span className='number'>{v.count}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           )} 
 </div>
                    </div>
                </div>
 }

{sortType ==="questions" &&<div className='grid-cell2'>
                    <div className='top-tags'>
                        <h3 className='fw-bold'>
                            Top Questions
                    </h3>
                        <div className='top-tags-sec'>
                           {questions &&questions.map(post =>
                             <PostItem key={post.content_license} post={post} />
                             )}
                         {/* )}  */}
 </div>
                    </div>
                </div>
 }
  </div>
        </div>
    </Fragment>
}
export default FeatureList;