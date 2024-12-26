import React from 'react'
import { Link, Avatar as Picture } from '@radix-ui/themes'

const Avatar = () => {
  return (
    <Link href='https://x.com/pritesh_7098' target='_blank'>
      <Picture
        src='/PrtieshProfile.jpeg'
        fallback="A"
        size='6'
        radius='full'
      />
    </Link>
  )
}

export default Avatar