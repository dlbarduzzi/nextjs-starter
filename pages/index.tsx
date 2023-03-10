import { Layout } from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl space-y-10 px-4 py-10">
        <div className="rounded-2xl border border-slate-300 bg-white p-10 text-center">
          <h3 className="text-2xl font-extrabold tracking-wide text-slate-900">
            Hello, world!
          </h3>
        </div>
      </div>
    </Layout>
  )
}
