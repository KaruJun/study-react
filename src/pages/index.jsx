import Head from 'next/head'
import { useCallback } from 'react'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'
import classes from 'src/styles/Home.module.css'

// const handleClick = (e, foo) => {
//   console.log(e.target.href)
//   e.preventDefault()
//   alert(foo)
// }

const foo = 1

export default function Home () {
  const handleClick = useCallback(e => {
    console.log(e.target.href)
    e.preventDefault()
    alert(foo)
  }, [])
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href='/about' onClick={handleClick}>
        ボタン
      </a>
      <Main page='index' />
      <Footer />
    </div>
  )
}
