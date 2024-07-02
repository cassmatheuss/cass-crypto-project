import Link from "next/link"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { heroHeader } from "@/config/contents"
import { FaTelegramPlane } from "react-icons/fa";

export default function HeroHeader() {
  return (
    <section className="container flex gap-4 pb-12 pt-4 text-center lg:items-center lg:gap-2 lg:py-20">
      {heroHeader.image !== "" ? (
        <div className="flex flex-1 invisible justify-center lg:justify-end md:visible">
          <Image
            src={heroHeader.image}
            width={500}
            height={500}
            alt="Header image"
          />
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold lg:text-6xl">
            {heroHeader.header}
          </h1>
          <h2 className="text-lg font-light text-muted-foreground lg:text-3xl">
            {heroHeader.subheader}
          </h2>
        </div>
        <Link
          href="https://t.me/cassmaaa"
          target="_blank"
          className={`w-[25rem] hover:scale-105 ${cn(buttonVariants({ size: "lg" }))}`}
        >
          <FaTelegramPlane size={30}/>
        </Link>
      </div>
    </section>
  )
}
