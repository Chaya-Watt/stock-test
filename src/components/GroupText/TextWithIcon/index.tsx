import {
  ListItemButton as GroupItem,
  ListItemIcon as IconItem,
  ListItemText as TextItem,
} from '@mui/material'
import React from 'react'

interface TextWithIcon {
  text: string
  iconLeft?: React.ReactNode
  onClick?: (e: unknown) => void
  iconRight?: React.ReactNode
  textColor?: string
  iconColor?: string
}

const TextWithIcon = ({
  text,
  iconLeft,
  onClick,
  iconRight,
  textColor = '#0D0D0D',
  iconColor,
}: TextWithIcon) => {
  return (
    <GroupItem className="flex justify-between items-center" onClick={onClick}>
      <div className="flex gap-x-2.5">
        {iconLeft && (
          <div className="w-8 h-8 rounded-full bg-zinc-300 justify-center items-center flex">
            <IconItem className="icon-back min-w-0">{iconLeft}</IconItem>
          </div>
        )}
        <TextItem style={{ color: textColor }} primary={text} />
      </div>
      <div className="w-8 h-8">{iconRight && iconRight}</div>
    </GroupItem>
  )
}

export default TextWithIcon
