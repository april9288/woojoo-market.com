import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { ApiCreatePost } from '../../api/createPost';

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

const defaultPost = {
    image: null,
    title: '',
    description: '',
    category: '',
    brand: '',
    price: 0,
    success: false,
    error: null
};

const FeedDetail = ({ history }) => {
    const [post, setPost] = useState(defaultPost);
    const [preview, setPreview] = useState(null);
    const { image, success, error } = post;

    // when the feed is successfully posted, then it'll redirect the user to the detail page
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

            // makeing an Ajax request via axios
            ApiCreatePost(axios, formData, post, setPost);
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

            {['Title', 'Description', 'Category', 'Brand', 'Price'].map(
                item => {
                    return (
                        <StyledSubSection key={item}>
                            <StyledKey>{item}</StyledKey>
                            <StyledInput att={item}>
                                <input
                                    type="text"
                                    value={post[item.toLowerCase()]}
                                    required={true}
                                    onChange={e =>
                                        setPost({
                                            ...post,
                                            [item.toLowerCase()]: e.target.value
                                        })
                                    }
                                />
                            </StyledInput>
                        </StyledSubSection>
                    );
                }
            )}
            <StyledButton>
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </StyledButton>
        </StyledSection>
    );
};

export default withRouter(FeedDetail);
