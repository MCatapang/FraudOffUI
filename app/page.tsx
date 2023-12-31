import ItemCarousel from '@/components/item-carousel';
import LinkCard from '@/components/link-card';
import MainBanner from '@/components/main-banner'

export default function Home() {
  return (
    <main className="transition flex min-h-screen px-24 pt-24 pb-12 flex-col items-center justify-between p-24">
      <ItemCarousel/>
      <MainBanner/>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <LinkCard 
          href='https://google.com'
          title='Google'
          description='Always make sure that your google-fu is up to par with the best'
        />
        <LinkCard 
          href='https://google.com'
          title='Instagram'
          description='Do it for the gram and do it for the fame! Be the next Kylie Jenner.'
        />
        <LinkCard 
          href='https://google.com'
          title='Twitter'
          description='Lets not call it "X", it will always and forever be Twitter to us.'
        />
        <LinkCard 
          href='https://google.com'
          title='GitHub'
          description='Check out the code that will be submitted for the DataPalooza hackathon.'
        />
      </div>
    </main>
  )
}
