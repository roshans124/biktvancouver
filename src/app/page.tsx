"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Link from "next/link";


export default function BiktrixVancouver() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [showAllFAQs, setShowAllFAQs] = useState(false)
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false)
  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index)
useEffect(() => {
  const script = document.createElement("script")
  script.src = "https://embed.ycb.me"
  script.async = true
  script.setAttribute("data-domain", "vancouversr")
  script.setAttribute("data-displaymode", "auto")
  document.getElementById("test-ride-embed")?.appendChild(script)
}, [])
// AUTO-SCROLL FOR REVIEWS
useEffect(() => {
  const scroller = document.getElementById("reviewScroller");
  if (!scroller) return;

  let scrollAmount = 0;
  let maxScroll = scroller.scrollWidth - scroller.clientWidth;
  let speed = 1; // lower number = slower scroll

  let interval = setInterval(() => {
    if (!scroller) return;

    scrollAmount += speed;
    if (scrollAmount >= maxScroll) scrollAmount = 0;

    scroller.scrollLeft = scrollAmount;
  }, 20);

  // Pause on hover
  scroller.addEventListener("mouseenter", () => clearInterval(interval));
  scroller.addEventListener("mouseleave", () => {
    interval = setInterval(() => {
      scrollAmount += speed;
      if (scrollAmount >= maxScroll) scrollAmount = 0;
      scroller.scrollLeft = scrollAmount;
    }, 20);
  });

  return () => clearInterval(interval);
}, []);

  useEffect(() => {
    // Smooth scroll for internal links
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault()
        const target = document.querySelector(
          (link as HTMLAnchorElement).getAttribute("href")!
        )
        target?.scrollIntoView({ behavior: "smooth" })
      })
    })

    // Scheduler embed
    const schedulerScript = document.createElement("script")
    schedulerScript.src = "https://embed.ycb.me"
    schedulerScript.async = true
    schedulerScript.dataset.domain = "vancouversr"
    schedulerScript.dataset.displaymode = "auto"
    document.getElementById("scheduler-embed")?.appendChild(schedulerScript)

    // Reset scroll when closing YCB modal
    const resetScroll = () => {
      document.body.style.overflow = "auto"
      document.documentElement.style.overflow = "auto"
    }
    window.addEventListener("click", resetScroll)
    return () => window.removeEventListener("click", resetScroll)
  }, [])

  // Scroll lock for popup modal
  useEffect(() => {
    document.body.style.overflow = isServiceModalOpen ? "hidden" : "auto"
  }, [isServiceModalOpen])

  const faqs = [
    { question: "Do you offer test rides?", answer: "Yes! Visit our Vancouver showroom and experience the thrill of a Biktrix eBike first-hand. Booking ahead is recommended." },
    { question: "Can I customize my eBike?", answer: "Absolutely. From colors to components, we offer a range of customization options to suit your preferences and needs." },
    { question: "Do you provide servicing and repairs?", answer: "Yes, our in-house technicians can handle everything from basic maintenance to complex repairs, ensuring your ride stays in top shape." },
    { question: "Can I get the BC eBike Rebate?", answer: "Yes! Biktrix is a fully authorized retailer for the BC eBike Rebate program. You must apply directly for the rebate — learn more at bcebikerebates.ca." },
    { question: "Are eBikes street legal in Canada?", answer: "Yes! eBikes are legal across Canada, provided they meet federal and provincial regulations (max 500 W motor, 32 km/h limit, and pedals). All Biktrix models qualify." },
    { question: "What is the fastest eBike you have?", answer: "Our Juggernaut Ultra FS Pro series reaches speeds up to 45 km/h (28 mph) depending on configuration — one of the fastest eBikes legally rideable in Canada." },
    { question: "Do you have financing options?", answer: "Yes, we offer flexible payment options through trusted third-party partners so you can pay over time." },
    { question: "Can I test multiple bikes before deciding?", answer: "Absolutely — you can try multiple models back-to-back to see which fits your riding style best." },
  ]
  const visibleFaqs = showAllFAQs ? faqs : faqs.slice(0, 4)

  return (
    <div className="bg-white text-gray-900 font-sans">

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

      {/* ───────────── HERO ───────────── */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center bg-[url('/uploads/_MG_8933.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-lg md:text-xl tracking-widest text-gray-200 mb-4 uppercase">
            BIKTRIX VANCOUVER SHOWROOM
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            The Best eBike Experience in the Lower Mainland
          </h1>
          <div className="flex items-center justify-center mb-4 text-yellow-400 text-xl font-semibold">
            ⭐⭐⭐⭐⭐ 4.9 Rating on Google
          </div>
          <p className="text-lg md:text-xl text-gray-100 mb-8">
            Want to learn why over 30,000+ riders love us? Test ride your dream eBike today.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-[#F4B73F] hover:bg-[#e0a535] text-white text-lg px-6 py-3 rounded-full"
          >
            <a href="#test-ride-embed">Book a Visit</a>
          </Button>
        </motion.div>
      </section>



     {/* ───────────── BOOK A TEST RIDE (3-COLUMN WITH CTA) ───────────── */}
<section id="book-visit" className="py-20 bg-white px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
    
    {/* LEFT COLUMN – TEST RIDES INFO */}
    <div>
      <h2 className="text-4xl font-bold mb-4">Test Rides</h2>

      <p className="text-lg text-gray-700 mb-3">
        Pricing: <span className="font-bold text-black">Free</span>
      </p>

      <p className="text-gray-700 mb-2">Models available:</p>
      <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
        <li>✔ Juggernaut Hub Duo</li>
        <li>✔ Juggernaut Lite</li>
        <li>✔ Swift Lite 3</li>
        <li>✔ Swift CVT 2</li>
        <li>✔ Roguehawk FS 2</li>
        <li>✔ MonteCapro Ultra</li>
        <li>✔ Stunner Lite 3</li>
        <li>✔ Juggernaut FS Pro 3</li>
        <li>✔ Swift CVT Lite (NEW)</li>
        <li>✔ Kutty X 3 (NEW)</li>
      </ul>

      
    </div>

    {/* CENTER COLUMN – WHAT TO BRING / WE PROVIDE */}
    <div className="text-gray-700 space-y-6">
      <div>
        <p className="font-bold text-lg mb-2">What to bring:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>ID</li>
          <li>Credit Card (we promise to give it back)</li>
          <li>Your smile (very important!)</li>
        </ul>
      </div>

      <div>
        <p className="font-bold text-lg mb-2">We provide:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>✔ Helmets</li>
          <li>✔ Industry leading eBikes</li>
          <li>✔ The ride of your lifetime!</li>
          <li>✔ Upgraded Smile → eBike Smile</li>
          <li>✔ Completely Free</li>
          <li>✗ Regrets</li>
        </ul>
        <br/><br/>
        <p className="text-2xl font-bold text-black">Book a Free Test Ride 👉</p>
      </div>
    </div>

    {/* RIGHT COLUMN – EMBED */}
    <div className="flex justify-center items-start">
      <div id="test-ride-embed" className="w-full max-w-md"></div>
    </div>

  </div>
</section>
{/* ───────────── GREY CARD AUTO-SCROLLING REVIEWS ───────────── */}
<section className="bg-white pt-1 pb-12 px-6 overflow-hidden">

  <h2 className="text-3xl font-bold text-center mb-10">
    What Riders Are Saying
  </h2>

  <div
    id="reviewScroller"
    className="flex space-x-6 py-4 overflow-x-auto scrollbar-hide"
    style={{ width: "100%" }}
  >
    {[
      {
        title: "Zero Regrets. Highly Recommend!",
        text: `"When I met Daniel B, the manager of the Vancouver store — and I can’t say enough good things about the experience. Daniel was incredibly knowledgeable, patient, and attentive."`,
        initials: "K",
        name: "Kerry S",
        color: "bg-green-600",
      },
      {
        title: "Excellent",
        text: `"Excellent customer service. Huge selection of e-bikes"`,
        initials: "B",
        name: "Bill F.",
        color: "bg-blue-600",
      },
      {
        title: "Great Staff",
        text: `"Great Staff, knowledgeable very helpful, highly recommend. This establishment."`,
        initials: "R",
        name: "Richard Y.",
        color: "bg-red-600",
      },
      {
        title: "Great Service at a Great Price.!",
        text: `Just purchased a Swift CVT belt drive ebike. Daniel was very helpful customizing the bike to exactly how I wanted it. Great bike."`,
        initials: "C",
        name: "Craig B.",
        color: "bg-red-600",
      },
      {
        title: "Fast",
        text: `"These guys were awesome, fixed my bike up in 15 minutes and had me on my way"`,
        initials: "Y",
        name: "Yash S.",
        color: "bg-red-600",
      },
      {
        title: "Rebate  ",
        text: `"Great service, very helpful staff who guided us through the process and the bc ebike rebate program."`,
        initials: "I",
        name: "Iona M.",
        color: "bg-red-600",
      },
      {
        title: "My experience with Biktrix",
        text: `"I am very impressed with Biktrix and especially the Vancouver store. My two Juggernaut Ultra Lites, bought on a BOGO sale, were delivered exactly as promised, and the local service was fantastic."`,
        initials: "A",
        name: "Amery M.",
        color: "bg-yellow-500",
      },
    ].map((review, index) => (
      <div
        key={index}
        className="min-w-[350px] md:min-w-[420px] bg-[#2a2a2a] text-white rounded-3xl shadow-lg p-8 flex flex-col justify-between"
      >
        {/* Title */}
        <h3 className="text-2xl font-extrabold mb-4">{review.title}</h3>

        {/* Review text */}
        <p className="text-gray-300 mb-8 leading-relaxed">{review.text}</p>

        {/* Footer: Avatar + Name */}
        <div className="flex items-center space-x-4 mt-auto">
          <div
            className={`w-12 h-12 rounded-full ${review.color} text-white flex items-center justify-center font-bold`}
          >
            {review.initials}
          </div>
          <p className="text-white font-medium">{review.name}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* ───────────── MEET DANIEL ───────────── */}
      <section className="py-20 bg-gray-50 text-center px-6">
        <img
          src="/uploads/daniel.png"
          alt="Daniel – Store Manager"
          className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-lg border-4 border-white"
        />
        <h2 className="text-3xl font-bold mb-3">Meet Daniel</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Daniel is an experienced eBike veteran with over 12 years in the industry. Having suffered a leg injury,
          he discovered that riding an eBike is not only liberating — it’s pure fun. That inspired his mission to help
          others find their perfect ride.
        </p>
      </section>

      {/* ───────────── MAP ───────────── */}
      <section className="py-16 bg-gray-100 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Find Us in Vancouver</h2>
        <div className="w-full h-96 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg mb-8">
         <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.048354127884!2d-123.04936422286152!3d49.25758847139028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486766d9c73db13%3A0x2e04f99b1d8c04a4!2sBiktrix%20Electric%20Bikes%20-%20Vancouver!5e0!3m2!1sen!2sca!4v1730967908186!5m2!1sen!2sca"
  width="100%"
  height="100%"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

        </div>
        <h3 className="text-2xl font-semibold mb-2">Biktrix Vancouver Showroom</h3>
        <p className="text-lg text-gray-700">
          2825 Grandview Hwy, Vancouver, BC V5M 2E1
        </p>
        <p className="text-lg text-gray-700 mb-2">
          Tuesday to Saturday: 10 AM – 6 PM
        </p>
        <p className="text-lg text-gray-700 mb-6">📞 1-866-245-8749</p>
        <Button
          asChild
          className="bg-[#F4B73F] hover:bg-[#e0a535] text-white text-lg px-6 py-3 rounded-full"
        >
          <a
            href="https://www.google.com/maps?q=2825+Grandview+Hwy,+Vancouver,+BC+V5M+2E1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </Button>
      </section>
      

      
{/* ───────────── READY TO RIDE BIKES SECTION ───────────── */}
<section className="py-20 bg-gray-50 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* LEFT: IMAGE */}
<div>
  <img
    src="/uploads/bikes-1.png"
    alt="Vancouver's widest eBike selection"
    className="w-full object-cover"
  />
</div>

    {/* RIGHT: TEXT */}
    <div>
      <h2 className="text-3xl font-bold mb-6">The Best Bikes — Ready When You Are</h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        At Biktrix Vancouver, we know eBikes. We understand that there is no one-sized fits all type of eBike. That's why we have the widest selection of electric bicyles in the lower mainland spanning from hunting bikes, commuter bikes, trail bikes, and fat bikes to conquer any terrain. The hills in Greater Vancouver are no joke, and neither are our bikes. They're geared perfectly and equipped with powerful motors   to climb the steepest hills, whether it's up boundary, Burnaby mountain, White Rock, or even the North Shore.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        That means your new eBike is{" "}
        <span className="font-bold text-black">fully assembled, tuned, and ready to ride home</span> the same day. This is all backed by our{" "}
        <span className="font-bold text-black">21-point inspection</span> before it ever touches the floor.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Prefer to buy online? No problem — choose{" "}
        <span className="font-bold text-black">“Pick up in store”</span> at checkout and we’ll have your bike built and
        waiting for you.
      </p>

      {/* CTA BUTTON */}
      <a
        href="https://www.biktrix.ca/collections/all-bikes"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-[#F4B73F] hover:bg-[#e0a535] text-black font-semibold text-lg shadow-sm transition"
      >
        Show me the goods   
      </a>
    </div>
  </div>
</section>

      {/* ───────────── SERVICING ───────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">Servicing Your eBike</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our Vancouver showroom doesn’t just sell eBikes — we keep them running smoothly. From tune-ups to upgrades,
              our in-house service team ensures your Biktrix performs at its best for years to come.
            </p>
            <Button asChild className="bg-[#F4B73F] hover:bg-[#e0a535] text-white px-6 py-3 rounded-full">
  <a href="/service">Book Service</a>
</Button>

          </div>
          <div className="order-1 md:order-2">
            <img
              src="/uploads/SINGLE-3-_3550744(1).jpg"
              alt="Biktrix Service Technician"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>
      

{/* ───────────── ACCESSORIES SECTION ───────────── */}
<section className="py-20 bg-white px-6 text-center">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-3xl font-bold mb-6">Accessories that just work.</h2>
    <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
      It's the worst feeling when you get an accessory and it either doesn't perform or is not compatible with your needs. That's why we only carry accessories that are high quality and are <strong> functional.</strong> <br/><br/>From quality bells and bags to helmets, baskets, fenders, and riding gear — we’ve got everything you need
      to upgrade your eBike and make every ride better.
    </p>

    {/* Simple 3-item preview grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <img
        src="/uploads/100367-1.png"
        alt="Pannier Bags"
        className="rounded-2xl shadow-lg w-full h-56 object-cover"
      />
      <img
        src="/uploads/100354-4.jpg"
        alt="Locks"
        className="rounded-2xl shadow-lg w-full h-56 object-cover"
      />
      <img
        src="/uploads/100446-3.png"
        alt="Quality Bells"
        className="rounded-2xl shadow-lg w-full h-56 object-cover"
      />
    </div>

    {/* CTA BUTTON */}
  </div>
</section>

     

       {/* ───────────── CUSTOM BIKES ───────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12">
          <div>
            <img
              src="/uploads/RH-1.jpg"
              alt="Custom Biktrix eBike"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Custom bikes? Bring it on.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Many companies hate building custom eBikes. They take longer to build, require more work, and more experience. <br/><br/>
              
              We <strong>love</strong> custom builds. Every rider has different wants and needs and the potential to customize any ride is important to us. Take a look at this gorgeous custom powder coated purple bike we built!
            </p>
          </div>
        </div>
      </section>


      

      {/* ───────────── FAQ ───────────── */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto text-left space-y-4">
          {visibleFaqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="w-full text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <span className="text-gray-600 text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        {!showAllFAQs && (
          <div className="mt-8">
            <Button
              className="bg-[#F4B73F] hover:bg-[#e0a535] text-white text-lg px-6 py-3 rounded-full"
              onClick={() => setShowAllFAQs(true)}
            >
              View More
            </Button>
          </div>
        )}
      </section>

      {/* ───────────── FOOTER ───────────── */}
      <footer className="bg-black text-gray-400 text-center py-6 text-sm">
        © {new Date().getFullYear()} Biktrix Electric Bikes — Vancouver Showroom
      </footer>

      {/* ───────────── SERVICE MODAL ───────────── */}
      <AnimatePresence>
        {isServiceModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-2xl mx-4 relative p-6"
            >
              <button
                onClick={() => setIsServiceModalOpen(false)}
                className="absolute top-3 right-4 text-gray-500 text-2xl hover:text-black"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4 text-center">
                Book Your eBike Servicing
              </h2>
              <div id="service-booking-embed" className="text-center">
                <script
                  src="https://embed.ycb.me"
                  async
                  data-domain="vancouversr-service"
                  data-type="text-link"
                  data-innertext="Book your eBike Servicing"
                  data-displaymode="auto"
                ></script>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
