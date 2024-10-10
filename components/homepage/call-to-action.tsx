import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CallToAction() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ready to Simplify Your Expense Management?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Join thousands of entrepreneurs who are saving time and money with our AI-powered expense management
              solution.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
              <Button type="submit">Get Started</Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Start your free trial today. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}