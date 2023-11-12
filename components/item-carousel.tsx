"use client"

export default function ItemCarousel() {
  const items: string[] = [
    "Malicious Activity",
    "Fraudulent Behavior",
    "Unusual Charges",
    "Suspicious Transactions",
  ];

  return (
    <div className="group select-none w-full overflow-hidden whitespace-nowrap relative">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r dark:from-background to-transparent z-10"/>
      {[...Array(3)].map((_, i) => (
        <div key={i} className="group inline-block animate-slide group-hover:paused">
          {items.map((item, j) => (
            <div key={j} className="text-slate-500/50 inline-block mx-12 h-50px line-through hover:no-underline hover:text-red-600 transition">
              {item}
            </div>
          ))}
        </div>
      ))}
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l dark:from-background to-transparent z-10"/>
    </div>
  )
}