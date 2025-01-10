// src/app/about.tsx
import Head from 'next/head'

export default function About() {
  return (
    <div className="max-w-md mx-auto my-10">
      <Head>
        <title>About Me - Sebastian Serrano</title>
        <meta name="description" content="Learn more about Sebastian Serrano." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-8 bg-gray-100 rounded-md shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
        <section id="about-me" className="mb-8">
          <p className="text-gray-700 text-left">
            Hi, I&apos;m <strong>Sebastian Serrano</strong>, a passionate entrepreneur
            and technologist from Patagonia, currently based in South America. As the
            founder and CEO of <strong>Ripio</strong>, I&apos;ve dedicated over a decade
            to making cryptocurrency and blockchain technology more accessible across
            Latin America. My mission is to empower individuals and businesses through
            innovative financial solutions that bridge traditional and decentralized
            finance.
          </p>

          <p className="text-gray-700 text-left mt-4">
            I have a <strong>background in computer science and physics</strong>, and
            I&apos;ve always been driven by curiosity and the challenge of turning bold
            ideas into reality. Whether it&apos;s pioneering crypto adoption in LatAm,
            exploring the potential of <strong>real-world assets (RWA)</strong>{' '}
            through tokenization, or building cutting-edge projects like{' '}
            <strong>LaChain</strong>, a zkSync-powered Layer 2 blockchain, I thrive at
            the intersection of technology and impact.
          </p>

          <p className="text-gray-700 text-left mt-4">
            When I&apos;m not working on scaling the crypto ecosystem, I enjoy flying,
            spending time with my family—including my wife, our two dogs, and a cat—or
            exploring new horizons. From supporting Argentina&apos;s rising talent in
            F1, like <strong>Franco Colapinto</strong>, to brainstorming the next big
            idea, I bring the same energy and focus to every endeavor.
          </p>

          <p className="text-gray-700 text-left mt-4">
            I believe in the power of <strong>collaboration</strong> to drive change,
            whether through building meaningful partnerships or mentoring the next
            generation of innovators. If you share a vision for a more connected and
            prosperous future, reach out on social media!
          </p>
        </section>
      </main>
    </div>
  )
}