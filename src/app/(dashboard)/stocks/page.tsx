'use client'

import UploadImageButton from '@/components/Button/UploadImageButton'
import React, { useState } from 'react'

const StocksDashboard = () => {
  const [imageList, setImageList] = useState<File[]>([])

  return (
    <div
      style={{ backgroundColor: '#F6F6F6', padding: 20 }}
      className="w-full h-full bg-slate-500"
    >
      <div
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: 100,
          padding: 10,
          borderRadius: 16,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 20, fontWeight: 500 }}>Upload Images</span>
            <span style={{ fontSize: 14, fontWeight: 400, color: '#6D6D6D' }}>
              Click to upload. Max file size is 5 MB. Supported file types are
              .jpg, and .png.
            </span>
          </div>
          <UploadImageButton
            title={'Upload'}
            onSelect={(fileList) => {
              setImageList((prev) => [...prev, ...fileList])
            }}
          />
        </div>
        {imageList.map((item) => {
          const image = URL.createObjectURL(item)
          return <img alt="preview image" src={image} key={item} />
        })}
      </div>
    </div>
  )
}

export default StocksDashboard

// <label className='containerButtonAddImage'>
//   <p>
//     +
//     <br />
//     Add Image
//   </p>
//   <input
//     type='file'
//     name='images'
//     multiple
//     onChange={onChange}
//     accept='image/png, image/jpeg, image/webp'
//     style={{ display: 'none' }}
//   />
// </label>
