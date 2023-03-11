import { Layout } from "../components/layout"

export default function Home() {
  return (
    <Layout mainColor="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div
          className="mx-auto mt-16 max-w-lg rounded-xl border border-slate-200 bg-white
            p-10 text-center sm:mt-24 lg:mt-32"
        >
          <h3 className="text-2xl font-extrabold tracking-wide text-slate-700">Hello, world!</h3>
        </div>
      </div>
    </Layout>
  )
}
