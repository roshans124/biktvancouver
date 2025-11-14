"use client";
import Image from "next/image";
import Link from "next/link";
import serviceHero from "@/public/uploads/SINGLE-3-_3550744(1).jpg"; // Replace with your uploaded service photo
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function ServicePage() {
  useEffect(() => {
    // Load YouCanBookMe embed
    const script = document.createElement("script");
    script.src = "https://embed.ycb.me";
    script.async = true;
    script.setAttribute("data-domain", "vancouversr-service");
    script.setAttribute("data-displaymode", "auto");
    document.getElementById("service-booking-embed")?.appendChild(script);
  }, []);

  return (
    <main className="bg-[#f9f9f9] text-gray-900">
      {/* ───────────── NAVBAR ───────────── */}
      <nav className="w-full bg-black h-16 md:h-[70px] flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2">
  <img
    src="/uploads/Biktrix_logo_hi_res20(3).png"
    alt="Biktrix Logo"
    className="w-24 md:w-28 object-contain"
  />
  <span className="text-white font-medium text-lg hidden sm:inline">Biktrix</span>
</Link>


          <div className="relative group">
  <span className="bg-[#F4B73F] text-white text-sm md:text-base font-semibold px-3 md:px-4 py-1.5 rounded-full whitespace-nowrap cursor-pointer">
    Biktrix Vancouver Showroom
  </span>

  {/* DROPDOWN MENU */}
  <div className="absolute left-0 mt-2 w-56 bg-white text-gray-800 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
    <ul className="py-2 text-sm">
      <li>
        <a
          href="https://www.biktrix.ca/pages/saskatoon-showroom"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Biktrix Saskatoon Showroom
        </a>
      </li>
      <li>
        <a
          href="https://www.biktrix.ca/pages/kelowna-showroom"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Biktrix Kelowna Showroom
        </a>
      </li>
      <li>
        <a
          href="https://www.biktrix.ca/pages/victoria-showroom"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Biktrix Victoria Showroom
        </a>
      </li>
      <li>
        <a
          href="https://www.biktrix.ca/pages/edmonton-showroom"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Biktrix Edmonton Showroom
        </a>
      </li>
      <li>
        <a
          href="https://www.biktrix.ca"
          className="block px-4 py-2 hover:bg-gray-100 border-t border-gray-200"
        >
          Back to Biktrix Website
        </a>
      </li>
    </ul>
  </div>
</div>

        </div>

        <a
          href="tel:1-866-245-8749"
          className="flex items-center text-white text-sm md:text-base space-x-2 hover:opacity-80 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 md:w-5 md:h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5h2l2 5-2 2a11.5 11.5 0 005 5l2-2 5 2v2a2 2 0 01-2 2h-1a16 16 0 01-9-9V7a2 2 0 012-2z"
            />
          </svg>
          <span>1-866-245-8749</span>
        </a>
      </nav>


<section className="relative bg-gray-50 pt-[89px] pb-[25px]">

  <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
    {/* LEFT TEXT SIDE */}
    <div className="lg:col-span-2 space-y-4 lg:pr-8">
      

      <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide">
        Vancouver's Expert eBike Servicing
      </p>

      <h1 className="font-bold leading-[1.1] max-w-[48rem]">
        <span className="block text-blue-600 font-bold text-[2rem] lg:text-[2.54rem] whitespace-nowrap">
          Professional eBike Servicing with
        </span>
        <span className="block text-gray-900 font-bold text-[1.6rem] lg:text-[1.6625rem] whitespace-nowrap">
          Fast Turnaround, Honest Pricing, Proven Expertise
        </span>
      </h1>

      <p className="mt-6 text-gray-700 text-[1.1rem] leading-relaxed max-w-[48rem]">
        <strong className="font-semibold text-gray-900">Focused on delivering:</strong> an easy and worry-free experience. We’ve turned servicing into a science — no more guesswork on what might be wrong. Just pure, reliable service that you can depend on.
      </p>
      
{/* Google Rating */}
<div className="flex flex-col items-start gap-1 text-gray-700 text-sm font-medium">
  <div className="flex items-center gap-2">
    <span className="text-yellow-400 text-lg">★★★★★</span>
    <span>
      Rated <strong>4.9</strong> on Google
    </span>
  </div>
  <a
    href="https://www.google.com/maps/place/Biktrix+Vancouver/@49.2565,-123.056,17z"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center mt-1"
  >
    <img
      src="/brands/google-logo.png"
      alt="Google Reviews"
      className="h-6 w-auto object-contain hover:opacity-80 transition duration-200"
    />
  </a>
</div>
      
      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 pt-6">
        <a
          href="#service-packages"
          className="bg-[#F4B73F] hover:bg-[#e0a535] text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-sm"
        >
          Discover Service Packages
        </a>
        <a
          href="tel:18662458749"
          className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-sm"
        >
          Call Us
        </a>
      </div>

      {/* Brand Logos Section */}
      <div className="pt-8">
        <p className="text-sm font-medium text-gray-600 mb-3">Trusted partner of</p>
        <div className="flex flex-wrap items-center gap-6 opacity-80">
          <img src="/brands/sram.png" alt="SRAM" className="h-6 lg:h-7" />
          <img src="/brands/shimano.png" alt="Shimano" className="h-6 lg:h-7" />
          <img src="/brands/bafang.png" alt="Bafang" className="h-6 lg:h-7" />
          <img src="/brands/enviolo.png" alt="Enviolo" className="h-6 lg:h-7" />
          <img src="/brands/tektro.png" alt="Tektro" className="h-6 lg:h-7" />
          <img src="/brands/promax.png" alt="Promax" className="h-6 lg:h-7" />
          <img src="/brands/maxxis.png" alt="Maxxis" className="h-6 lg:h-7" />
          <img src="/brands/kenda.png" alt="Kenda" className="h-6 lg:h-7" />
          <img src="/brands/rockshox.png" alt="Rockshox" className="h-6 lg:h-7" />
          <img src="/brands/magura.png" alt="Magura" className="h-6 lg:h-7" />
        </div>
      </div>
    </div>

    {/* RIGHT IMAGE SIDE */}
    <div className="relative w-full h-[380px] lg:h-[460px] rounded-2xl overflow-hidden shadow-md lg:mt-0">
      <Image
  src="/uploads/cooper1.png"
  alt="Biktrix Service Center"
  fill
  className="object-cover object-center"
  priority
/>
    </div>
  </div>

  {/* Bottom Black Feature Bar */}
  <div className="mt-16 bg-black text-white py-6">
    <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-center">
      <span>21 Point Safety Check</span>
      <span>|</span>
      <span>Wheel Building</span>
      <span>|</span>
      <span>Motor Servicing</span>
      <span>|</span>
      <span>Brakes</span>
      <span>|</span>
      <span>Drivetrain</span>
      <span>|</span>
      <span>Cranks</span>
    </div>
  </div>
</section>







      <section className="py-10 bg-white" id="service-packages">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-10">Service Packages</h2>
    
    <p className="text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed text-lg">
  <strong>Having troubles with your eBike? We can help!</strong><br /><br />
  As Vancouver's leading electric bike shop, we've seen it all. We understand that 
  having parts in stock is crucial to keeping you riding — especially with our short 
  riding season. That's why we're backed by a <strong>20,000 square foot warehouse filled 
  with parts</strong>. That means <strong>less time waiting for parts and more time riding!</strong><br />
</p>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Back to Basics */}
      <div className="p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition text-left">
        <h3 className="text-2xl font-bold mb-2">Back to Basics</h3>
        <p className="text-3xl font-semibold mb-4">$120</p>

        <ul className="space-y-2 text-gray-700">
          <li>✔ 21-point inspection</li>
          <li>✔ Bolt check</li>
          <li>✔ Hanger alignment</li>
          <li>✔ Chain clean / lube</li>
          <li>✔ Bottom bracket inspection</li>
          <li>✔ Headset adjustment</li>

          {/* Not included */}
          <li className="text-gray-400">✗ Motor overhaul</li>
          <li className="text-gray-400">✗ Brake inspection</li>
          <li className="text-gray-400">✗ Wheel inspection</li>
        </ul>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6">
          <Link href="#service-booking-embed">Book Now</Link>
        </Button>
      </div>

      {/* In It for the Long Haul */}
      <div className="p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition text-left">
        <h3 className="text-2xl font-bold mb-2">In It for the Long Haul</h3>
        <p className="text-3xl font-semibold mb-4">$240</p>

        <ul className="space-y-2 text-gray-700">
          <li>✔ 21-point inspection</li>
          <li>✔ Bolt check</li>
          <li>✔ Hanger alignment</li>
          <li>✔ Chain clean / lube</li>
          <li>✔ Bottom bracket inspection</li>
          <li>✔ Headset adjustment</li>

          {/* Additional Long Haul items */}
          <li className="mt-3">✔ Motor overhaul</li>
          <li>✔ Brake inspection</li>
          <li>✔ Wheel inspection</li>
        </ul>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6">
          <Link href="#service-booking-embed">Book Now</Link>
        </Button>
      </div>

      {/* A La Carte */}
      <div className="p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition text-left">
        <h3 className="text-2xl font-bold mb-2">À La Carte</h3>
        <p className="text-3xl font-semibold mb-4">$100 / hour</p>

        <ul className="space-y-2 text-gray-700">
          <li>• Brake adjustment</li>
          <li>• Gear indexing / shifting tune</li>
          <li>• Wheel truing</li>
          <li>• Tube / tire replacement</li>
          <li>• Cable replacement</li>
          <li>• Hub service</li>
          <li>• Suspension setup</li>
          <li>• Accessory installation (racks, lights, fenders, etc.)</li>
        </ul>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6">
          <Link href="#service-booking-embed">Book Now</Link>
        </Button>
        
      </div>

    </div>
    <p className="text-gray-700 max-w-3xl mx-auto mt-12 leading-relaxed text-lg text-center">
  Although we primarily service our own lineup of bikes, if you have a bike from another
  manufacturer, feel free to bring it to us. We're always happy to meet new friends!
</p>

  </div>
</section>


      {/* ───────────── FAST TURNAROUND SECTION ───────────── */}
      <section className="py-20 bg-[#f1f5f9]">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">
            Fast Turnaround, Honest Communication
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Are you tired of not knowing how much a service job is going to be? We're proud of being a company that is customer first. That means meeting deadlines and being transparent about pricing structures are fundamental to us. Never wonder again about what was done to your bike. Our Vancouver service center is designed for spectacular quality and efficiency. From quick
            diagnostics to transparent repair updates, we ensure your eBike is
            back on the road as soon as possible — and performing better than
            ever.
            
            <br/><br/>
            Having sold over 30,000+ bikes, we're well versed in diagnosing and repairing eBikes. That's what makes us one of the experienced and fastest growing Canadian owned companies in the cycling sphere. </p>
        </div>
      </section>

      {/* ───────────── WHY BIKTRIX SECTION ───────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Biktrix Services Are Better
            </h2>
            <p className="text-gray-700 mb-6">
              We don’t just fix eBikes — we build them. Our technicians are
              factory-trained and have direct access to Biktrix engineering
              support and original parts.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Certified Biktrix technicians</li>
              <li>Access to OEM components and firmware</li>
              <li>Comprehensive diagnostics and calibration</li>
              <li>Upgrades and tuning for performance</li>
            </ul>
          </div>

          <div className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={serviceHero}
              alt="eBike Repairing"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ───────────── BOOKING EMBED ───────────── */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Book Your Service</h2>
          <div id="service-booking-embed" className="min-h-[500px]"></div>
        </div>
      </section>

      {/* ───────────── FOOTER ───────────── */}
      <footer className="bg-black text-gray-400 py-6 text-center text-sm">
        © {new Date().getFullYear()} Biktrix Vancouver Showroom. All Rights
        Reserved.
      </footer>
    </main>
  );
}
