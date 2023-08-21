'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from '@/components/ui/footer'
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from '../../components/Navbar/Navbar'
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <NextUIProvider>
      <Navbar/>
      <main className="grow">

        {children}

      </main>

      <Footer />
    </NextUIProvider>
  )
}
