import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LostIcon, FoundIcon } from './custom-icons'

export default function ReportButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button asChild size="lg" className="w-full sm:w-auto transition-transform hover:scale-105">
        <Link href="/report/lost" className="flex items-center justify-center">
          <LostIcon className="mr-2 h-5 w-5" />
          Report Lost Item
        </Link>
      </Button>
      <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto transition-transform hover:scale-105">
        <Link href="/report/found" className="flex items-center justify-center">
          <FoundIcon className="mr-2 h-5 w-5" />
          Report Found Item
        </Link>
      </Button>
    </div>
  )
}

