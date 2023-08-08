import Image from 'next/image'

export default function Test() {
  return (
    <>
      <div className="relative">
        <div className="absolute">
          <Image
            src="/static/images/newjeans1.jpg"
            alt="First Image"
            width="1920"
            height="1080"
            className="top-0 left-0 opacity-80 block"
          />
        </div>
        <div className="absolute">
          <Image
            src="/static/images/newjeans2.jpg"
            alt="Second Image"
            width="1920"
            height="1080"
            className="top-0 left-0 opacity-80 block"
          />
        </div>
        <div className="absolute">
          <Image
            src="/static/images/newjeans3.jpg"
            alt="Third Image"
            width="1920"
            height="1080"
            className="top-0 left-0 opacity-80 block"
          />
        </div>
        <span className="absolute">a</span>
        <span className="absolute">b</span>
        <span className="absolute">c</span>
      </div>
    </>
  )
}
