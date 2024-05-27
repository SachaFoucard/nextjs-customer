'use client'
import React from 'react'
import HeaderBlog from './Hero'
import Contains from './Contains'
import ClientSideMarquee from './comments'

export default function blog() {
    return (
        <main>
            <HeaderBlog />
            <Contains />
            <ClientSideMarquee/>
        </main>
    )
}
