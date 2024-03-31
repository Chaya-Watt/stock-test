import React from 'react'
import styles from './image.styles.module.css'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import DeleteIcon from '@mui/icons-material/Delete'
interface ImageComponentPropsType {
  imageName: string
  imageFile: string
  index: number
  onDelete?: (index: number) => void
  onMove?: (index: number) => void
  disableSwitch?: boolean
}

const ImageComponent = ({
  imageName,
  imageFile,
  index,
  onDelete,
  onMove,
  disableSwitch,
}: ImageComponentPropsType) => {
  return (
    <div
      className={`${styles.containerImageComponent} ${
        disableSwitch && styles.disabled
      }`}
    >
      <div className={`${styles.row}`}>
        <span>{imageName}</span>
        <div className={styles.row}>
          {!disableSwitch && (
            <>
              <div onClick={() => onDelete && onDelete(index)}>
                <DeleteIcon sx={{ color: 'red' }} />
              </div>
              <div onClick={() => onMove && onMove(index)}>
                <SwapHorizIcon />
              </div>
            </>
          )}
        </div>
      </div>
      <img alt="preview image" src={imageFile} className={styles.image} />
    </div>
  )
}

export default ImageComponent
