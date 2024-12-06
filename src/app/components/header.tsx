'use client'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
// import { ThemeToggle } from './theme-toggle'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { useState } from 'react'

export default function Header() {
  // const [category, setCategory] = useState('all')

  return (
    <header className="bg-background shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-primary">Lost and Found</h1>
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="search"
              placeholder="Search items..."
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>
          {/* <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
              <SelectItem value="documents">Documents</SelectItem>
            </SelectContent>
          </Select>
          <ThemeToggle /> */}
        </div>
      </div>
    </header>
  )
}

