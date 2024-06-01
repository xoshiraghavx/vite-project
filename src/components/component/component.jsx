import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { InfiniteMovingCards } from "../ui/infinite-moving-cards"
import Testimonials from "./Testimonials"
import Ingredient from "./Ingredient"
import About from "./About"

export function Component() {
  return (<>
    <header
      className="w-full bg-gradient-to-r from-[#5C8D4E] to-[#8DC36F] py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <LeafIcon className="h-8 w-8 text-[#F5F5F5]" />
              <h1 className="text-3xl md:text-4xl font-bold text-[#F5F5F5]">Herbal Locks</h1>
            </div>
            <p className="text-lg md:text-xl text-[#F5F5F5]">Unlock the power of nature for your hair.</p>
            <Button
              className="bg-[#F5F5F5] hover:bg-[#E0E0E0] text-[#5C8D4E] px-6 py-3 rounded-md transition-colors duration-300">
              Shop Now
            </Button>
          </div>
          <div className="hidden md:block">
            <img
              alt="Herbal Hair Oil"
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width="400" />
          </div>
        </div>
      </div>
    </header>
    <section
      className="w-full py-12 md:py-20 lg:py-24">
      <About/>
    </section>
    <section
      className="w-full bg-gradient-to-r from-[#FAFAFA] to-[#F5F5F5] py-12 md:py-20 lg:py-24">
      <Ingredient/>
    </section>
    <section>
      <Testimonials/>
    </section>
    <section
      className="w-full bg-gradient-to-r from-[#FAFAFA] to-[#F5F5F5] py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333]">Contact Us</h2>
          <p className="text-lg md:text-xl text-[#666666]">Have a question or feedback? Get in touch with us.</p>
          <form className="w-full max-w-md mx-auto space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  className="transition-colors duration-300 focus:ring-2 focus:ring-[#5C8D4E] focus:border-[#5C8D4E]"
                  id="name"
                  placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  className="transition-colors duration-300 focus:ring-2 focus:ring-[#5C8D4E] focus:border-[#5C8D4E]"
                  id="email"
                  placeholder="Enter your email"
                  type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="transition-colors duration-300 focus:ring-2 focus:ring-[#5C8D4E] focus:border-[#5C8D4E]"
                id="message"
                placeholder="Enter your message" />
            </div>
            <Button
              className="w-full bg-[#5C8D4E] hover:bg-[#4A7340] text-[#F5F5F5] transition-colors duration-300"
              type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
    <footer
      className="w-full bg-gradient-to-r from-[#5C8D4E] to-[#8DC36F] text-[#F5F5F5] py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div
            className="flex items-center space-x-3 transition-colors duration-300 hover:text-[#E0E0E0]">
            <LeafIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Locks in Ayurvedic</span>
          </div>
          <nav className="flex items-center space-x-6">
            <Link
              className="hover:underline transition-colors duration-300 hover:text-[#E0E0E0]"
              href="#">
              Home
            </Link>
            <Link
              className="hover:underline transition-colors duration-300 hover:text-[#E0E0E0]"
              href="#">
              Products
            </Link>
            <Link
              className="hover:underline transition-colors duration-300 hover:text-[#E0E0E0]"
              href="#">
              About
            </Link>
            <Link
              className="hover:underline transition-colors duration-300 hover:text-[#E0E0E0]"
              href="#">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  </>);
}
function LeafIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>)
  );
}

