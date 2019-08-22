import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { ApiFeed } from '../../api/feed';
import { ApiProfile } from '../../api/profile';
import ProfileDisplayTop from '../../components/ProfileDisplayTop';
import ProfilePostList from '../../components/ProfilePostList';
import ProfileFollowers from '../../components/ProfileFollowers';
import ProfileFollowing from '../../components/ProfileFollowing';
import FollowButton from '../../components/FollowButton';
import {
    defaultMenu,
    defaultPostState,
    defaultFollowingState
} from '../ProfilePrivate/default';
import {
    StyledSection,
    StyledMenuSection,
    StyledMenuButton,
    StyledBottomSection
} from '../ProfilePrivate/styles';

const ProfilePublic = ({ match }) => {
    const { uuid } = match.params;
    const [menu, setMenu] = useState('Posts');
    const [post, setPost] = useState(defaultPostState);
    const [following, setFollowing] = useState(defaultFollowingState);
    const [myFollowing, setMyFollowing] = useState(defaultFollowingState);

    const counts = {
        Posts: post.length || 0,
        Followers: following.follower.length || 0,
        Following: following.following.length || 0
    };

    const UnfollowFunc = followed => {
        // unfollowing the person I followed
        ApiProfile(
            axios,
            'delete',
            '/api/following',
            {
                followed
            },
            myFollowing,
            setMyFollowing,
            null
        );
    };

    const FollowFunc = followed => {
        ApiProfile(
            axios,
            'post',
            '/api/following',
            {
                followed
            },
            myFollowing,
            setMyFollowing,
            null
        );
    };

    useEffect(() => {
        // retrieving list of posts
        ApiFeed(
            axios,
            'get',
            `/api/listPost/${uuid}`,
            null,
            null,
            post,
            setPost,
            null,
            null
        );

        // retrieving list of followers and following
        ApiProfile(
            axios,
            'get',
            `/api/following/${uuid}`,
            null,
            following,
            setFollowing,
            null
        );

        // retrieving list of followers and following
        ApiProfile(
            axios,
            'get',
            '/api/following/me',
            null,
            myFollowing,
            setMyFollowing,
            null
        );
    }, [uuid]);

    let bottomSection;
    switch (menu) {
        case 'Posts':
            bottomSection = (
                <ProfilePostList postList={post} publicProfile={true} />
            );
            break;
        case 'Followers':
            bottomSection = (
                <ProfileFollowers
                    follower={following.follower}
                    following={myFollowing.following}
                    UnfollowFunc={UnfollowFunc}
                    FollowFunc={FollowFunc}
                />
            );
            break;
        case 'Following':
            bottomSection = (
                <ProfileFollowing
                    groupA={myFollowing.following}
                    following={following.following}
                    UnfollowFunc={UnfollowFunc}
                    FollowFunc={FollowFunc}
                />
            );
            break;
        default:
            bottomSection = null;
            break;
    }

    const changeMenu = e => {
        // changing menu
        setMenu(e);
    };

    return (
        <StyledSection>
            <ProfileDisplayTop publicProfile={true} publicUUID={uuid} />
            <StyledMenuSection>
                {defaultMenu.map(oneMenu => (
                    <StyledMenuButton
                        type="button"
                        key={oneMenu}
                        att={menu}
                        name={oneMenu}
                        onClick={() => changeMenu(oneMenu)}
                    >
                        {`${oneMenu} : ${counts[oneMenu]}`}
                    </StyledMenuButton>
                ))}
                <FollowButton
                    groupA={myFollowing.following}
                    publicUUID={uuid}
                    UnfollowFunc={UnfollowFunc}
                    FollowFunc={FollowFunc}
                />
            </StyledMenuSection>
            <StyledBottomSection>{bottomSection}</StyledBottomSection>
        </StyledSection>
    );
};

export default withRouter(ProfilePublic);
