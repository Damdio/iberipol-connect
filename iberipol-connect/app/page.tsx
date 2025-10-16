"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Mail, Phone, Calendar, ShieldCheck, ArrowRight, CheckCircle, Boxes, Truck, MessageSquare } from "lucide-react";

export default function IberiPolConnectSite() {
  const [lang, setLang] = useState<'pl' | 'es'>("pl");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white grid place-items-center shadow">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight">IberiPol <span className="font-light">connect</span></div>
              <div className="text-xs text-slate-500">PL ⇄ ES B2B</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-slate-900 text-slate-600">{t.nav.services}</a>
            <a href="#process" className="hover:text-slate-900 text-slate-600">{t.nav.process}</a>
            <a href="#industries" className="hover:text-slate-900 text-slate-600">{t.nav.industries}</a>
            <a href="#pricing" className="hover:text-slate-900 text-slate-600">{t.nav.pricing}</a>
            <a href="#faq" className="hover:text-slate-900 text-slate-600">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang("pl")}
              className={`px-3 py-1 rounded-xl border text-sm ${lang === "pl" ? "bg-slate-900 text-white" : "bg-white text-slate-700 border-slate-300"}`}
              aria-label="Polski"
            >PL</button>
            <button
              onClick={() => setLang("es")}
              className={`px-3 py-1 rounded-xl border text-sm ${lang === "es" ? "bg-slate-900 text-white" : "bg-white text-slate-700 border-slate-300"}`}
              aria-label="Español"
            >ES</button>
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-white text-sm shadow hover:shadow-md">
              <Calendar className="h-4 w-4" /> {t.nav.cta}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {t.hero.title}
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">{t.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-white shadow hover:shadow-md">
                <ShieldCheck className="h-5 w-5" /> {t.hero.primaryCta}
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-2xl bg-white border border-slate-300 px-5 py-3 text-slate-800 hover:bg-slate-50">
                {t.hero.secondaryCta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
              {t.hero.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <StatCard label={t.hero.stats.meetings} value="5" suffix="/pkg" />
                <StatCard label={t.hero.stats.time} value="6" suffix={t.hero.stats.timeUnit} />
                <StatCard label={t.hero.stats.noShow} value="1:1" />
                <StatCard label={t.hero.stats.languages} value="PL/ES" />
              </div>
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 text-white p-5">
                <p className="text-sm opacity-90">{t.hero.cardTitle}</p>
                <p className="mt-1 text-2xl font-bold">2000 zł</p>
                <p className="text-xs opacity-80 mt-1">{t.hero.cardNote}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.services.title}</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">{t.services.lead}</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <FeatureCard icon={<MessageSquare className="h-5 w-5" />} title={t.services.f1.title} desc={t.services.f1.desc} />
            <FeatureCard icon={<Calendar className="h-5 w-5" />} title={t.services.f2.title} desc={t.services.f2.desc} />
            <FeatureCard icon={<ShieldCheck className="h-5 w-5" />} title={t.services.f3.title} desc={t.services.f3.desc} />
          </div>

          {/* Add-ons */}
          <div className="mt-10 rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 flex items-center gap-2"><Boxes className="h-5 w-5" /> {t.addons.title}</h3>
            <ul className="mt-3 grid md:grid-cols-3 gap-3 text-sm text-slate-700">
              <li className="flex items-center justify-between rounded-xl border border-slate-200 p-3"><span>{t.addons.a1}</span><span className="font-semibold">250 zł</span></li>
              <li className="flex items-center justify-between rounded-xl border border-slate-200 p-3"><span>{t.addons.a2}</span><span className="font-semibold">150 zł</span></li>
              <li className="flex items-center justify-between rounded-xl border border-slate-200 p-3"><span>{t.addons.a3}</span><span className="font-semibold">200 zł</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 md:py-20 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.process.title}</h2>
          <ol className="mt-8 grid md:grid-cols-4 gap-6">
            {t.process.steps.map((s, i) => (
              <li key={i} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="text-xs text-slate-500">{t.process.step} {i + 1}</div>
                <div className="mt-1 font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.industries.title}</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold flex items-center gap-2"><Truck className="h-5 w-5" /> {t.industries.i1.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
                {t.industries.i1.points.map((p, i) => (<li key={i}>{p}</li>))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold flex items-center gap-2"><Boxes className="h-5 w-5" /> {t.industries.i2.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
                {t.industries.i2.points.map((p, i) => (<li key={i}>{p}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="md:flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.pricing.title}</h2>
              <p className="mt-2 text-slate-300 max-w-2xl">{t.pricing.lead}</p>
            </div>
            <a href="#contact" className="mt-6 md:mt-0 inline-flex items-center gap-2 rounded-2xl bg-white text-slate-900 px-5 py-3 shadow hover:shadow-md">
              {t.pricing.cta} <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-slate-300">{t.pricing.package}</div>
              <div className="mt-1 text-4xl font-extrabold">2000 zł</div>
              <ul className="mt-4 space-y-2 text-sm">
                {t.pricing.includes.map((p, i) => (
                  <li key={i} className="flex gap-2"><CheckCircle className="h-5 w-5" /> <span>{p}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-slate-300">{t.pricing.termsTitle}</div>
              <ul className="mt-2 space-y-2 text-sm">
                {t.pricing.terms.map((p, i) => (
                  <li key={i} className="flex gap-2"><ShieldCheck className="h-5 w-5" /> <span>{p}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-slate-300">{t.pricing.addonsTitle}</div>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex justify-between"><span>{t.addons.a1}</span><span className="font-semibold">250 zł</span></li>
                <li className="flex justify-between"><span>{t.addons.a2}</span><span className="font-semibold">150 zł</span></li>
                <li className="flex justify-between"><span>{t.addons.a3}</span><span className="font-semibold">200 zł</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">FAQ</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {t.faq.map((f, i) => (
              <div key={i} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="font-semibold">{f.q}</div>
                <p className="mt-2 text-sm text-slate-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-10 shadow-sm">
            <div className="md:flex items-center justify-between gap-10">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.contact.title}</h2>
                <p className="mt-2 text-slate-700">{t.contact.lead}</p>
                <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
                  <a href="mailto:hola@iberipolconnect.com" className="flex items-center gap-2 rounded-2xl bg-white border border-slate-300 px-4 py-3 hover:bg-slate-100"><Mail className="h-4 w-4" /> hola@iberipolconnect.com</a>
                  <a href="tel:+48000000000" className="flex items-center gap-2 rounded-2xl bg-white border border-slate-300 px-4 py-3 hover:bg-slate-100"><Phone className="h-4 w-4" /> +48 000 000 000</a>
                  <a href="#" className="flex items-center gap-2 rounded-2xl bg-slate-900 text-white px-4 py-3 hover:shadow-md"><Calendar className="h-4 w-4" /> {t.contact.cta}</a>
                </div>
                <p className="mt-4 text-xs text-slate-500">{t.contact.note}</p>
              </div>

              <div className="mt-8 md:mt-0 md:w-1/3">
                <form className="rounded-2xl bg-white p-5 border border-slate-200 shadow-sm">
                  <div className="text-sm text-slate-500">{t.contact.formTitle}</div>
                  <label className="block mt-3 text-sm">{t.contact.formName}
                    <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="Jan Kowalski" />
                  </label>
                  <label className="block mt-3 text-sm">Email
                    <input type="email" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="jan@firma.pl" />
                  </label>
                  <label className="block mt-3 text-sm">{t.contact.formMsg}
                    <textarea className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" rows={4} placeholder={t.contact.formPlaceholder}></textarea>
                  </label>
                  <button type="button" onClick={() => alert(t.contact.formDisclaimer)} className="mt-4 w-full rounded-2xl bg-slate-900 text-white px-4 py-2">{t.contact.formSend}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6 text-sm text-slate-600">
          <div>
            <div className="font-semibold text-slate-900">IberiPol connect</div>
            <p className="mt-2 max-w-xs">{t.footer.tagline}</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">{t.footer.links}</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#services" className="hover:underline">{t.nav.services}</a></li>
              <li><a href="#process" className="hover:underline">{t.nav.process}</a></li>
              <li><a href="#pricing" className="hover:underline">{t.nav.pricing}</a></li>
              <li><a href="#contact" className="hover:underline">{t.nav.cta}</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">{t.footer.legal}</div>
            <p className="mt-2 text-xs text-slate-500 leading-relaxed">{t.footer.legalText}</p>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-slate-400">© {new Date().getFullYear()} IberiPol connect. {t.footer.rights}</div>
      </footer>
    </div>
  );
}

function StatCard({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center">
      <div className="text-3xl font-extrabold text-slate-900">{value} {suffix ? <span className="text-base font-semibold text-slate-500">{suffix}</span> : null}</div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 text-slate-900 font-semibold">{icon} {title}</div>
      <p className="mt-2 text-sm text-slate-700">{desc}</p>
    </div>
  );
}

const translations = {
  pl: {
    nav: {
      services: "Usługi",
      process: "Jak pracujemy",
      industries: "Branże",
      pricing: "Cennik",
      cta: "Umów rozmowę",
    },
    hero: {
      title: "Umawiamy rozmowy PL → ES dla producentów stolarki i kosmetyków",
      subtitle: "Jesteśmy łącznikiem: kwalifikujemy dystrybutorów w Hiszpanii i ustawiamy wideorozmowy z decydentami. Ty prowadzisz sprzedaż i logistykę — my dowozimy pipeline.",
      primaryCta: "Zobacz pakiet 5 rozmów",
      secondaryCta: "Co dokładnie robimy",
      bullets: [
        "5 kwalifikowanych spotkań online w Twojej kategorii",
        "Decydent po stronie Hiszpanii + wstępne dopasowanie potrzeb",
        "Wymiana 1:1 w razie no‑show",
        "Materiały i wsparcie po hiszpańsku",
      ],
      stats: {
        meetings: "rozmów w pakiecie",
        time: "tyg.",
        timeUnit: "tyg.",
        noShow: "no‑show → wymiana",
        languages: "języki",
      },
      cardTitle: "Pakiet startowy: 5 rozmów",
      cardNote: "Realizacja do 6 tygodni od startu",
    },
    services: {
      title: "Co dowozimy",
      lead: "Pełny prospecting i umawianie z decydentami po stronie hiszpańskich dystrybutorów. Ty rozmawiasz handlowo i fakturujesz.",
      f1: { title: "Research + Outreach", desc: "Budujemy listę 150–300 kontaktów (email/LinkedIn/telefon), wielokanałowy follow‑up po hiszpańsku." },
      f2: { title: "Kwalifikacja leadów", desc: "Tylko rozmowy z decydentami lub współdecydentami (Compras/Comercial/Owner). Min. 20 min w kalendarzu." },
      f3: { title: "Koordynacja kalendarza", desc: "Zaproszenia, potwierdzenia, notatki po spotkaniach. W razie no‑show — wymiana 1:1." },
    },
    addons: {
      title: "Dodatki (opcjonalnie)",
      a1: "Tłumaczenie one‑pagera na hiszpański",
      a2: "Tłumacz na rozmowie (online)",
      a3: "Przygotowanie oferty po hiszpańsku",
    },
    process: {
      title: "Jak pracujemy (4 kroki)",
      step: "Krok",
      steps: [
        { title: "Kick‑off (PL)", desc: "Materiały: katalog, cennik EXW, certyfikaty; ustalamy ICP i parametry (MOQ, lead‑time)." },
        { title: "Outreach (ES)", desc: "Cold email/LinkedIn/telefon. Testujemy 2–3 linie komunikacji, ustawiamy sloty w kalendarzu." },
        { title: "Rozmowy", desc: "5 kwalifikowanych wideokonferencji z decydentami po hiszpańsku. Ty prowadzisz handlowo." },
        { title: "Feedback", desc: "Po każdej rozmowie notatka. Opcjonalne wsparcie w ofercie/PL etykietach." },
      ],
    },
    industries: {
      title: "Branże na start",
      i1: { title: "Stolarka okienna i drzwiowa (PVC/ALU)", points: ["Uw, pakiety 3‑szybowe, rolety/moskitiery", "CE/DoP, referencje UE", "Krótki lead‑time i dobre ceny vs. ES"] },
      i2: { title: "Kosmetyki naturalne", points: ["Vegan/cruelty‑free, możliwy private label", "Pełna dokumentacja: INCI/CPNP", "Krótkie serie, packshoty i claimy po hiszpańsku"] },
    },
    pricing: {
      title: "Prosty cennik",
      lead: "Płacisz za dostarczenie rozmów, nie za obietnice. Logistyka i fakturowanie po Twojej stronie.",
      cta: "Porozmawiajmy",
      package: "Pakiet startowy (5 rozmów)",
      includes: ["Research + outreach + kwalifikacja", "5 rozmów online z decydentami", "Koordynacja kalendarza i notatki", "Wymiana 1:1 przy no‑show"],
      termsTitle: "Warunki",
      terms: ["50% start / 50% po 3. rozmowie", "Realizacja do 6 tygodni", "Klauzula anty‑obejścia: 12 mies., 2% success fee lub 2000 zł"],
      addonsTitle: "Dodatki",
    },
    faq: [
      { q: "Co to jest ‘kwalifikowane spotkanie’?", a: "Po stronie ES obecny jest decydent lub współdecydent; firma deklaruje realną potrzebę; min. 20 min w kalendarzu; w razie no‑show – wymiana 1:1." },
      { q: "Czy pomagacie w ofercie i tłumaczeniach?", a: "Tak, jako dodatki: one‑pager, tłumacz na rozmowie, oferta po hiszpańsku." },
      { q: "Czy pracujecie z innymi branżami?", a: "Na start: stolarka i kosmetyki. Inne branże rozpatrujemy indywidualnie po walidacji popytu w ES." },
      { q: "Kto wystawia faktury?", a: "Ty – producent/dostawca. My dowozimy pipeline i rozmowy, nie bierzemy logistyki ani fakturowania." },
    ],
    contact: {
      title: "Zacznijmy od krótkiej rozmowy",
      lead: "Daj znać, w której branży działasz i kiedy możemy się połączyć. Odezwiemy się z 2–3 propozycjami terminów.",
      cta: "Zarezerwuj termin",
      note: "Przesyłając dane kontaktowe potwierdzasz, że możemy wrócić z informacją handlową (RODO B2B).",
      formTitle: "Wiadomość (demo)",
      formName: "Imię i nazwisko",
      formMsg: "Wiadomość",
      formPlaceholder: "Interesuje nas pakiet 5 rozmów w kategorii…",
      formSend: "Wyślij",
      formDisclaimer: "To makieta formularza demonstracyjnego. Użyj przycisku e‑mail powyżej lub dodaj własny endpoint.",
    },
    footer: {
      tagline: "Łączymy polskich producentów z hiszpańskimi dystrybutorami. Rozmowy z decydentami w 6 tygodni.",
      links: "Nawigacja",
      legal: "Informacja prawna",
      legalText: "IberiPol connect działa jako pośrednik umawiający rozmowy B2B. Logistyka, umowy i fakturowanie pozostają po stronie producenta i dystrybutora.",
      rights: "Wszelkie prawa zastrzeżone.",
    },
  },
  es: {
    nav: {
      services: "Servicios",
      process: "Cómo trabajamos",
      industries: "Sectores",
      pricing: "Tarifas",
      cta: "Agenda una llamada",
    },
    hero: {
      title: "Concertamos reuniones PL → ES para ventanas/puertas y cosmética natural",
      subtitle: "Somos el puente: cualificamos distribuidores en España y agendamos videollamadas con decisores. Tú llevas la venta y la logística; nosotros entregamos pipeline.",
      primaryCta: "Ver paquete 5 reuniones",
      secondaryCta: "Qué hacemos",
      bullets: [
        "5 reuniones cualificadas online en tu categoría",
        "Decisor o co-decisor + encaje preliminar",
        "Sustitución 1:1 en caso de no‑show",
        "Materiales y soporte en español",
      ],
      stats: {
        meetings: "reuniones por paquete",
        time: "sem.",
        timeUnit: "sem.",
        noShow: "no‑show → reemplazo",
        languages: "idiomas",
      },
      cardTitle: "Paquete inicial: 5 reuniones",
      cardNote: "Entrega en 6 semanas",
    },
    services: {
      title: "Qué entregamos",
      lead: "Prospección completa y agenda con decisores en distribuidores españoles. Tú vendes y facturas.",
      f1: { title: "Research + Outreach", desc: "Lista de 150–300 contactos (email/LinkedIn/teléfono) y seguimiento multicanal en español." },
      f2: { title: "Cualificación", desc: "Solo reuniones con decisores o co-decisores (Compras/Comercial/Owner). Mín. 20 min con invitación." },
      f3: { title: "Coordinación de agenda", desc: "Invitaciones, confirmaciones y notas post-reunión. No‑show → reemplazo 1:1." },
    },
    addons: {
      title: "Extras (opcionales)",
      a1: "Traducción de one‑pager al español",
      a2: "Intérprete en la videollamada",
      a3: "Preparación de oferta en español",
    },
    process: {
      title: "Proceso en 4 pasos",
      step: "Paso",
      steps: [
        { title: "Kick‑off (PL)", desc: "Materiales: catálogo, precios EXW, certificados; definimos ICP y parámetros (MOQ, lead‑time)." },
        { title: "Outreach (ES)", desc: "Email/LinkedIn/teléfono. Probamos 2–3 ángulos y fijamos huecos en agenda." },
        { title: "Reuniones", desc: "5 videollamadas cualificadas con decisores en español. Tú llevas lo comercial." },
        { title: "Feedback", desc: "Nota después de cada reunión. Soporte opcional en oferta/etiquetado." },
      ],
    },
    industries: {
      title: "Sectores iniciales",
      i1: { title: "Ventanas y puertas (PVC/ALU)", points: ["Uw, triple acristalamiento, persianas/mosquiteras", "CE/DoP, referencias UE", "Plazos competitivos y buena relación calidad-precio"] },
      i2: { title: "Cosmética natural", points: ["Vegan/cruelty‑free, posible marca blanca", "Documentación completa: INCI/CPNP", "Series cortas, packshots y claims en español"] },
    },
    pricing: {
      title: "Tarifas claras",
      lead: "Pagas por reuniones entregadas, no por promesas. La logística y la facturación quedan de tu lado.",
      cta: "Hablemos",
      package: "Paquete inicial (5 reuniones)",
      includes: ["Research + outreach + cualificación", "5 videollamadas con decisores", "Coordinación de agenda y notas", "Reemplazo 1:1 ante no‑show"],
      termsTitle: "Condiciones",
      terms: ["50% inicio / 50% tras la 3ª reunión", "Entrega en 6 semanas", "Cláusula anti‑desintermediación: 12 meses, 2% success fee o 2000 PLN"],
      addonsTitle: "Extras",
    },
    faq: [
      { q: "¿Qué es una ‘reunión cualificada’?", a: "Asiste un decisor o co-decisor; la empresa declara necesidad real; mínimo 20 min con invitación; no‑show → reemplazo 1:1." },
      { q: "¿Apoyan con ofertas y traducciones?", a: "Sí, como extras: one‑pager, intérprete en la llamada y oferta en español." },
      { q: "¿Trabajan otros sectores?", a: "De inicio: ventanas/puertas y cosmética. Otros sectores bajo valoración del mercado ES." },
      { q: "¿Quién factura?", a: "Tú, como fabricante/proveedor. Nosotros entregamos pipeline y reuniones; no gestionamos logística ni facturación." },
    ],
    contact: {
      title: "Empecemos con una breve llamada",
      lead: "Cuéntanos tu sector y disponibilidad. Te propondremos 2–3 huecos.",
      cta: "Reservar",
      note: "Al enviar tus datos aceptas recibir información comercial (GDPR B2B).",
      formTitle: "Mensaje (demo)",
      formName: "Nombre y apellidos",
      formMsg: "Mensaje",
      formPlaceholder: "Nos interesa el paquete de 5 reuniones en la categoría…",
      formSend: "Enviar",
      formDisclaimer: "Es un formulario de demostración. Usa el botón de email o añade tu endpoint.",
    },
    footer: {
      tagline: "Conectamos fabricantes polacos con distribuidores españoles. Reuniones con decisores en 6 semanas.",
      links: "Navegación",
      legal: "Aviso legal",
      legalText: "IberiPol connect actúa como intermediario para agendar reuniones B2B. La logística, contratos y facturación se gestionan entre fabricante y distribuidor.",
      rights: "Todos los derechos reservados.",
    },
  },
} as const;
