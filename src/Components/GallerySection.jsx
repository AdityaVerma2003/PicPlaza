import React from 'react'
import ImageCard from './ImageCard'

const GallerySection = () => {
  return (
    <>
    
    <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-10 mt-10 mb-5'>
       
        <ImageCard imgUrl="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" author="AdityaVerma" title="Testing" oldPrice="25" newPrice="19"/>
        <ImageCard imgUrl="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" author="AdityaVerma" title="Testing" oldPrice="25" newPrice="19"/>
        <ImageCard imgUrl="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" author="AdityaVerma" title="Testing" oldPrice="25" newPrice="19"/>
        <ImageCard imgUrl="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" author="AdityaVerma" title="Testing" oldPrice="25" newPrice="19"/>
        <ImageCard imgUrl="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" author="AdityaVerma" title="Testing" oldPrice="25" newPrice="19"/>
        </div>
        </>
  )
}

export default GallerySection

