'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { motion } from 'framer-motion'
import { useCreateItemMutation } from '../services/itemApi'
import { Icons } from '@/components/ui/Icons'

import { useToast } from '@/hooks/use-toast'
import { AppError } from '../utils/CustomError'

interface ReportFormProps {
  type: 'LOST' | 'FOUND'
}

export default function ReportForm({ type }: ReportFormProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    contactInfo: '',
    status: type.toUpperCase(),
    category: '',
    date: '',
  })

  const [createItem, { isLoading, error }] = useCreateItemMutation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setFormData(prevData => ({ ...prevData, [name]: value }))

  }

  const handleSelectChange = (value: string) => {
    setFormData(prevData => ({ ...prevData, category: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const item = await createItem(formData).unwrap();

      // Redirect to home page after submission
      if (item) {
        setFormData({
          name: '',
          description: '',
          location: '',
          contactInfo: '',
          category: '',
          status: type.toUpperCase(),
          date: '',
        });
        toast({
          title: "Item created successfully",
          className: "bg-white text-black",
          duration: 2000
        })
      }
      router.push('/')
    } catch (error) {
      if ('data' in error && error.data) {
        const errorData = error.data as { message: string };
        toast({
          title: errorData.message,
          variant: "destructive"
        })
      } else {
        toast({
          title: "Something Went Wrong",
          variant: "destructive"
        })
      }

    }
    // Here you would typically send the data to your backend
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <Label htmlFor="name">Item name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="contactInfo">Contact Information</Label>
        <Input
          id="contactInfo"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Select name="category" value={formData.category} onValueChange={handleSelectChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="clothing">Clothing</SelectItem>
            <SelectItem value="accessories">Accessories</SelectItem>
            <SelectItem value="documents">Documents</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full">
        {isLoading ? (
          <Icons.spinner />
        ) : (
          `Submit ${type === 'LOST' ? 'Lost' : 'Found'} Item Report`
        )}
      </Button>
    </motion.form>
  )
}

