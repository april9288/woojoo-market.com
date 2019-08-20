import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { ApiCreatePost } from '../../api/createPost';
import { defaultPost, defaultInputs } from './default';
import {
    StyledSection,
    StyledSubSection,
    StyledKey,
    StyledInput,
    StyledButton,
    StyledPhotoKey,
    StyledUploadButton,
    StyledPreview,
    StyledDeleteButton,
    StyledWarning
} from './styles';

const FeedDetail = ({ history }) => {
    const [post, setPost] = useState(defaultPost);
    const [preview, setPreview] = useState(null);
    const { image, success, error, loading } = post;

    // when the feed is successfully posted, then it'll redirect the user to the detail page
    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (success) {
            return history.push(`/feed/${success}`);
        }
    }, [success]);

    const handleFile = e => {
        setPost({
            ...post,
            image: e.target.files[0]
        });

        // setting preview image
        setPreview(URL.createObjectURL(e.target.files[0]));
    };

    const DeleteFile = () => {
        // deleting image file in 'post' state
        setPost({
            ...post,
            image: null
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
            const data = Object.keys(post);
            data.forEach(key => formData.append(key, post[key]));

            //
            setPost({
                ...post,
                loading: true
            });

            // makeing an Ajax request via axios
            ApiCreatePost(axios, formData, post, setPost);
        }
    };

    const handleInputField = item => {
        const { type, db, placeholder } = item;
        if (db === 'category') {
            return (
                <select
                    value={post[db]}
                    onChange={e =>
                        setPost({
                            ...post,
                            [db]: e.target.value
                        })
                    }
                >
                    <option value="Select a Category">Select a Category</option>
                    <option value="drones">drones</option>
                    <option value="watches">watches</option>
                    <option value="headphones">headphones</option>
                    <option value="game">game</option>
                    <option value="cameras">cameras</option>
                    <option value="robots">robots</option>
                    <option value="hobbies">hobbies</option>
                    <option value="computers">computers</option>
                    <option value="electronics">electronics</option>
                    <option value="etc">etc</option>
                </select>
            );
        } else if (db === 'condition') {
            return (
                <select
                    value={post[db]}
                    onChange={e =>
                        setPost({
                            ...post,
                            [db]: e.target.value
                        })
                    }
                >
                    <option value="new">new</option>
                    <option value="used - like new">used - like new</option>
                    <option value="used - very good">used - very good</option>
                    <option value="used - good">used - good</option>
                </select>
            );
        } else {
            // eslint-disable-next-line consistent-return
            return (
                <input
                    type={type}
                    value={post[db]}
                    required={true}
                    placeholder={placeholder}
                    onChange={e =>
                        setPost({
                            ...post,
                            [db]: e.target.value
                        })
                    }
                />
            );
        }
    };

    return (
        <StyledSection>
            <StyledSubSection>
                <StyledPhotoKey>
                    Photo
                    <input
                        type="file"
                        name="uploadfile"
                        id="image"
                        onChange={handleFile}
                    />
                    <StyledUploadButton type="button">
                        <label htmlFor="image">Upload</label>
                    </StyledUploadButton>
                    {image && (
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
                        <input
                            type="text"
                            required
                            placeholder="must be either jpg or png format"
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
                const { field } = item;
                return (
                    <StyledSubSection key={field}>
                        <StyledKey>{field}</StyledKey>
                        <StyledInput att={field}>
                            {handleInputField(item)}
                        </StyledInput>
                    </StyledSubSection>
                );
            })}
            <StyledButton>
                <button type="button" onClick={handleSubmit}>
                    {loading ? 'Loading...' : 'Submit'}
                </button>
            </StyledButton>
        </StyledSection>
    );
};

export default withRouter(FeedDetail);
