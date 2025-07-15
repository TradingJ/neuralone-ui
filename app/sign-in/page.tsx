// app/(auth)/sign-in/page.tsx
'use client'

import { auth } from '@/auth'
import { LoginButton } from '@/components/login-button'
import { LoginForm } from '@/components/login-form'
import { Separator } from '@/components/ui/separator'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function SignInPage() {
  const cookieStore = cookies()
  const session = await auth({ cookieStore })

  // Redirect if user is already logged in
  if (session?.user) {
    redirect('/')
  }

  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center py-10">
      <div className="w-full max-w-sm space-y-4">
        <h1 className="text-center text-2xl font-bold">Welcome to Neural.ONE</h1>

        {/* Google Sign-In Button */}
        <LoginButton />

        <Separator className="my-4" />

        {/* Optional email login */}
        <LoginForm action="sign-in" />
      </div>
    </div>
  )
}
