import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Calendar, Tag, ArrowLeft } from 'lucide-react'

// This would typically come from a database or API
const items = [
  {
    id: 1,
    type: 'lost',
    title: 'MacBook Pro',
    description: 'Silver 13-inch MacBook Pro with stickers on the cover. Last seen in the study area on the second floor. It has a distinctive red case and a sticker of a cartoon cat on the lid. The laptop contains important work files and personal photos. If found, please contact immediately.',
    location: 'Central Library, 2nd floor',
    date: '2023-05-15',
    category: 'Electronics',
    image: '/placeholder.jpg?height=400&width=600',
    contact: '+1 (555) 123-4567'
  },
  {
    id: 2,
    type: 'found',
    title: 'Blue Umbrella',
    description: 'Compact blue umbrella with a wooden handle found at the bus stop on Main Street. It appears to be a high-quality umbrella with a navy blue canopy and a light wooden curved handle. There are no distinguishing marks or names on it. If this is your umbrella, please provide additional details to claim it.',
    location: 'Bus Stop on Main Street',
    date: '2023-05-14',
    category: 'Accessories',
    image: '/placeholder.jpg?height=400&width=600',
    contact: 'john.doe@email.com'
  },
  {
    id: 3,
    type: 'lost',
    title: 'Leather Wallet',
    description: 'Brown leather wallet with initials "JS" embossed on the front. Lost at Downtown Cafe during lunch hour. The wallet contains important identification cards, credit cards, and a small amount of cash. It has sentimental value as it was a gift. If found, please return to the cafe or contact the provided number.',
    location: 'Downtown Cafe',
    date: '2023-05-13',
    category: 'Accessories',
    image: '/placeholder.jpg?height=400&width=600',
    contact: '+1 (555) 987-6543'
  },
]

export default function ItemDetail({ params }: { params: { id: string } }) {
  const item = items.find(i => i.id === parseInt(params.id))

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
          src={item.image}
          alt={item.title}
          width={600}
          height={400}
          className="w-full h-64 object-cover"
        />
        <CardHeader className="bg-muted">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl">{item.title}</CardTitle>
            <Badge variant={item.type === 'lost' ? 'destructive' : 'default'} className="text-lg py-1 px-3">
              {item.type === 'lost' ? 'Lost' : 'Found'}
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
              <p className="text-muted-foreground">{item.contact}</p>
            </div>
          </div>
          <Button className="w-full md:w-auto">
            {item.type === 'lost' ? 'I found this item' : 'This is my item'}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

