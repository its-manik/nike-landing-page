import Navbar from "./components/Navbar"
import {Hero, Services, PopularProducts, SuperQuality, SpecialOffer, CustomerReviews,  Footer, Subscribe} from "./sections/index"

export default function App() {
  return (
<main className="relative">
      <Navbar/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>
      <section className="padding bg-pale-blue padding">
        <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="padding-x bg-black paddint-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}