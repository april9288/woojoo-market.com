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
    groupA,
    following,
    UnfollowFunc,
    FollowFunc,
    history
}) => {
    return (
        <StyledFollowingsSection>
            {following.map(val => {
                let commonGroup = [];
                if (groupA) {
                    commonGroup = groupA.filter(
                        item => item.followed === val.followed
                    );
                }

                return (
                    <StyledFollowingsCard
                        key={val.followed}
                        att={commonGroup.length}
                        att2={!groupA}
                    >
                        <div
                            role="button"
                            onClick={() =>
                                history.push(`/profile/${val.user_public_id}`)
                            }
                        >
                            <img
                                alt={val.followed}
                                src={val.user_photo100 || defaultPhoto100}
                                width="100px"
                            />
                            <p>{val.email}</p>
                        </div>
                        <div>
                            {!groupA ? (
                                <button
                                    type="button"
                                    onClick={() => UnfollowFunc(val.followed)}
                                >
                                    Following
                                </button>
                            ) : commonGroup.length === 1 ? (
                                <button
                                    type="button"
                                    onClick={() => UnfollowFunc(val.followed)}
                                >
                                    Following
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => FollowFunc(val.followed)}
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
