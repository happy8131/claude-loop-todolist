import TodoApp from "./components/TodoApp";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <div className="w-full max-w-xl">
        <h1 className="mb-6 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          할 일 목록
        </h1>
        <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <TodoApp />
        </section>
      </div>
    </main>
  );
}
