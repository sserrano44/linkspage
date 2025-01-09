// pages/index.tsx
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/sserrano44'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/sserrano44'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sebastianserrano'
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/3JWTmU78JE'
  },
  {
    name: 'LaChain',
    url: 'https://www.lachain.network/'
  },
]

export default function Home() {
  return (
    <div className="max-w-md mx-auto my-10">
      <Head>
        <title>Sebastian Serrano (@sserrano44)</title>
        <meta
          name="description"
          content="@sserrano44 personal page with links to my social media profiles."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-8 bg-gray-100 rounded-md shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8">Sebastian Serrano</h1>
        <Image
          src="/avatar.jpg"
          alt="Sebastian Serrano"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-8"
        />
        <div className="text-center mb-8">
          <Link href="/about">
            <a className="text-blue-500 hover:underline text-lg">Learn more about me</a>
          </Link>
        </div>
        <div className="text-center">
          <ul>
            {links.map((link) => (
              <li key={link.name} className="mb-4">
                <Link href={link.url}>
                  <a className="text-blue-500 hover:underline">{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}