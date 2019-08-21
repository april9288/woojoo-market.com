/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { ApiDeletePost } from '../../api/deletePost';

import {
    StyledBottomSubSection,
    StyledPostCard,
    StyledPostCardContent,
    StyledPostCardButtons
} from '../../containers/ProfilePrivate/styles';

const ProfilePostList = ({ postList, publicProfile, history }) => {
    const [deletedList, setdeletedList] = useState([]);

    const EditPost = () => {
        alert('Sorry!. Still working on it...');
    };

    const DeletePostFunc = uuid => {
        ApiDeletePost(
            axios,
            'delete',
            `/api/deletePost/${uuid}`,
            null,
            null,
            deletedList,
            setdeletedList
        );
    };

    return (
        <StyledBottomSubSection>
            {postList.map(val => {
                const { uuid, photo400, title, price, status } = val;
                const deleted = deletedList.includes(uuid) ? 'yes' : 'no';

                return (
                    <StyledPostCard key={title}>
                        <img
                            src={photo400}
                            alt={title}
                            width="300px"
                            onClick={() => history.push(`/feed/${uuid}`)}
                        />
                        <StyledPostCardContent>
                            <h5>{status}</h5>
                            <p>{title}</p>
                            <p>{`$${price}`}</p>

                            {!publicProfile && (
                                <Fragment>
                                    <StyledPostCardButtons
                                        type="button"
                                        onClick={EditPost}
                                    >
                                        Edit
                                    </StyledPostCardButtons>
                                    <StyledPostCardButtons
                                        type="button"
                                        onClick={() => DeletePostFunc(uuid)}
                                        deleted={deleted}
                                    >
                                        {deleted === 'yes' ? (
                                            <span>Deleted</span>
                                        ) : (
                                            <span>Delete</span>
                                        )}
                                    </StyledPostCardButtons>
                                </Fragment>
                            )}
                        </StyledPostCardContent>
                    </StyledPostCard>
                );
            })}
        </StyledBottomSubSection>
    );
};

export default withRouter(ProfilePostList);
