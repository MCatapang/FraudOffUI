import CardGrid from '@/components/card-grid';
import ItemCarousel from '@/components/item-carousel';
import MainBanner from '@/components/main-banner';

export default function Home() {
  return (
    <main className="bg-cover bg-background-light dark:bg-background-dark transition flex min-h-screen px-4 pt-24 pb-10 flex-col items-center justify-between">
        <ItemCarousel/>
        <MainBanner/>
        <CardGrid/>
    </main>
  )
}
