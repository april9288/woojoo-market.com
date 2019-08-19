import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ApiProfile } from '../../api/profile';
import { defaultInputs } from '../../containers/SettingContainer/default';
import { defaultPhoto400 } from '../../constants/defaultPhotos';
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
    StyledButton,
    StyledInforming
} from '../../containers/SettingContainer/styles';

const ProfileEdit = () => {
    const [profile, setProfile] = useState('');
    const [preview, setPreview] = useState(null);
    const { photo400, error, status } = profile;

    useEffect(() => {
        // involking the function only once
        if (profile.length === 0) {
            ApiProfile(
                axios,
                'get',
                '/api/profile',
                null,
                profile,
                setProfile,
                null
            );
        }
    }, []);

    useEffect(() => {
        // updating the profile photo only when the data is retrived from the server
        setPreview(photo400);
    }, [status]);

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
            ApiProfile(
                axios,
                'post',
                '/api/editProfile',
                formData,
                profile,
                setProfile,
                null
            );
        }
    };

    // eslint-disable-next-line consistent-return
    const handleSuccessMessage = result => {
        if (result === 'updated') {
            return (
                <StyledInforming>
                    You&apos;ve successfully updated your profile
                </StyledInforming>
            );
        }
    };

    return (
        <StyledRightSection>
            <p>Edit Profile</p>
            {handleSuccessMessage(status)}
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
                            src={defaultPhoto400}
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
