'use client'

import UploadImageButton from '@/components/Button/UploadImageButton'
import ImageComponent from '@/components/Image'
import React, { useEffect, useState } from 'react'
import styles from './stocks.styles.module.css'
import { arrayMove, swapElements } from '@/util'

const StocksDashboard = () => {
  const [imageList, setImageList] = useState<File[]>([])
  const [moveIndex, setMoveIndex] = useState<{ from?: number; to?: number }>({
    from: undefined,
    to: undefined,
  })

  useEffect(() => {
    if (moveIndex.from !== undefined && moveIndex.to !== undefined) {
      const newList = arrayMove(imageList, moveIndex.from, moveIndex.to)

      setImageList(newList)
      setMoveIndex({
        from: undefined,
        to: undefined,
      })
    }
  }, [moveIndex])

  return (
    <div className={styles.containerStockContent}>
      <div className={styles.containerUploadImages}>
        <div className={styles.containerHeaderUploadImages}>
          <div className={styles.groupTextHeader}>
            <span className={styles.textHeader}>Upload Images</span>
            <span className={styles.textDescription}>
              Click to upload. Max file size is 5 MB. Supported file types are
              .jpg, and .png.
            </span>
          </div>
          <div>
            <UploadImageButton
              title={'Upload'}
              onSelect={(fileList) => {
                setImageList((prev) => [...prev, ...fileList])
              }}
            />
          </div>
        </div>
        {imageList.length > 0 && (
          <div className={styles.containerListImageUpload}>
            {imageList.map((item, index) => {
              const image = URL.createObjectURL(item)
              return (
                <ImageComponent
                  imageFile={image}
                  imageName={'test'}
                  key={`${item.name}_${index}`}
                  index={index}
                  onDelete={(deletedIndex) =>
                    setImageList((prev) =>
                      prev.filter((_, index) => index !== deletedIndex)
                    )
                  }
                  onMove={(index) => {
                    const from = moveIndex.from
                    const to = moveIndex.to

                    if (from === undefined) {
                      setMoveIndex((prev) => ({ ...prev, from: index }))
                    } else {
                      setMoveIndex((prev) => ({ ...prev, to: index }))
                    }
                  }}
                />
              )
            })}
          </div>
        )}
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
