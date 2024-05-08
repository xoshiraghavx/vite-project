/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oUn1hIJfDG4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <>
      <header className="w-full bg-gradient-to-r from-[#5C8D4E] to-[#8DC36F] py-44 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <LeafIcon className="h-8 w-8 text-[#F5F5F5]" />
                <h1 className="text-3xl md:text-4xl font-bold text-[#F5F5F5]">Herbal Locks</h1>
              </div>
              <p className="text-lg md:text-xl text-[#F5F5F5]">Unlock the power of nature for your hair.</p>
              <Button className="bg-[#F5F5F5] hover:bg-[#E0E0E0] text-[#5C8D4E] px-6 py-3 rounded-md transition-colors duration-300">
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
                width="400"
              />
            </div>
          </div>
        </div>
      </header>
      <section className="w-full bg-gradient-to-r from-[#F5F5F5] to-[#FAFAFA] py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                alt="Herbal Hair Oil"
                className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width="400"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333]">Nourish Your Hair Naturally</h2>
              <p className="text-lg md:text-xl text-[#666666]">
                Our herbal hair oil is formulated with a blend of ancient Ayurvedic ingredients to deeply nourish and
                strengthen your hair.
              </p>
              <ul className="space-y-3 text-[#666666]">
                <li className="flex items-center space-x-3">
                  <LeafIcon className="h-6 w-6 text-[#5C8D4E]" />
                  <span>Promotes hair growth and thickness</span>
                </li>
                <li className="flex items-center space-x-3">
                  <LeafIcon className="h-6 w-6 text-[#5C8D4E]" />
                  <span>Reduces hair fall and breakage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <LeafIcon className="h-6 w-6 text-[#5C8D4E]" />
                  <span>Nourishes and conditions the scalp</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gradient-to-r from-[#FAFAFA] to-[#F5F5F5] py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333]">Ingredients That Nourish</h2>
              <p className="text-lg md:text-xl text-[#666666]">
                Our herbal hair oil is crafted with a blend of carefully selected Ayurvedic ingredients to provide your
                hair with the nourishment it needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 transition-colors duration-300 hover:text-[#5C8D4E]">
                  <LeafIcon className="h-6 w-6 text-[#5C8D4E]" />
                  <span className="text-[#666666]">Amla</span>
                </div>
                <div className="flex items-center space-x-3 transition-colors duration-300 hover:text-[#5C8D4E]">
                  <LeafIcon className="h-6 w-6 text-[#5C8D4E]" />
                  <span className="text-[#666666]">Bhringraj</span>
                </div>
                <div className="flex items-center space-x-3 transition-colors duration-300 hover:text-[#5C8D4E]">
                  <LeafIcon className="h-6 w-6 text-[#5C8D4E]" />
                  <span className="text-[#666666]">Coconut Oil</span>
                </div>
                <div className="flex items-center space-x-3 transition-colors duration-300 hover:text-[#5C8D4E]">
                  <LeafIcon className="h-6 w-6 text-[#5C8D4E]" />
                  <span className="text-[#666666]">Sesame Oil</span>
                </div>
              </div>
            </div>
            <div>
              <img
                alt="Herbal Ingredients"
                className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width="400"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gradient-to-r from-[#F5F5F5] to-[#FAFAFA] py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333]">What Our Customers Say</h2>
            <p className="text-lg md:text-xl text-[#666666]">
              Hear from our satisfied customers about the transformative effects of our herbal hair oil.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white dark:bg-[#333333] p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage alt="Customer 1" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>C1</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold text-[#333333] dark:text-[#F5F5F5]">Jane Doe</h3>
                    <p className="text-[#666666] dark:text-[#CCCCCC]">Satisfied Customer</p>
                  </div>
                </div>
                <p className="text-[#666666] dark:text-[#CCCCCC]">
                  "I've been using Locks in Ayurvedic for a few months now and I'm amazed by the results. My hair is
                  stronger, healthier, and more vibrant than ever before."
                </p>
              </Card>
              <Card className="bg-white dark:bg-[#333333] p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage alt="Customer 2" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>C2</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold text-[#333333] dark:text-[#F5F5F5]">John Smith</h3>
                    <p className="text-[#666666] dark:text-[#CCCCCC]">Satisfied Customer</p>
                  </div>
                </div>
                <p className="text-[#666666] dark:text-[#CCCCCC]">
                  "I was skeptical at first, but after using Locks in Ayurvedic, I can't imagine going back to my old
                  hair products. This oil has truly transformed my hair."
                </p>
              </Card>
              <Card className="bg-white dark:bg-[#333333] p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage alt="Customer 3" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>C3</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold text-[#333333] dark:text-[#F5F5F5]">Sarah Lee</h3>
                    <p className="text-[#666666] dark:text-[#CCCCCC]">Satisfied Customer</p>
                  </div>
                </div>
                <p className="text-[#666666] dark:text-[#CCCCCC]">
                  "I've struggled with hair loss for years, but since using Locks in Ayurvedic, I've noticed a
                  significant reduction in shedding and my hair is growing back stronger than ever."
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gradient-to-r from-[#FAFAFA] to-[#F5F5F5] py-12 md:py-20 lg:py-24">
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
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    className="transition-colors duration-300 focus:ring-2 focus:ring-[#5C8D4E] focus:border-[#5C8D4E]"
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="transition-colors duration-300 focus:ring-2 focus:ring-[#5C8D4E] focus:border-[#5C8D4E]"
                  id="message"
                  placeholder="Enter your message"
                />
              </div>
              <Button
                className="w-full bg-[#5C8D4E] hover:bg-[#4A7340] text-[#F5F5F5] transition-colors duration-300"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
      <footer className="w-full bg-gradient-to-r from-[#5C8D4E] to-[#8DC36F] text-[#F5F5F5] py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3 transition-colors duration-300 hover:text-[#E0E0E0]">
              <LeafIcon className="h-6 w-6" />
              <span className="text-lg font-bold">Locks in Ayurvedic</span>
            </div>
            <nav className="flex items-center space-x-6">
              <a className="hover:underline transition-colors duration-300 hover:text-[#E0E0E0]" href="#">
                Home
              </a>
              <a className="hover:underline transition-colors duration-300 hover:text-[#E0E0E0]" href="#">
                Products
              </a>
              <a className="hover:underline transition-colors duration-300 hover:text-[#E0E0E0]" href="#">
                About
              </a>
              <a className="hover:underline transition-colors duration-300 hover:text-[#E0E0E0]" href="#">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  )
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}