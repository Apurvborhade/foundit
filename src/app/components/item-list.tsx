'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, Tag } from 'lucide-react'
import { motion } from 'framer-motion'

interface Item {
  id: number
  type: 'lost' | 'found'
  title: string
  description: string
  location: string
  date: string
  category: string
  image: string
}

const items: Item[] = [
  {
    id: 1,
    type: 'lost',
    title: 'MacBook Pro',
    description: 'Silver 13-inch MacBook Pro with stickers on the cover',
    location: 'Central Library, 2nd floor',
    date: '2023-05-15',
    category: 'Electronics',
    image: '/placeholder.jpg'
  },
  {
    id: 2,
    type: 'found',
    title: 'Blue Umbrella',
    description: 'Compact blue umbrella with a wooden handle',
    location: 'Bus Stop on Main Street',
    date: '2023-05-14',
    category: 'Accessories',
    image: '/placeholder.jpg?height=200&width=300'
  },
  {
    id: 3,
    type: 'lost',
    title: 'Leather Wallet',
    description: 'Brown leather wallet with initials "JS" embossed',
    location: 'Downtown Cafe',
    date: '2023-05-13',
    category: 'Accessories',
    image: '/placeholder.jpg?height=200&width=300'
  },
]

export default function ItemList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Link href={`/item/${item.id}`}>
            <Card className="overflow-hidden transition-shadow hover:shadow-lg">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="bg-muted">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <Badge variant={item.type === 'lost' ? 'destructive' : 'default'}>
                    {item.type === 'lost' ? 'Lost' : 'Found'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin size={16} className="mr-2" />
                    {item.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar size={16} className="mr-2" />
                    {item.date}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Tag size={16} className="mr-2" />
                    {item.category}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

