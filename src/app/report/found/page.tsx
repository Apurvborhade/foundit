import ReportForm from '@/app/components/report-form'

export default function ReportFoundItem() {
  return (
    <div className="max-w-md mx-auto fade-in">
      <h2 className="text-2xl font-semibold mb-4 text-center">Report Found Item</h2>
      <ReportForm type="found" />
    </div>
  )
}

