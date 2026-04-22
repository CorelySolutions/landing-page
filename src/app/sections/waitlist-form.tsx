'use client'

import { useState, useRef } from 'react'
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'

function sanitizeEmail(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/[<>'";&\\]/g, '')
    .slice(0, 254)
}

const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

export function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const lastSubmitRef = useRef(0)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    const sanitized = sanitizeEmail(email)
    if (!sanitized) return

    if (!EMAIL_RE.test(sanitized)) {
      setError('Please enter a valid email address.')
      return
    }

    const now = Date.now()
    if (now - lastSubmitRef.current < 5000) {
      setError('Please wait a few seconds before trying again.')
      return
    }
    lastSubmitRef.current = now

    setLoading(true)
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'}/waitlist`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: sanitized }),
        },
      )
      if (res.ok || res.status === 409) setSubmitted(true)
      else setError('Something went wrong. Please try again.')
    } catch {
      setError('Network error. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-2 py-3">
        <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">You're on the list! See you soon.</span>
        </div>
        <p className="text-xs text-[#94a3b8]">We'll email you when we open access.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value.replace(/[<>]/g, ''))}
          placeholder="your@email.com"
          className="h-11 flex-1 rounded-lg border border-[#e2e8f0] bg-slate-100 px-4 text-sm text-[#0f172a] placeholder-[#94a3b8] outline-none transition-colors duration-150 focus:border-[#3b82f6]/60 focus:ring-1 focus:ring-[#2563eb]/30"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#2563eb] px-5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1d4ed8] disabled:opacity-60"
        >
          {loading ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          ) : (
            <>
              Join the waitlist
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-xs text-red-500">{error}</p>
      )}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 sm:justify-start">
        <span className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#2563eb]" />
          Free during early access
        </span>
        <span className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#2563eb]" />
          No credit card required
        </span>
        <span className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#2563eb]" />
          Cancel anytime
        </span>
      </div>
    </form>
  )
}
