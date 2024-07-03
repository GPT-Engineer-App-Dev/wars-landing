import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
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
    </div>
  );
};

export default Contact;