import React, { FC, useEffect, useState } from 'react'
import Head from 'next/head'
import { Button } from 'antd'

interface Props {
  children: React.ReactNode
  title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
  const [origin, setOrigin] = useState('')

  useEffect(() => setOrigin(window.location.origin), [])
  if (!origin) {
    return null
  }

  return (
    <>
      <Head>
        <title>{title || 'Fitness app: app for training and food'}</title>
        <meta name="author" content="Carlos Martinez Crespo" />
        <meta name="description" content={`Information about fitness and nutrition ${title}`} />
        <meta name="keywords" content={`${title}, fitness, gym, nutrition, exercises, food`} />

        <meta property="og:title" content={`Information about ${title}`} />
        <meta property="og:description" content={`This is the page about ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.avif`} />
      </Head>

      <Button>button</Button>

      <main>{children}</main>
    </>
  )
}
