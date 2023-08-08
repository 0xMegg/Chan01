import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'

export default function Test() {
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="relative h-[575px]">
        <div className="absolute">
          <Image
            src="/static/images/newjeans1.jpg"
            alt="First Image"
            width={1920}
            height={1080}
            className="animate-fadeInOut opacity-70"
          />
        </div>
        <div className="absolute">
          <Image
            src="/static/images/newjeans2.jpg"
            alt="Second Image"
            width={1920}
            height={1080}
            className="animate-fadeInOutDelayOne opacity-70"
          />
        </div>
        <div className="absolute">
          <Image
            src="/static/images/newjeans3.jpg"
            alt="Third Image"
            width={1920}
            height={1080}
            className="animate-fadeInOutDelayTwo opacity-70"
          />
        </div>
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-16 bg-gray-400 opacity-75 flex items-center justify-center">
          <span className="text-2xl text-white z-50">동진어쩌구</span>
        </div>
      </div>
    </>
  )
}
