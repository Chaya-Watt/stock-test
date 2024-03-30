import { Drawer } from '@mui/material'
import React from 'react'

interface SidebarPropsType {
  isOpen: boolean
  onClose?: () => void
  anchor?: 'left' | 'right' | 'top' | 'bottom'
  listItemSidebar: React.ReactNode
  minDrawerWidth?: number
}

const Sidebar = ({
  isOpen,
  onClose,
  anchor,
  listItemSidebar,
  minDrawerWidth = 240,
}: SidebarPropsType) => {
  return (
    <Drawer
      PaperProps={{
        sx: { width: minDrawerWidth, display:'flex', flexDirection:'column', backgroundColor:'#F6F6F6', paddingLeft:1, paddingRight:1 },
      }}
      open={isOpen}
      onClose={onClose}
      anchor={anchor}
      variant="permanent"
    >
      {listItemSidebar}
    </Drawer>
  )
}

export default Sidebar
