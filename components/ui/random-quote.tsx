"use client"

import { useEffect, useMemo, useState } from "react";

export default function RandomQuote() {
  const quotes = useMemo(() => [
    {
      content: "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
      author: "Maya Angelou",
    },
    {
      content: "The challenge is in the moment; the time is always now.",
      author: "James Baldwin",
    },
    {
      content: "Rather fail with honor than succeed by fraud.",
      author: "Sophocles",
    },
    {
      content: "Torture the data, and it will confess to everything.",
      author: "Ronald Coase",
    },
  ], []);

  const [quote, setQuote] = useState(quotes[0])

  useEffect(() => { 
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]); 
  }, [quotes])

  return (
    <blockquote className="space-y-2">
      <p className="text-lg">
        &ldquo;{quote.content}&rdquo;
      </p>
      <footer className="text-sm">{quote.author}</footer>
    </blockquote>
  )
}