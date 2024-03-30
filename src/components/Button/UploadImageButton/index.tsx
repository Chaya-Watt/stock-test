'use client'

import { Button } from '@mui/material'
import React, { useRef } from 'react'

interface UploadImageButtonPropsType {
  title: string
  onSelect?: (images: File[]) => void
}

const UploadImageButton = ({ title, onSelect }: UploadImageButtonPropsType) => {
  const inputAddImage = useRef(null)

  const handleClickButton = () => {
    inputAddImage.current && inputAddImage.current.click()
  }

  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileUploaded = event.target.files
      const selectFilesArray = Array.from(fileUploaded)
      onSelect && onSelect(selectFilesArray)
    }
  }

  return (
    <div>
      <Button
        variant="contained"
        className="bg-black"
        onClick={handleClickButton}
      >
        {title}
      </Button>
      <input
        ref={inputAddImage}
        onChange={(e) => handleChangeImage(e)}
        name="images"
        type="file"
        accept="image/png, image/jpeg"
        multiple
        style={{ display: 'none' }}
      />
    </div>
  )
}

export default UploadImageButton
