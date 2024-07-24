"use client"

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userRegisterSchema } from '@/lib/validations/auth'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { UserRegisterSchema } from '@/types/schema'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phone: '',
}

export default function Component() {
  const form = useForm<UserRegisterSchema>({
    mode: 'all',
    resolver: zodResolver(userRegisterSchema),
    defaultValues
  })
  const onSubmit = (userData: UserRegisterSchema) => console.log('dados', userData)
  const birthDayInputYears = Array.from({ length: 100 }, (_, number) => String(new Date().getFullYear() - number))
  const birthDayInputMonths = Array.from({ length: 31 }, (_, number) => String(number + 1).padStart(2, "0"))
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto max-w-md space-y-6 px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Join Us</h1>
          <p className="text-gray-500 dark:text-gray-400">Create your account to start shopping.</p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>First Name</FormLabel>
                  <Input id="first-name" placeholder="John" required  {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Last Name</FormLabel>
                  <Input id="last-name" placeholder="Doe" required {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Email</FormLabel>
                <Input id="email" type="email" placeholder="you@example.com" required {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Password</FormLabel>
                <Input id="password" type="password" placeholder="Enter your password" required {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Phone</FormLabel>
                <Input id="phone" type="tel" placeholder="+1 (555) 555-5555" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-2">
            <Label>Date of Birth</Label>
            <div className="flex items-center gap-4">
              <FormField
                control={form.control}
                name="dob.month"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Month" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="01">January</SelectItem>
                        <SelectItem value="02">February</SelectItem>
                        <SelectItem value="03">March</SelectItem>
                        <SelectItem value="04">April</SelectItem>
                        <SelectItem value="05">May</SelectItem>
                        <SelectItem value="06">June</SelectItem>
                        <SelectItem value="07">July</SelectItem>
                        <SelectItem value="08">August</SelectItem>
                        <SelectItem value="09">September</SelectItem>
                        <SelectItem value="10">October</SelectItem>
                        <SelectItem value="11">November</SelectItem>
                        <SelectItem value="12">December</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dob.day"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Day" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {birthDayInputMonths.map((day) => (
                          <SelectItem key={day} value={day}>
                            {day}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dob.year"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {birthDayInputYears.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type="submit" className="w-full">Sign Up</Button>
        </div>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="login" className="font-medium underline underline-offset-4">
            Sign In
          </Link>
        </div>
      </form>
    </FormProvider>
  )
}