import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { POSTS } from "../page";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/sections/CTABanner";
import { BUSINESS, WHATSAPP_HREF } from "@/lib/business";

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Latin King Detailing Bolton`,
    description: post.excerpt.slice(0, 155),
    alternates: { canonical: `/blog/${slug}` },
  };
}

const POST_HERO_IMAGES: Record<string, { src: string; alt: string }> = {
  "ceramic-coating-vs-wax-bolton": {
    src: "/images/mirror-finish-ceramic-coating-reflection-bolton.webp",
    alt: "Ultra-gloss mirror finish — Ceramic Pro 9H ceramic coating result, Bolton, Greater Manchester",
  },
  "how-to-maintain-ceramic-coating-uk-weather": {
    src: "/images/bmw-m5-ceramic-coating-bolton-workshop.webp",
    alt: "Black BMW M5 ceramic coating at Latin King Detailing workshop, Farnworth, Bolton",
  },
  "ppf-vs-ceramic-coating-which-is-right-for-you": {
    src: "/images/bentley-continental-gt-ppf-installation-bolton.webp",
    alt: "Bentley Continental GT KAVACA PPF installation in progress — Latin King Detailing, Bolton",
  },
  "ceramic-coating-vs-ppf-which-do-you-need": {
    src: "/images/bentley-continental-gtc-ceramic-coating-bolton.webp",
    alt: "Bentley Continental GTC receiving paint protection at Latin King Detailing, Bolton, Manchester",
  },
  "paint-correction-before-ceramic-coating": {
    src: "/images/paint-correction-ceramic-coating-bolton.webp",
    alt: "Professional paint correction before ceramic coating application — Latin King Detailing, Bolton",
  },
  "best-car-detailer-bolton": {
    src: "/images/ceramic-pro-north-west-workshop-farnworth-bolton.webp",
    alt: "Latin King Detailing workshop at night — 115 Albert Road, Farnworth, Bolton",
  },
  "winter-car-protection-greater-manchester": {
    src: "/images/bmw-m5-ceramic-gloss-finish-bolton.webp",
    alt: "Black BMW M5 showing deep-gloss ceramic coating protection at night — Bolton, Greater Manchester",
  },
  "how-long-does-ceramic-coating-last": {
    src: "/images/bmw-m5-ceramic-coating-bolton-workshop.webp",
    alt: "Ceramic coating applied to BMW at Latin King Detailing workshop, Farnworth, Bolton",
  },
  "is-ceramic-coating-worth-it": {
    src: "/images/lamborghini-aventador-ceramic-coating-bolton.webp",
    alt: "Lamborghini Aventador ceramic coated at Latin King Detailing, Farnworth, Bolton",
  },
  "ceramic-coating-cost-bolton-manchester": {
    src: "/images/porsche-macan-ceramic-coating-bolton.webp",
    alt: "Porsche Macan receiving Ceramic Pro 9H ceramic coating at Latin King Detailing, Bolton",
  },
};

const FULL_CONTENT: Record<string, React.ReactNode> = {
  "ceramic-coating-vs-wax-bolton": (
    <>
      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        Ceramic coating and traditional car wax are both used to protect a vehicle&apos;s paintwork — but that&apos;s roughly where the similarities end. For Bolton and Greater Manchester drivers trying to decide between them, here&apos;s a clear breakdown of what each does, how long it lasts, and which makes sense for your car and budget.
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">What Does Car Wax Do?</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        Traditional car wax — whether carnauba-based or a synthetic polymer sealant — sits on top of the paint surface and creates a temporary hydrophobic layer that repels water and gives the paint a glossy appearance. It fills minor surface scratches temporarily, making the paint look better than it is.
      </p>
      <p className="text-gray-400 leading-relaxed mb-4">
        The problem is longevity. A quality carnauba wax typically lasts 4–8 weeks in UK conditions. A synthetic polymer sealant might last 3–6 months. Greater Manchester weather — rain, road grime, bird droppings, and winter salt — erodes wax protection quickly. You&apos;re not protecting the paint so much as temporarily improving its appearance.
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">What Does Ceramic Coating Do?</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        A professionally applied ceramic coating like Ceramic Pro 9H doesn&apos;t sit on top of the paint — it bonds chemically with the clear coat to become a permanent part of the surface. At 9H pencil hardness (the hardest rating possible), it creates a barrier against UV radiation, chemical etching from bird droppings and industrial fallout, hydrophobic water beading, and light abrasion resistance.
      </p>
      <p className="text-gray-400 leading-relaxed mb-4">
        Unlike wax, which degrades and washes away, a Ceramic Pro coating applied by a certified installer lasts 2–5 years depending on the package chosen — with maintenance versions offering even longer durability. The coating also maintains a deeper gloss and self-cleaning hydrophobic effect that wax simply cannot replicate.
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Key Differences at a Glance</h2>
      <div className="overflow-x-auto rounded-xl border border-[#3a3a3a] mb-6">
        <table className="w-full min-w-[400px] text-sm">
          <thead>
            <tr className="bg-[#1a1a1a] border-b border-[#3a3a3a]">
              <th className="px-4 py-3 text-left text-gray-400">Feature</th>
              <th className="px-4 py-3 text-center text-[#c9a84c]">Ceramic Coating</th>
              <th className="px-4 py-3 text-center text-gray-400">Wax / Sealant</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Longevity", "2–5 years", "4–16 weeks"],
              ["UV protection", "✓ Excellent", "✗ Minimal"],
              ["Chemical resistance", "✓ Strong", "✗ Weak"],
              ["Hydrophobic effect", "✓ Persistent", "Temporary"],
              ["Surface hardness", "9H", "None"],
              ["Gloss enhancement", "✓ Deep gloss", "Temporary shine"],
            ].map(([feature, cc, wax]) => (
              <tr key={feature} className="border-b border-[#3a3a3a] last:border-0 bg-[#1a1a1a]">
                <td className="px-4 py-3 text-white">{feature}</td>
                <td className="px-4 py-3 text-center text-[#c9a84c]">{cc}</td>
                <td className="px-4 py-3 text-center text-gray-400">{wax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="relative h-56 sm:h-72 rounded-xl overflow-hidden my-8">
        <Image
          src="/images/bmw-m5-ceramic-gloss-finish-bolton.webp"
          alt="BMW M5 deep-gloss ceramic coating result at night — Bolton, Greater Manchester"
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <p className="absolute bottom-3 left-4 text-white text-xs font-medium">
          BMW M5 — Ceramic Pro 9H result. Bolton.
        </p>
      </div>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Which Is Right for a Bolton Driver?</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        For casual car owners who enjoy the waxing ritual and don&apos;t mind reapplying every few months, traditional wax still has a place. But for Greater Manchester drivers who want to set-and-forget their paint protection — avoiding the hassle of regular waxing while getting superior protection through Bolton&apos;s wet winters and corrosive road salt season — ceramic coating is the superior choice.
      </p>
      <p className="text-gray-400 leading-relaxed">
        When you factor in the time saved on washing and maintenance, ceramic coating pays for itself quickly. And because it&apos;s applied once by a professional, there is no risk of application errors causing streaking, high spots, or damage — common issues with DIY wax application.
      </p>
    </>
  ),
  "how-to-maintain-ceramic-coating-uk-weather": (
    <>
      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        Ceramic coating significantly reduces the effort required to keep your car clean — but it isn&apos;t entirely maintenance-free. In the North West of England, where rain, road salt, and industrial fallout are constant threats, knowing how to care for your coating properly will maximise its lifespan and keep it performing at its best.
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">The Most Important Rule: No Automatic Car Washes</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        Brush-based automatic car washes are the single biggest threat to a ceramic coating. The spinning brushes create swirl marks and micro-scratches in the clear coat that degrade the hydrophobic layer over time. This is true of most quality paint finishes — but with ceramic coating, you&apos;re also degrading the coating itself, which is a waste of a significant investment.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Touchless jet washes are acceptable for a quick rinse between proper washes, but should not replace regular hand washing.
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Hand Washing with pH-Neutral Shampoo</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        The correct way to wash a ceramic-coated car is with a pH-neutral car shampoo using the two-bucket method. Fill one bucket with soapy water and one with clean rinse water. Use a quality wash mitt — never a sponge or household cloth, which trap grit and drag it across the paint.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Avoid harsh degreasers, dishwasher liquid, or any alkaline or acidic cleaning product on the coated panels. These can strip or degrade the ceramic coating&apos;s top layer over time.
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Winter Maintenance in Greater Manchester</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        Bolton and the surrounding area sees heavy road salting from October through to March on most years. Road salt is particularly damaging to wheel arches, sills, and any paint surface it contacts for extended periods. Ceramic coating offers strong chemical resistance, but the best practice is still to rinse road salt off as soon as possible after driving on treated roads — certainly within 48 hours.
      </p>
      <p className="text-gray-400 leading-relaxed">
        A quick rinse with a hosepipe or touchless jet wash on winter days will dramatically reduce salt exposure and keep your coating in optimal condition throughout the season.
      </p>
      <div className="relative h-56 sm:h-72 rounded-xl overflow-hidden my-8">
        <Image
          src="/images/ceramic-pro-north-west-workshop-farnworth-bolton.webp"
          alt="Latin King Detailing workshop — 115 Albert Road, Farnworth, Bolton, Greater Manchester"
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <p className="absolute bottom-3 left-4 text-white text-xs font-medium">
          Our workshop — 115 Albert Road, Farnworth, Bolton.
        </p>
      </div>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Annual Maintenance Inspection</h2>
      <p className="text-gray-400 leading-relaxed">
        Latin King Detailing recommends an annual maintenance check for all coated vehicles. During this visit, we inspect the coating under specialist lighting, assess its condition, and apply a maintenance boost product where needed. This annual service is also required to maintain the warranty on some Ceramic Pro packages. Contact us to book your annual maintenance appointment.
      </p>
    </>
  ),
  "ceramic-coating-vs-ppf-which-do-you-need": (
    <>
      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        Ceramic coating and paint protection film (PPF) are the two most effective ways to protect your car&apos;s paint — but they solve different problems. The question we hear most at our Bolton workshop is simple: &quot;which one do I actually need?&quot; The honest answer depends on how you use your car, where you drive, and what you&apos;re trying to protect against. This guide gives you real scenarios so you can make an informed decision.
      </p>

      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">What Each Product Is Designed To Do</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        <strong className="text-white">Ceramic coating</strong> bonds chemically with your car&apos;s clear coat to create a hardened, hydrophobic surface. It excels at UV protection, chemical resistance (bird droppings, industrial fallout, road film), and making the car dramatically easier to clean. Ceramic Pro 9H — the professional product we use at Latin King Detailing — sits at 9H pencil hardness, the maximum measurable. It does not absorb physical impacts.
      </p>
      <p className="text-gray-400 leading-relaxed mb-6">
        <strong className="text-white">Paint protection film (PPF)</strong> is a polyurethane film physically laminated to the paint surface. KAVACA PPF is self-healing — light scratches and swirl marks disappear with heat. More importantly, PPF absorbs stone chips, road debris impacts, and minor abrasions that would otherwise permanently damage the paint underneath. It does what ceramic coating cannot: stop physical damage before it reaches the paint.
      </p>

      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Scenario 1 — You Drive Mostly on City Roads and Dual Carriageways</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        If your main routes are the M60 ring road, the A56, or through Manchester and Salford city centres, stone chips from high-speed motorway driving are not your biggest risk. What you face more is road film, brake dust, bird droppings, and the difficulty of keeping a dark car clean through a Greater Manchester winter.
      </p>
      <p className="text-gray-400 leading-relaxed mb-4">
        <strong className="text-white">Recommendation: Ceramic coating.</strong> It handles everything urban roads throw at your paint, makes washing fast and effective, and protects against the chemical threats most city drivers encounter daily.
      </p>

      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Scenario 2 — You Regularly Use Fast A-Roads, the M6, or the M62</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        Motorway and fast A-road driving at 60–70 mph significantly increases stone chip risk. Lorries and heavy goods vehicles constantly shed road debris. The front bumper, bonnet leading edge, and A-pillars take the most punishment. Even a short regular commute on the M62 between Manchester and Leeds generates significant chip risk over months.
      </p>
      <p className="text-gray-400 leading-relaxed mb-4">
        <strong className="text-white">Recommendation: PPF on high-impact zones</strong> (full bonnet, bumper, mirrors, door edges) <strong className="text-white">plus ceramic coating over the top.</strong> This is the combination most of our customers choose for daily-driven prestige vehicles. The PPF absorbs chips; the ceramic coating goes over the PPF and the rest of the car to give a unified hydrophobic finish and simplified maintenance.
      </p>

      <div className="relative h-56 sm:h-72 rounded-xl overflow-hidden my-8">
        <Image
          src="/images/lamborghini-aventador-ceramic-coating-bolton.webp"
          alt="Lamborghini Aventador with full paint protection at Latin King Detailing — Bolton, Manchester"
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <p className="absolute bottom-3 left-4 text-white text-xs font-medium">
          Lamborghini Aventador — full PPF and ceramic coating, Bolton workshop.
        </p>
      </div>

      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Scenario 3 — You Have a New or Nearly-New Prestige Car</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        Porsche, BMW M-Series, Range Rover, Audi RS, Mercedes AMG — these vehicles come from the factory with paint that looks stunning but is often softer than equivalent paint on older cars. Many modern eco-friendly waterborne paints scratch and chip more easily. A new £60,000–£100,000 car losing paint condition quickly is an expensive problem.
      </p>
      <p className="text-gray-400 leading-relaxed mb-4">
        <strong className="text-white">Recommendation: Full-front or full-car PPF applied immediately</strong>, ideally within the first week of ownership before any damage occurs, with ceramic coating over the full vehicle. This protects the car&apos;s value, preserves the factory finish, and ensures any future paint correction is minimal. Many of our Manchester and Altrincham customers bring new cars directly from the dealership.
      </p>

      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Scenario 4 — Budget Is a Factor</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        PPF is more expensive than ceramic coating — full-car PPF on a large vehicle is a significant investment. If budget is a constraint, the priority order is:
      </p>
      <ol className="list-decimal list-inside text-gray-400 space-y-2 mb-4 ml-2">
        <li>Ceramic coating on the full car — excellent all-round value, protects against most everyday threats</li>
        <li>PPF on front bumper and bonnet only — targets the highest chip-risk areas within a tighter budget</li>
        <li>Full front-end PPF (bumper, full bonnet, wings, mirrors) — the most popular middle-ground package</li>
        <li>Full-car PPF — maximum protection, best for high-value vehicles or long-term ownership plans</li>
      </ol>
      <p className="text-gray-400 leading-relaxed">
        Ceramic coating alone is never the wrong choice — it&apos;s a meaningful upgrade from an unprotected paint finish at a price point accessible to most car owners. You can always add PPF to specific zones later.
      </p>

      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Can You Have Both?</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        Yes — and this is what we recommend for most prestige vehicles. KAVACA PPF is applied first to the high-impact panels; Ceramic Pro 9H is then applied over the PPF and across the rest of the car. The result is a unified, hydrophobic surface with physical impact protection in the most vulnerable areas and chemical/UV protection everywhere else.
      </p>
      <p className="text-gray-400 leading-relaxed">
        If you&apos;re not sure which combination makes sense for your car, call or WhatsApp us. We&apos;ll look at your vehicle, your typical driving routes, and give you an honest recommendation — not just the most expensive package.
      </p>
    </>
  ),
  "how-long-does-ceramic-coating-last": (
    <>
      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        A professionally applied Ceramic Pro 9H ceramic coating lasts <strong className="text-white">2–5 years</strong> under normal UK driving conditions. Longer packages — including lifetime warranty options — are available and require annual inspections to remain valid. The honest answer, though, is that lifespan varies significantly depending on the product, the installer, and how the car is maintained.
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">What Affects How Long a Ceramic Coating Lasts?</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        Not all ceramic coatings are equal. Consumer spray-on ceramic products sold online — often labelled as &apos;ceramic coating&apos; — sit on the surface and last weeks, not years. A professional-grade coating like Ceramic Pro 9H bonds at a molecular level with the clear coat. That&apos;s the difference.
      </p>
      <p className="text-gray-400 leading-relaxed mb-4">
        Factors that determine longevity in practice:
      </p>
      <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6 ml-2">
        <li><strong className="text-white">Product quality</strong> — Ceramic Pro 9H vs budget alternatives</li>
        <li><strong className="text-white">Installer certification</strong> — a certified installer applies correctly bonded layers</li>
        <li><strong className="text-white">Paint preparation</strong> — coating over swirled or contaminated paint reduces adhesion</li>
        <li><strong className="text-white">Maintenance</strong> — contact car washes destroy coatings prematurely</li>
        <li><strong className="text-white">Usage</strong> — daily motorway driving in road salt season degrades faster than weekend use</li>
      </ul>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Ceramic Pro 9H Package Lifespans</h2>
      <div className="overflow-x-auto rounded-xl border border-[#3a3a3a] mb-6">
        <table className="w-full min-w-[400px] text-sm">
          <thead>
            <tr className="bg-[#1a1a1a] border-b border-[#3a3a3a]">
              <th className="px-4 py-3 text-left text-gray-400">Package</th>
              <th className="px-4 py-3 text-center text-[#c9a84c]">Expected Lifespan</th>
              <th className="px-4 py-3 text-center text-gray-400">Warranty</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Entry / Single layer", "2–3 years", "2 years"],
              ["Multi-layer (2–3 coats)", "3–5 years", "5 years"],
              ["Ceramic Pro 9H Gold", "5+ years", "Lifetime*"],
            ].map(([pkg, life, warranty]) => (
              <tr key={pkg as string} className="border-b border-[#3a3a3a] last:border-0 bg-[#1a1a1a]">
                <td className="px-4 py-3 text-white">{pkg}</td>
                <td className="px-4 py-3 text-center text-[#c9a84c]">{life}</td>
                <td className="px-4 py-3 text-center text-gray-400">{warranty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gray-500 text-xs mb-6">*Lifetime warranty requires annual inspection at a certified installer to remain valid.</p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">What Shortens a Ceramic Coating&apos;s Life?</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        The biggest threat is automatic car washes. Rotating brush systems create swirl marks that abrade the coating surface and gradually destroy the hydrophobic layer. If your car goes through an automatic wash regularly, expect to halve the stated lifespan of any coating.
      </p>
      <p className="text-gray-400 leading-relaxed mb-4">
        In Greater Manchester specifically, the combination of road salt (heavily applied on the M61 and M62 from October to March), industrial fallout from surrounding areas, and above-average rainfall means the coating works harder than in drier parts of the UK. This is actually why ceramic coating is a particularly good investment here — but it also means maintenance matters.
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Signs Your Coating Needs Renewal</h2>
      <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6 ml-2">
        <li>Water no longer beads off the surface in tight droplets</li>
        <li>The paint feels less slick to the touch after washing</li>
        <li>Bird droppings and tree sap are harder to remove than before</li>
        <li>The annual inspection shows coating thickness below specification</li>
      </ul>
      <p className="text-gray-400 leading-relaxed">
        At Latin King Detailing in Farnworth, Bolton, we carry out annual coating inspections and maintenance washes to keep your Ceramic Pro 9H performing through its full service life. If the coating is approaching the end of its life, we&apos;ll tell you honestly — and advise on recoating options rather than pushing you towards an unnecessary full respray.
      </p>
    </>
  ),
  "is-ceramic-coating-worth-it": (
    <>
      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        <strong className="text-white">Yes — for most car owners in the UK, ceramic coating is worth it.</strong> The caveat is &apos;professionally applied.&apos; Consumer spray products sold as ceramic coatings are not the same thing and are generally not worth the money. A genuine Ceramic Pro 9H installation by a certified installer is a different product entirely — and the value case is straightforward.
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">What You&apos;re Actually Paying For</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        Professional ceramic coating is not a premium wax. Ceramic Pro 9H bonds chemically with your car&apos;s clear coat to become a semi-permanent layer with 9H hardness — the highest on the pencil hardness scale. This means:
      </p>
      <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6 ml-2">
        <li>Genuine UV protection that prevents paint fade and oxidation</li>
        <li>Chemical resistance against bird droppings, tree sap, road salt, and acid rain</li>
        <li>A persistent hydrophobic effect that makes the car dramatically easier to clean</li>
        <li>Light swirl mark resistance — it won&apos;t prevent all scratches, but it resists the micro-scratches that dull paint over time</li>
        <li>A registered warranty against your vehicle&apos;s VIN</li>
      </ul>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">The ROI Case for Bolton and Greater Manchester Drivers</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        North West England is one of the harshest environments for car paint in the UK. Road salt is applied aggressively on the M61 and M62 from October through March. The region has above-average rainfall. Industrial fallout from surrounding areas settles on paintwork. Most car owners in Bolton and Manchester are washing their cars more often than drivers in drier parts of the country — and paying for it in time, product costs, and faster paint deterioration.
      </p>
      <p className="text-gray-400 leading-relaxed mb-4">
        Ceramic coating directly reduces those costs. The hydrophobic effect means rain rinses contamination off the surface before it bonds. Maintenance washes take half the time. You stop paying for wax every few months. Our customers consistently report that the coating pays for itself within 12–18 months in reduced cleaning costs and time alone — before accounting for the paint preservation value.
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">When Ceramic Coating Is NOT Worth It</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        Ceramic coating is not worth it in a few specific situations:
      </p>
      <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6 ml-2">
        <li><strong className="text-white">If you use automatic car washes</strong> — they destroy the coating and you won&apos;t get the full lifespan</li>
        <li><strong className="text-white">If the car is a run-around you plan to sell in 12 months</strong> — the investment period is too short to justify the cost</li>
        <li><strong className="text-white">If the paint is heavily damaged</strong> — the coating will bond over the damage. Paint correction is needed first, which adds cost</li>
        <li><strong className="text-white">If you buy from an uncertified applicator</strong> — cheaper non-certified applications often use inferior products and incorrect process, delivering none of the claimed longevity</li>
      </ul>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Ceramic Coating vs The Alternatives</h2>
      <div className="overflow-x-auto rounded-xl border border-[#3a3a3a] mb-6">
        <table className="w-full min-w-[400px] text-sm">
          <thead>
            <tr className="bg-[#1a1a1a] border-b border-[#3a3a3a]">
              <th className="px-4 py-3 text-left text-gray-400">Protection Type</th>
              <th className="px-4 py-3 text-center text-[#c9a84c]">Lifespan</th>
              <th className="px-4 py-3 text-center text-gray-400">UV Protection</th>
              <th className="px-4 py-3 text-center text-gray-400">Chemical Resistance</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Carnauba wax", "4–8 weeks", "Minimal", "None"],
              ["Polymer sealant", "3–6 months", "Moderate", "Low"],
              ["Ceramic spray (DIY)", "2–4 months", "Low", "Low"],
              ["Ceramic Pro 9H (professional)", "2–5 years", "Excellent", "Strong"],
            ].map(([type, lifespan, uv, chem]) => (
              <tr key={type as string} className="border-b border-[#3a3a3a] last:border-0 bg-[#1a1a1a]">
                <td className="px-4 py-3 text-white">{type}</td>
                <td className="px-4 py-3 text-center text-[#c9a84c]">{lifespan}</td>
                <td className="px-4 py-3 text-center text-gray-400">{uv}</td>
                <td className="px-4 py-3 text-center text-gray-400">{chem}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gray-400 leading-relaxed">
        The verdict: for any car owner who cares about their paint and plans to keep the car for more than 2 years, professional ceramic coating is the highest-value paint protection available. It costs more upfront than wax — and saves more over time.
      </p>
    </>
  ),
  "ceramic-coating-cost-bolton-manchester": (
    <>
      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        Ceramic coating prices in Bolton and Greater Manchester vary from around <strong className="text-white">£300 for a basic single-layer application</strong> on a small car to <strong className="text-white">£1,500+ for a multi-layer package with paint correction</strong> on a larger vehicle. The range is wide because several factors drive the actual cost — and knowing them helps you get an accurate quote and avoid being overcharged or undersold.
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">What Drives the Price of Ceramic Coating?</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        <strong className="text-white">1. The product.</strong> Genuine Ceramic Pro 9H is a professional-grade product only available through certified installers. Consumer-grade ceramic sprays are cheaper, but they last weeks, not years. The price difference reflects the product difference — not markup.
      </p>
      <p className="text-gray-400 leading-relaxed mb-4">
        <strong className="text-white">2. The number of layers.</strong> A single-layer application lasts 2–3 years. Multi-layer packages (2–3 coats) last 3–5 years. More layers mean more product, more application time, and longer curing time between coats.
      </p>
      <p className="text-gray-400 leading-relaxed mb-4">
        <strong className="text-white">3. Paint correction.</strong> Ceramic coating bonds permanently over whatever is under it. If your paint has swirl marks, light scratches, or water spots, they need to be corrected before coating — otherwise they&apos;re locked in permanently. Paint correction can add £150–£400 to the job depending on the severity and the number of stages required.
      </p>
      <p className="text-gray-400 leading-relaxed mb-4">
        <strong className="text-white">4. Vehicle size.</strong> A small hatchback takes less product and less time than a large SUV or estate. Most installers price by vehicle category (small/medium/large/XL).
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Typical Price Ranges in Bolton &amp; Manchester</h2>
      <div className="overflow-x-auto rounded-xl border border-[#3a3a3a] mb-6">
        <table className="w-full min-w-[400px] text-sm">
          <thead>
            <tr className="bg-[#1a1a1a] border-b border-[#3a3a3a]">
              <th className="px-4 py-3 text-left text-gray-400">Package</th>
              <th className="px-4 py-3 text-center text-[#c9a84c]">Small Car</th>
              <th className="px-4 py-3 text-center text-gray-400">Large / SUV</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Entry (1 layer, 2yr)", "From £299", "From £399"],
              ["Mid (2 layers, 5yr)", "From £499", "From £699"],
              ["Full (multi-layer, lifetime*)", "From £799", "From £1,200"],
              ["+ Paint correction (if needed)", "+£150–£250", "+£250–£400"],
            ].map(([pkg, small, large]) => (
              <tr key={pkg as string} className="border-b border-[#3a3a3a] last:border-0 bg-[#1a1a1a]">
                <td className="px-4 py-3 text-white">{pkg}</td>
                <td className="px-4 py-3 text-center text-[#c9a84c]">{small}</td>
                <td className="px-4 py-3 text-center text-gray-400">{large}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gray-500 text-xs mb-6">*These are indicative ranges. Contact Latin King Detailing for an exact quote based on your specific vehicle and condition.</p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">What to Watch Out for With Cheap Quotes</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        If you see a ceramic coating advertised for £79 or £99 on social media, it is not Ceramic Pro 9H. It is likely a diluted consumer-grade spray product applied without proper paint decontamination or preparation. These products genuinely do not last — most fail within 3–6 months — and you won&apos;t have any warranty or certification to fall back on.
      </p>
      <p className="text-gray-400 leading-relaxed mb-4">
        A certified Ceramic Pro installer must register every application against the vehicle VIN. If you can&apos;t get a VIN-registered certificate, it&apos;s not a certified Ceramic Pro installation. That registration matters if you sell the car — a certified coating is a verifiable, transferable asset.
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Getting an Accurate Quote at Latin King Detailing</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        We give accurate, itemised quotes based on your specific vehicle, its current condition, and what you want from the protection. Call or WhatsApp us on 07482 225323 — for most vehicles, we can give a clear indication over the phone or from a few photos. No pressure, no obligation.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Our Farnworth, Bolton workshop serves customers from across Greater Manchester. We are a certified Ceramic Pro installer — every application is registered, warranted, and done to the manufacturer&apos;s professional standard.
      </p>
    </>
  ),
};

const STUB_CONTENT = (title: string) => (
  <div className="bg-[#1a1a1a] border border-[#c9a84c]/30 rounded-xl p-6">
    <p className="text-[#c9a84c] font-semibold mb-2">[PLACEHOLDER: Full Article Content]</p>
    <p className="text-gray-400 text-sm">
      This article (&quot;{title}&quot;) needs full content written before launch. The blog structure, metadata, and related post links are all in place — only the body copy needs to be added here in <code className="text-gray-300">FULL_CONTENT</code> in <code className="text-gray-300">src/app/(site)/blog/[slug]/page.tsx</code>.
    </p>
  </div>
);

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = POSTS.filter((p) => p.slug !== slug).slice(0, 3);
  const content = FULL_CONTENT[slug] ?? STUB_CONTENT(post.title);

  return (
    <>
      <div className="max-w-4xl mx-auto px-4">
        <Breadcrumb items={[{ name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${slug}` }]} />
      </div>

      <article className="py-8 px-4 bg-[#0f0f0f]">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <span className="inline-block bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/20 text-xs font-semibold px-3 py-1 rounded mb-4">
              {post.category}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{formatDate(post.date)}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
              <span>By Latin King Detailing</span>
            </div>
          </div>

          {/* Hero image */}
          {POST_HERO_IMAGES[slug] && (
            <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden mb-10">
              <Image
                src={POST_HERO_IMAGES[slug].src}
                alt={POST_HERO_IMAGES[slug].alt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="prose-custom">
            {content}
          </div>

          {/* Author / About box */}
          <div className="mt-12 bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#c9a84c] flex items-center justify-center font-bold text-[#0f0f0f] text-lg shrink-0">
              CP
            </div>
            <div>
              <p className="font-heading font-bold text-white">Latin King Detailing</p>
              <p className="text-gray-400 text-sm mt-1">
                Bolton&apos;s certified Ceramic Pro installer and car detailing specialists. Based in Farnworth, serving Greater Manchester.{" "}
                <Link href="/about" className="text-[#c9a84c] hover:underline">Learn more about us.</Link>
              </p>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#c9a84c] transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((rp) => (
              <Link key={rp.slug} href={`/blog/${rp.slug}`}
                className="group block bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl overflow-hidden hover:border-[#c9a84c]/50 transition-all">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={rp.image}
                    alt={rp.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[#c9a84c] text-xs font-semibold">{rp.category}</span>
                  <h3 className="font-heading font-bold text-white mt-1 text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                    {rp.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-2 flex items-center gap-1">
                    {rp.readTime} <ArrowRight className="w-3 h-3" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to Protect Your Car?"
        subtext="Get a free quote from Latin King Detailing — Bolton's certified detailing specialists."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ label: "WhatsApp Us", href: WHATSAPP_HREF, isWhatsApp: true }}
        variant="gold"
      />
    </>
  );
}
