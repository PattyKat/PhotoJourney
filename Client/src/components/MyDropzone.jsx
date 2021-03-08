/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';

function MyDropzone({ storePhoto }) {
  const onDrop = useCallback((acceptedFiles) => {
    storePhoto(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} id="dropContainer">
      <input {...getInputProps()} />
      {
        isDragActive
          ? <p>Drop the files here ...</p>
          : <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  );
}

MyDropzone.propTypes = {
  storePhoto: PropTypes.func.isRequired,
};

export default MyDropzone;
