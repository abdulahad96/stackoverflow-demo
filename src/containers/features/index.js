import React, { Fragment, useState, useEffect } from 'react';
import LinkButton from '../../components/LinkButton/LinkButton.component';
import PostItem from '../../components/PostItem/PostItem.component';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup.component';
import { getAllQuestions } from '../../config/simpleApiCalls'
import "./styles.css";
const Features = ({ }) => {
    const [sortType, setSortType] = useState('Newest');
    const [featurePost, setFeaturePost] = useState(null)
    useEffect(async () => {
        // try {
            const res = await getAllQuestions();
            setFeaturePost(res?.data?.items)
        // } catch (err) {
        //     console.log(err, "errr")
        // }
    }, [])
    
    return <Fragment>
        <div id='mainbar' className='homepage'>
            <div className='questions-grid'>
                <h3 className='questions-headline'>Top Questions</h3>
                <div className="questions-btn">

                    <span>
                        <ButtonGroup
                            buttons={['Newest', 'Top', 'Views', 'Oldest']}
                            selected={sortType}
                            setSelected={setSortType}
                        />
                    </span>
                    <LinkButton
                        text={'Ask Question'}
                        link={'/add/question'}
                        type={'s-btn__primary'}
                    />
                </div>
            </div>
            <div className='questions-tabs'>
                <span>{featurePost && featurePost.length} questions</span>

            </div>
            <div className='questions'>
                {featurePost && featurePost.map(post => (
                    <PostItem key={post.content_license} post={post} />
                ))}
            </div>
        </div>
    </Fragment>
}
export default Features;