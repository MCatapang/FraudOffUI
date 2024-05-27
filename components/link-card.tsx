export default function LinkCard({href, title, description}: LinkCardParams) {
  return (
    <a 
      href={href}
      className="group rounded-lg border border-transparent hover:bg-accent px-5 py-4 transition-colors"
      target="_blank"
    >
      <h2 className="mb-3 text-2xl font-semibold group-hover:text-accent-foreground">
        {title}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">{description}</p>
    </a>
  )
}