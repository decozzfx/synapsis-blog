import React from 'react'
import './styles.scss'
import './home.scss'
import Footer from '../shared/components/footer/footer.component'
import Header from '../shared/components/header/header.component'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </>
  )
}

export default App
