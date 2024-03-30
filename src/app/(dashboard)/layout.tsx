import CollapseComponent from '@/components/Collapse'
import Collapse from '@/components/Collapse'
import Sidebar from '@/components/Sidebar'
import { Container, Drawer } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send'

function DashboardLayout({ children }) {
  const list = [
    // <CollapseComponent
    //   key={'landing'}
    //   titleText={'Landing'}
    //   icon={<SendIcon />}
    //   isShowCollapseIcon={false}
    //   collapseItem={[{ title: '', key: '' }]}
    // />,
    // <CollapseComponent
    //   key={'shortList'}
    //   titleText={'Short List'}
    //   icon={<SendIcon />}
    //   isShowCollapseIcon={false}
    //   collapseItem={[{ title: '', key: '' }]}
    // />,
    <CollapseComponent
      key={'stocks'}
      titleText={'Stocks'}
      icon={<SendIcon />}
      collapseItem={[
        { title: 'Create Stock', key: 'createStock' },
        { title: 'Stock List', key: 'stockList' },
      ]}
    />,
    // <CollapseComponent
    //   key={'project'}
    //   titleText={'Project'}
    //   icon={<SendIcon />}
    //   isShowCollapseIcon={false}
    //   collapseItem={[{ title: '', key: '' }]}
    // />,
    // <CollapseComponent
    //   key={'customer'}
    //   titleText={'Customer'}
    //   icon={<SendIcon />}
    //   isShowCollapseIcon={false}
    //   collapseItem={[{ title: '', key: '' }]}
    // />,
    // <CollapseComponent
    //   key={'databases'}
    //   titleText={'Databases'}
    //   icon={<SendIcon />}
    //   isShowCollapseIcon={false}
    //   collapseItem={[{ title: '', key: '' }]}
    // />,
    // <CollapseComponent
    //   key={'setting'}
    //   titleText={'Setting'}
    //   icon={<SendIcon />}
    //   isShowCollapseIcon={false}
    //   collapseItem={[{ title: '', key: '' }]}
    // />,
  ]

  const drawerWidth = 240

  return (
    <div className='w-screen h-screen'>
      <nav className="flex-1">
        <Sidebar
          isOpen={true}
          listItemSidebar={list}
          minDrawerWidth={drawerWidth}
        />
      </nav>
      <div className='flex-1 ml-60 w-[calc(100%-240px)] h-full'>{children}</div>
    </div>
  )
}

export default DashboardLayout
