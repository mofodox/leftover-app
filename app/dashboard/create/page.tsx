"use client"

import { z } from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from "@/components/ui/button"


const formSchema = z.object({
  name: z.string().max(50),
  description: z.string().max(50),
  amount: z.number()
})

export default function Create() {
  const billForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="header flex justify-between items-center py-4">
        <h1 className="mb-4 text-2xl font-bold">Add Bill</h1>
      </div>
      <div className="flex flex-col gap-4">
        <Form {...billForm}>
          <FormField 
            control={billForm.control}
            name="name"
            render={({field}) => (
              <FormItem>
                <FormLabel>
                  Name
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="E.g. Car" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={billForm.control}
            name="description"
            render={({field}) => (
              <FormItem>
                <FormLabel>
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="A little bit about your bill" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={billForm.control}
            name="amount"
            render={({field}) => (
              <FormItem>
                <FormLabel>
                  Amount
                </FormLabel>
                <FormControl>
                  <Input type="number" placeholder="$0.00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="md:w-48 bg-yellow-400 mt-5 hover:bg-yellow-500 text-black font-medium">Submit</Button>
        </Form>
      </div>
    </div>
  )
}