import CustomNavbar from '@/components/CustomNavbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import UserContext from '@/context/UserContext'
import UserProvider from '@/context/UserProvider'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ToastContainer />
          <CustomNavbar />
          <div className='mt-0'>{children}</div>


          <Footer />
        </UserProvider>
      </body>
    </html>
  )
}
