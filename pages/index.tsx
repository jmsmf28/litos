import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'


const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2  bg-[url('/images/bg1.jpg')]">
      <Head>
        <title>Venda o seu imóvel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className="flex w-full flex-1 flex-col items-right justify-center px-20 text-center">
        
        <h1 className="text-6xl font-bold">
          Mude a sua vida !!!
        </h1>


        <div className="mt-6 flex max-w-4xl flex-col items-right justify-end sm:w-full">
          {/*<a
            href=""
            className="mt-6 w-96 rounded-xl p-6 text-left"
          >
            <h3 className="text-2xl font-bold"></h3>
            <p className="mt-4 text-xl">
              
            </p>
  </a>*/}

          <a
            href=""
            className="mt-6 w-96 rounded-xl border p-6 text-left border-gray-600 hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold text-white">Precisa de dinheiro ?</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          {/*<a
            href=""
            className="mt-6 w-96 rounded-xl p-6 text-left "
          >
            <h3 className="text-2xl font-bold"></h3>
            <p className="mt-4 text-xl">
         
            </p>
</a>*/}

          <a
            href=""
            className="mt-6 w-96 rounded-xl border border-gray-600 p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Quer vender o seu imóvel ?</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex h-6 w-full items-center justify-center ">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={8} />
        </a>
      </footer>
      </div>

  )
}

export default Home
