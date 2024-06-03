import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Your one-stop shop for all your fashion needs.
        </p>
      </div>
      <form className="space-y-4">
        <div>
          <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
            Email address
          </Label>
          <div className="mt-1">
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>
        </div>
        <div>
          <Label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
            Password
          </Label>
          <div className="mt-1">
            <Input id="password" type="password" placeholder="Enter your password" required />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Label className="flex items-center">
            <Checkbox />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
          </Label>
          <Link
            href="#"
            className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-400"
            prefetch={false}
          >
            Forgot your password?
          </Link>
        </div>
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>

      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-medium underline underline-offset-4">
          Join Us
        </Link>
      </div>
    </div>
  )
}