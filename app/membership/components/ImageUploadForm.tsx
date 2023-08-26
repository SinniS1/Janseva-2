/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

const ImageUploadForm: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | undefined>(
    undefined
  );
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0];
    if (imageFile) {
      setSelectedImage(imageFile);
      setPreviewUrl(URL.createObjectURL(imageFile));
    }
  };

  return (
    <>
      <div className="flex items-center">
        <input type="file" accept=".jpg,.jpeg" onChange={handleImageChange} />
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Preview"
            style={{
              maxWidth: "70px",
              maxHeight: "40px",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          />
        )}
      </div>
    </>
  );
};

export default ImageUploadForm;
