// KnowYourSkin.AI - Main Site Code

import React from "react"; import { Card, CardContent } from "@/components/ui/card"; import { Input } from "@/components/ui/input"; import { Button } from "@/components/ui/button";

export default function Home() { return ( <main className="min-h-screen p-6 bg-pink-50"> <h1 className="text-4xl font-bold mb-6 text-center text-pink-700"> KnowYourSkin.AI </h1>

<div className="grid md:grid-cols-3 gap-6">
    <BotCard
      title="1. Find Your Perfect Makeup Shade"
      desc="Upload a natural-light photo or describe your skin tone to get eyeshadow and makeup suggestions."
      route="/makeup-shade"
    />

    <BotCard
      title="2. Get Daily Skincare Routine"
      desc="Upload or describe your skin tone to get a personalized daily skincare routine."
      route="/daily-skincare"
    />

    <BotCard
      title="3. Fix Skin Issues"
      desc="Struggling with pimples, tanning, dark circles or red skin? Get home remedy + best Amazon products."
      route="/skin-problems"
    />
  </div>
</main>

); }

function BotCard({ title, desc, route }) { return ( <Card className="rounded-2xl shadow-xl hover:shadow-2xl border-pink-300 border"> <CardContent className="p-4 flex flex-col gap-3"> <h2 className="text-xl font-semibold text-pink-600">{title}</h2> <p className="text-gray-600 text-sm">{desc}</p> <a href={route} className="mt-auto"> <Button className="w-full bg-pink-600 text-white hover:bg-pink-700"> Start </Button> </a> <p className="text-xs text-right text-gray-400 mt-2"> Bot created by Priyanka Patel </p> </CardContent> </Card> ); }

