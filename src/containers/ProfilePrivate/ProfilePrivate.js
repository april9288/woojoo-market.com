import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ApiFeed } from '../../api/feed';
import { ApiProfile } from '../../api/profile';
import ProfileDisplayTop from '../../components/ProfileDisplayTop';
import ProfilePostList from '../../components/ProfilePostList';
import ProfileFollowers from '../../components/ProfileFollowers';
import ProfileFollowing from '../../components/ProfileFollowing';
import { defaultMenu } from './default';
import {
    StyledSection,
    StyledMenuSection,
    StyledMenuButton,
    StyledBottomSection
} from './styles';

const defaultPostState = [];

const defaultFollowingState = {
    follower: [],
    following: []
};

const ProfilePrivate = () => {
    const [menu, setMenu] = useState('Posts');
    const [post, setPost] = useState(defaultPostState);
    const [following, setFollowing] = useState(defaultFollowingState);

    // console.log('Followings DB Data : ', following);

    const counts = {
        Posts: post.length || 0,
        Followers: following.follower.length || 0,
        Following: following.following.length || 0
    };

    console.log('list of posts >>> ', post);

    const DeletePost = id => {
        ApiFeed(
            axios,
            'delete',
            `/api/deletePost/${id}`,
            null,
            null,
            post,
            setPost,
            null,
            null
        );
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
            following,
            setFollowing,
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
            following,
            setFollowing,
            null
        );
    };

    useEffect(() => {
        if (post.length === 0) {
            // retrieving list of posts
            ApiFeed(
                axios,
                'get',
                '/api/listPost/me',
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
                '/api/following/me',
                null,
                following,
                setFollowing,
                null
            );
        }
    }, []);

    let bottomSection;
    switch (menu) {
        case 'Posts':
            bottomSection = (
                <ProfilePostList postList={post} DeletePost={DeletePost} />
            );
            break;
        case 'Followers':
            bottomSection = (
                <ProfileFollowers
                    {...following}
                    UnfollowFunc={UnfollowFunc}
                    FollowFunc={FollowFunc}
                />
            );
            break;
        case 'Following':
            bottomSection = (
                <ProfileFollowing
                    {...following}
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
            <ProfileDisplayTop me={true} />
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
            </StyledMenuSection>
            {/* <StyledBottomSection>{bottomSection}</StyledBottomSection> */}
        </StyledSection>
    );
};

export default ProfilePrivate;
