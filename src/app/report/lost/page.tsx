import ReportForm from '@/app/components/report-form'

export default function ReportLostItem() {
  return (
    <div className="max-w-md mx-auto fade-in">
      <h2 className="text-2xl font-semibold mb-4 text-center">Report Lost Item</h2>
      <ReportForm type="lost" />
    </div>
  )
}

