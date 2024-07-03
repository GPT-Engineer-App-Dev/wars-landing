import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center">
      <header className="py-10">
        <h1 className="text-5xl font-bold">Wars Through History</h1>
        <p className="text-xl mt-4">Understanding the Conflicts that Shaped Our World</p>
      </header>
      <section className="hero py-20 bg-gray-100">
        <img src="/placeholder.svg" alt="Hero" className="mx-auto mb-8" />
        <p className="text-lg max-w-2xl mx-auto">
          Welcome to our website dedicated to exploring the history of wars. Here, you will find detailed information about significant conflicts that have shaped our world.
        </p>
      </section>
      <section className="about py-20">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Our mission is to provide a comprehensive understanding of the major wars throughout history. We aim to educate and inform our visitors about the causes, events, and consequences of these conflicts.
        </p>
      </section>
      <section className="history py-20 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">History</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card p-4 bg-white shadow-md">
            <h3 className="text-xl font-bold mb-2">World War I</h3>
            <p className="text-md">A global war originating in Europe that lasted from 28 July 1914 to 11 November 1918.</p>
          </div>
          <div className="card p-4 bg-white shadow-md">
            <h3 className="text-xl font-bold mb-2">World War II</h3>
            <p className="text-md">A global war that lasted from 1939 to 1945, involving most of the world's nations.</p>
          </div>
          <div className="card p-4 bg-white shadow-md">
            <h3 className="text-xl font-bold mb-2">Vietnam War</h3>
            <p className="text-md">A conflict in Vietnam, Laos, and Cambodia from 1 November 1955 to the fall of Saigon on 30 April 1975.</p>
          </div>
        </div>
      </section>
      <section className="contact py-20">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left mb-2">Name</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left mb-2">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left mb-2">Message</label>
            <textarea id="message" className="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </section>
    </div>
  );
};

export default Index;