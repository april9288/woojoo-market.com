/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import { withRouter } from 'react-router-dom';

import { defaultPhoto100 } from '../../constants/defaultPhotos';
import {
    StyledFollowingsSection,
    StyledFollowingsCard
} from '../../containers/ProfilePrivate/styles';

const ProfileFollowers = ({
    follower,
    following,
    UnfollowFunc,
    FollowFunc,
    history
}) => {
    return (
        <StyledFollowingsSection>
            {follower.map(val => {
                // checking if my follower is someone who I'm following now.
                // if true, then the button will be 'Following...'
                // if false, then the button will be 'Follow'
                const result = following.filter(
                    item => item.followed === val.follower
                );

                return (
                    <StyledFollowingsCard
                        key={val.follower}
                        att={result.length}
                    >
                        <div
                            role="button"
                            onClick={() =>
                                history.push(`/profile/${val.user_public_id}`)
                            }
                        >
                            <img
                                alt={val.follower}
                                src={val.user_photo100 || defaultPhoto100}
                                width="100px"
                            />
                            <p>{val.email}</p>
                        </div>
                        <div>
                            {result.length === 1 ? (
                                // I'm already following this person
                                <button
                                    type="button"
                                    onClick={() => UnfollowFunc(val.follower)}
                                >
                                    Following
                                </button>
                            ) : (
                                // I'm not following this person.
                                // so, if I click it, then I will follow this person
                                <button
                                    type="button"
                                    onClick={() => FollowFunc(val.follower)}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </StyledFollowingsCard>
                );
            })}
        </StyledFollowingsSection>
    );
};

export default withRouter(ProfileFollowers);
