
'use client'
import { useParams, useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function ProductDetail() {
  const { id } = useParams()              
  const searchParams = useSearchParams()  
  const title = searchParams.get('title')  
  const price = searchParams.get('price')
  const image = searchParams.get('image')

  return (
    <div className="p-5 flex flex-col gap-3 border rounded-lg m-5 text-center">
      <p className='text-2xl font-bold mb-3'>Product ID: {id}</p>
      <p className='text-2xl font-bold mb-3'>Price: ${price}</p>
      <h1 className="text-xl mb-3">Title: {title}</h1>
      {image && <img src={image} alt={title} className="w-full h-100 object-contain" />}
      <Link href="/" className="mt-2 p-2 bg-blue-500 text-white rounded-lg text-center w-fit mx-auto">Back to test page</Link>
    </div>
  )
}
