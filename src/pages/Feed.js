import React, { useState } from 'react';
import axios from 'axios';
// import { Route, Link } from 'react-router-dom';

import { ApiUploadImage } from '../api/uploadImage';

const Feed = () => {
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');

    const handleFile = e => {
        setImage(e.target.files[0]);
        setPreviewImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        ApiUploadImage(axios, formData);
    };

    return (
        <section>
            <h1>Feed Page!!!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="file" id="image" onChange={handleFile} />
                </div>
                <button type="submit">Upload</button>
            </form>
            <img src={previewImage} alt="" width="250" height="250" />
        </section>
    );
};

export default Feed;
