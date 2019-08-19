import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ApiFeed } from '../../api/feed';
import ProfilePrivateTop from '../../components/ProfilePrivateTop';
import ProfilePostList from '../../components/ProfilePostList';
// import ChangePassword from '../../components/ProfileChangePassword';
// import DeleteAccount from '../../components/ProfileDeleteAccount';
import { defaultMenu } from './default';
import {
    StyledSection,
    StyledTopSection,
    StyledMenuSection,
    StyledMenuButton,
    StyledBottomSection
} from './styles';

const defaultPostState = [];

const defaultFollowingState = {
    followingList: [],
    followerList: []
};

const ProfilePrivate = () => {
    const [menu, setMenu] = useState('Posts');
    const [post, setPost] = useState(defaultPostState);
    const [following, setFollowing] = useState(defaultFollowingState);

    const counts = {
        Posts: post.length || 0,
        Followers: following.followingList.length || 0,
        Following: following.followerList.length || 0
    };

    console.log('post >>> ', post);

    useEffect(() => {
        ApiFeed(
            axios,
            'get',
            '/api/listPost/private',
            null,
            null,
            post,
            setPost,
            null,
            null
        );
    }, []);

    let bottomSection;
    switch (menu) {
        case 'Posts':
            bottomSection = <ProfilePostList postList={post} />;
            break;
        case 'Followers':
            bottomSection = <h1>...Followers</h1>;
            break;
        case 'Following':
            bottomSection = <h1>...Following</h1>;
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
            <StyledTopSection>
                <ProfilePrivateTop />
            </StyledTopSection>
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
            <StyledBottomSection>{bottomSection}</StyledBottomSection>
        </StyledSection>
    );
};

export default ProfilePrivate;
