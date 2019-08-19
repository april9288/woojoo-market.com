/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    StyledBottomSubSection,
    StyledPostCard,
    StyledPostCardContent
} from '../../containers/ProfilePrivate/styles';

const ProfilePostList = ({ postList, DeletePost, history }) => {
    const EditPost = () => {
        alert('Sorry!. Still working on it...');
    };

    return (
        <StyledBottomSubSection>
            {postList.map(val => {
                const { id, photo400, title, price } = val;
                return (
                    <StyledPostCard key={title}>
                        <img
                            src={photo400}
                            alt={title}
                            width="300px"
                            onClick={() => history.push(`/feed/${id}`)}
                        />
                        <StyledPostCardContent>
                            <p>Status: On Sale</p>
                            <p>{title}</p>
                            <p>{`$${price}`}</p>
                            <button type="button" onClick={EditPost}>
                                Edit
                            </button>
                            <button
                                type="button"
                                onClick={() => DeletePost(id)}
                            >
                                Delete
                            </button>
                        </StyledPostCardContent>
                    </StyledPostCard>
                );
            })}
        </StyledBottomSubSection>
    );
};

export default withRouter(ProfilePostList);
