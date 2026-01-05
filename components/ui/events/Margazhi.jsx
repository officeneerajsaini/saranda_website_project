"use client";

export default function MargazhiCard() {
  return (
    <a 
      href="https://iitmparadox.org/events" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block w-full cursor-pointer hover:opacity-95 transition-opacity mb-8"
    >
      <div className="w- h-64 md:h-96 lg:h-[500px] bg-gradient-to-br from-red-500 via-orange-400 to-yellow-300 rounded-lg overflow-hidden justify-center">
        <img 
          src="/images/margazhi.png"
          alt="Margazhi Event" 
          className="w-full h-full object-cover"
        />
      </div>
    </a>
  );
}