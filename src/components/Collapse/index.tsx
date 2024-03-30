'use client' // This is a client component 👈🏽

import { Collapse, List } from '@mui/material'
import React, { useState } from 'react'
import TextWithIcon from '../GroupText/TextWithIcon'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import './Collapse.styled.css'

interface CollapseComponentPropsType {
  titleText: string
  icon: React.ReactNode
  isShowCollapseIcon?: boolean
  collapseItem: { title: string; key: string; onClick?: () => void }[]
}

const CollapseComponent = ({
  titleText,
  icon,
  collapseItem,
  isShowCollapseIcon = true,
}: CollapseComponentPropsType) => {
  const [isOpen, setIsOpen] = useState(false)
  const isActive = isOpen
  const iconCollapse = isOpen ? (
    <ExpandLess className="icon-back w-8 h-8" />
  ) : (
    <ExpandMore className="icon-back w-8 h-8" />
  )

  return (
    <>
      <div
        className={`collapse-container hover:bg-zinc-300 rounded-md	p-1.5 ${
          isActive && 'active'
        }`}
      >
        <TextWithIcon
          text={titleText}
          iconLeft={icon}
          textColor={isActive? '#FFFFFF' : '#0D0D0D'}
          // onClick={() => setIsOpen(!isOpen)}
          {...(isShowCollapseIcon && { onClick: () => setIsOpen(!isOpen) })}
          {...(isShowCollapseIcon && { iconRight: iconCollapse })}
        />
      </div>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {collapseItem.map((item) => (
            <TextWithIcon key={item.key} text={item.title} />
          ))}
        </List>
      </Collapse>
    </>
  )
}

export default CollapseComponent
