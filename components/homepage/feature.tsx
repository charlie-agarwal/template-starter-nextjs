import { Clock, DollarSign, FileSpreadsheet, Zap, BarChart2, ArrowRight } from "lucide-react"

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <FeatureItem icon={Clock} title="Time-Saving" description="Significantly reduce time spent on expense management" />
          <FeatureItem icon={DollarSign} title="Cost-Effective" description="Lower costs associated with financial record-keeping" />
          <FeatureItem icon={FileSpreadsheet} title="Easy Import" description="Import data directly from spreadsheets or CSV files" />
          <FeatureItem icon={Zap} title="AI-Powered" description="Intelligent categorization based on AI learning" />
          <FeatureItem icon={BarChart2} title="Multi-Business Support" description="Manage expenses across multiple businesses effortlessly" />
          <FeatureItem icon={ArrowRight} title="Focus on Growth" description="Free up time to focus on core business activities" />
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center space-y-3 text-center">
      <Icon className="h-12 w-12 text-primary" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  )
}