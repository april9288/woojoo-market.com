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
            {following.map(val => {
                return (
                    <StyledFollowingsCard key={val.followed}>
                        <div>
                            <img
                                alt={val.followed}
                                src={val.photo100 || defaultPhoto100}
                                width="100px"
                            />
                            <p>{val.followed}</p>
                        </div>
                        <div>
                            <button
                                type="button"
                                onClick={() => UnfollowFunc(val.followed)}
                            >
                                Following
                            </button>
                        </div>
                    </StyledFollowingsCard>
                );
            })}
        </StyledFollowingsSection>
    );
};

export default withRouter(ProfileFollowers);
