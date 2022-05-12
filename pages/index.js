import Head from 'next/head'
import {useState} from 'react'

function HomePage() {

    const [color, setColor] = useState('px-4 py-4 bg-purple-900 text-white');

    return (

        <>
        <div class="container">
        <Head>
            <title>TopPacks</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </Head>
        </div>
        <nav class={color}>
            <ul class="flex">
                <li class="mx-2 cursor-pointer" onClick={()=> setColor("px-4 py-4 bg-red-900 text-white")}>HomeScreen</li>
                <li class="mx-2 cursor-pointer" onClick={()=> setColor("px-4 py-4 bg-green-900 text-white")}>TopPacks</li>
            </ul>
        </nav>
        </>
    )

}

export default HomePage;