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
        <meta name="description" content="@sserrano44 personal page with links to my social media profiles." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-8 bg-gray-100 rounded-md shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8">Sebastian Serrano</h1>
        <Image src="/avatar.jpg" alt="Sebastian Serrano" width={200} height={200} className="rounded-full mx-auto mb-8" />
        <div className="">
          <p className="text-gray-500 text-left font-condensed">
            Hi, I&apos;m Sebastian Serrano, CEO and co-founder of Ripio, a leading crypto company in Latin America. I have a background in computer science and have been working in the blockchain and cryptocurrency space for over a decade. I am passionate about the potential of this technology to transform our financial systems and empower individuals around the world.
          </p>
        </div>
        <div className="text-center">
        <ul>
          {links.map((link) => (
            <li key={link.name} className="mb-4">
              <Link href={link.url}>
                <span className="text-blue-500 hover:underline">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        </div>
      </main>
    </div>
  )
}