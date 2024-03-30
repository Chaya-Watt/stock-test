import Image from 'next/image'
import BasicButton from '../components/Button/BasicButton'
import TextWithIcon from '@/components/GroupText/TextWithIcon'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-amber-700">
      <Link href={'/stocks'}>Go to Stocks</Link>
    </main>
  )
}
