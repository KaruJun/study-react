import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'
import classes from 'src/styles/Home.module.css'

export default function Home () {
  const [count, setCount] = useState(1)

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount(count => count + 1)
    }
  }, [count])

  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue'
    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [])

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page='index' />
      <Footer />
    </div>
  )
}
