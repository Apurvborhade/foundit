'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, Tag } from 'lucide-react'
import { motion } from 'framer-motion'
import { useFetchItemsQuery } from '../services/itemApi'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../features/itemSlice'
import { useEffect } from 'react'
import LoadingSkeleton from './LoadingSkeleton'
import { RootState } from '@/app/store'

type Item = {
  id: string; // id is a string in the schema
  name: string;
  description: string;
  location: string | null;
  date: string | null;
  contactInfo: string;
  status: 'LOST' | 'FOUND' | 'RESOLVED';
  category: string;
  createdAt: string;
  updatedAt: string;
};



export default function ItemList() {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useFetchItemsQuery();

  useEffect(() => {
    if (!data) {

      dispatch(getItems([]));
    } else {
      dispatch(getItems(data));
    }
  }, [data])
  const items = useSelector((state: RootState) => state.items.items);
  if (error) {
    if ('data' in error) {
      return <div>{error.data.message}</div>;
    }
    return <div>{error.message}</div>;
  }
  if (isLoading) {
    return <LoadingSkeleton />
  }









  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item: Item, index: number) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Link href={`/item/${item.id}`}>
            <Card className="overflow-hidden transition-shadow hover:shadow-lg">
              <Image
                src="/placeholder.jpg"
                alt={item.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="bg-muted">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <Badge variant={item.status === 'LOST' ? 'destructive' : 'default'}>
                    {item.status === 'LOST' ? 'Lost' : 'Found'}
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
                    {new Date(item.createdAt).toDateString()}
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

