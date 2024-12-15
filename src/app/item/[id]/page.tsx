"use client"

import Image from 'next/image'
import Link from 'next/link'
import { notFound, useSearchParams } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Calendar, Tag, ArrowLeft } from 'lucide-react'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import { useRouter } from 'next/navigation'

// This would typically come from a database or API


export default function ItemDetail() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const items = useSelector((state: RootState) => state.items.items);
  const item = items.find(i => i.id === id)

  if (!item) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-primary hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all items
      </Link>
      <Card className="overflow-hidden">
        <Image
          src={'/placeholder.jpg'}
          alt={item.name}
          width={600}
          height={400}
          className="w-full h-64 object-cover"
        />
        <CardHeader className="bg-muted">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl">{item.name}</CardTitle>
            <Badge variant={item.status === 'LOST' ? 'destructive' : 'default'} className="text-lg py-1 px-3">
              {item.status === 'LOST' ? 'LOST' : 'Found'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <p className="text-muted-foreground">{item.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground">
                <MapPin size={18} className="mr-2" />
                {item.location}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Calendar size={18} className="mr-2" />
                {item.date}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Tag size={18} className="mr-2" />
                {item.category}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contact Information</h3>
              <p className="text-muted-foreground">{item.contactInfo}</p>
            </div>
          </div>
          <Button className="w-full md:w-auto">
            {item.status === 'LOST' ? 'I found this item' : 'This is my item'}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

