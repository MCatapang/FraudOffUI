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
      {[...Array(3)].map((_, i) => (
        <div key={i} className="group inline-block animate-slide group-hover:paused">
          {items.map((item, j) => (
            <div key={j} className="text-slate-500/50 dark:text-slate-500 inline-block mx-12 h-50px line-through hover:no-underline hover:text-accent-foreground dark:hover:text-accent-foreground transition">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}