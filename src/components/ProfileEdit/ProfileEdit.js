import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ApiProfile } from '../../api/profile';
import { defaultInputs } from '../../containers/ProfilePrivate/default';

import {
    StyledRightSection,
    StyledSubSection,
    StyledPhotoKey,
    StyledUploadButton,
    StyledDeleteButton,
    StyledPreview,
    StyledWarning,
    StyledCell,
    StyledKey,
    StyledInput,
    StyledButton
} from '../../containers/ProfilePrivate/styles';

const ProfileEdit = () => {
    const [profile, setProfile] = useState({});
    const [preview, setPreview] = useState(null);
    const { photo400, error } = profile;

    console.log('profile!! >>> ', profile);

    useEffect(() => {
        ApiProfile(
            axios,
            'get',
            '/api/profile/private',
            null,
            profile,
            setProfile,
            null
        );
    }, []);

    const handleFile = e => {
        setProfile({
            ...profile,
            photo400: e.target.files[0]
        });

        // setting preview image
        setPreview(URL.createObjectURL(e.target.files[0]));
    };

    const DeleteFile = () => {
        // deleting image file in 'post' state
        setProfile({
            ...profile,
            photo400: null
        });

        // deleting preview
        setPreview(null);
    };

    const firstValidation = () => {
        // for now, it returns true
        return true;
    };

    const handleSubmit = e => {
        e.preventDefault();

        // checking user inputs
        const firstValidationResult = firstValidation();

        // if all passes in the validation, then send an Ajax request
        if (firstValidationResult) {
            // creating a new form-data object
            const formData = new FormData();

            // get all the key values in 'post' state
            const data = Object.keys(profile);
            data.forEach(key => formData.append(key, profile[key]));

            // makeing an Ajax request via axios
            // ApiCreatePost(axios, formData, post, setPost);
        }
    };

    return (
        <StyledRightSection>
            <p>Edit Profile</p>

            <StyledSubSection>
                <StyledPhotoKey>
                    Profile Photo
                    <input
                        type="file"
                        name="uploadfile"
                        id="image"
                        onChange={handleFile}
                    />
                    <StyledUploadButton type="button">
                        <label htmlFor="image">Upload</label>
                    </StyledUploadButton>
                    {photo400 && (
                        <StyledDeleteButton type="button" onClick={DeleteFile}>
                            Delete
                        </StyledDeleteButton>
                    )}
                </StyledPhotoKey>

                <StyledPreview>
                    {preview ? (
                        <img
                            src={preview}
                            alt="preview"
                            width="400"
                            height="400"
                        />
                    ) : (
                        <img
                            src="https://woojoo.s3-us-west-1.amazonaws.com/profile400.webp"
                            alt="preview"
                            width="400"
                            height="400"
                        />
                    )}
                    {error === 'file format' ? (
                        <StyledWarning>
                            Invalid File Format: Must be jpg, png or webp
                        </StyledWarning>
                    ) : (
                        error === 'empty file' && (
                            <StyledWarning>Photo is empty</StyledWarning>
                        )
                    )}
                </StyledPreview>
            </StyledSubSection>

            {defaultInputs.map(item => {
                const { title, type, db, placeholder, ERROR_MESSAGE } = item;
                return (
                    <StyledCell key={db}>
                        <StyledKey>{title}</StyledKey>
                        <StyledInput att={db}>
                            <input
                                type={type}
                                placeholder={placeholder}
                                value={profile[db] ? profile[db] : ''}
                                onChange={e =>
                                    setProfile({
                                        ...profile,
                                        [db]: e.target.value
                                    })
                                }
                            />
                        </StyledInput>
                    </StyledCell>
                );
            })}
            <StyledButton>
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </StyledButton>
        </StyledRightSection>
    );
};

export default ProfileEdit;
