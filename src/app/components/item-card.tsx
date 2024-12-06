import { Card } from '@/components/ui/card'

interface Item {
  id: number
  type: 'lost' | 'found'
  title: string
  location: string
  date: string
  image: string
}

export default function ItemCard({ item }: { item: Item }) {
  return (
    <Card>
      {/* <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{item.title}</CardTitle>
          <Badge variant={item.type === 'lost' ? 'destructive' : 'default'}>
            {item.type === 'lost' ? 'Lost' : 'Found'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="aspect-square relative mb-4">
          <Image
            src={Placeholder}
            alt={item.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin size={16} className="mr-1" />
          {item.location}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar size={16} className="mr-1" />
          {item.date}
        </div>
      </CardContent> */}
    </Card>
  )
}

