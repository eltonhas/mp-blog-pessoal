export default function Home() {
  return (
    <main className="flex h-screen flex-col">
      <header className="font-alt flex w-full items-center justify-center bg-slate-100 py-10">
        <h1 className="text-3xl font-semibold md:text-5xl">
          <span className="text-blue-500">Tech</span>Blog
        </h1>
      </header>
      <section className="mx-auto flex w-full max-w-3xl px-8 pt-4 font-sans md:px-0">
        <div className="flex flex-col gap-2 border-b-2 border-slate-300 pb-2">
          <h2 className="text-2xl font-medium text-gray-800">
            Mindfulness no Mundo Moderno: Encontrando Calma naAgitação
          </h2>
          <p className="text-xl font-medium italic text-gray-600">
            Exploração de como a prática do mindfulness pode ajudar a lidar com
            o estresse e a ansiedade no cenário atual.
          </p>
          <p className="text-right text-lg italic text-blue-500">11/08/2023</p>
        </div>
      </section>
    </main>
  )
}
