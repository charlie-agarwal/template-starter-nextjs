export default function HowItWorks() {
    return (
      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <Step number={1} title="Import Data" description="Upload your spreadsheet or CSV files containing expense data" />
            <Step number={2} title="AI Analysis" description="Our AI categorizes and analyzes your expense data" />
            <Step number={3} title="Review & Manage" description="Review categorized expenses and manage your financial records effortlessly" />
          </div>
        </div>
      </section>
    )
  }
  
  function Step({ number, title, description }) {
    return (
      <div className="flex flex-col items-center space-y-3 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">{number}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    )
  }