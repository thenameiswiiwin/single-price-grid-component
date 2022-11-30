const LIST = [
  { title: 'Tutorials by industry experts', id: 1 },
  { title: 'Peer & expert code review', id: 2 },
  { title: 'Coding exercises', id: 3 },
  { title: 'Access to our GitHub repos', id: 4 },
  { title: 'Community forum', id: 5 },
  { title: 'Flashcard decks', id: 6 },
  { title: 'New videos every week', id: 7 },
];

const App = () => {
  return (
    <div className="flex h-screen items-center justify-center px-8">
      <main className="overflow-hidden rounded-lg text-white">
        <div className="md:grid md:max-w-2xl md:grid-cols-2">
          <section className="container space-y-4 bg-white py-6 md:col-span-2 md:p-12">
            <h1 className="text-2xl font-bold text-primary-cyan">
              Join our community
            </h1>
            <h2 className="text-lg font-bold text-primary-green">
              30-day, hassle-free money back guarantee
            </h2>
            <p className="text-neutral-grayBlue">
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills.
            </p>
          </section>

          <section className="container col-span-2 space-y-6 bg-primary-cyan py-6 md:col-span-1 md:p-12">
            <h2 className="text-lg font-bold">Monthly Subscription</h2>
            <div className="flex flex-col justify-center gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-3xl font-bold">$29</h3>
                <span className="text-base font-normal text-neutral-grayLight">
                  per month
                </span>
              </div>
              <p>Full access for less than $1 a day</p>
            </div>
            <button
              className="w-full rounded bg-primary-green py-3 text-lg font-bold"
              type="button"
            >
              Sign Up
            </button>
          </section>

          <section className="container space-y-4 bg-primary-cyan/80 py-6 md:col-span-1 md:p-12">
            <h2 className="text-lg font-bold">Why Us</h2>
            <ul className="space-y-1">
              {LIST.map((item) => (
                <li key={item.id} className="text-sm text-neutral-grayLight">
                  {item.title}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
