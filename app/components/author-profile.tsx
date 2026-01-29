'use client'

import Image from 'next/image'
import { useState } from 'react'
import { author } from 'app/config/author'

const DEFAULT_AVATAR = '/images/default-avatar.svg'

export function AuthorProfile() {
  const [imgSrc, setImgSrc] = useState(author.avatar)

  return (
    <aside className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex items-start gap-4">
        <Image
          src={imgSrc}
          alt={author.name}
          width={64}
          height={64}
          className="rounded-full"
          onError={() => setImgSrc(DEFAULT_AVATAR)}
        />
        <div>
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {author.name}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            {author.bio}
          </p>
        </div>
      </div>
    </aside>
  )
}
