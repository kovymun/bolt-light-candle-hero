import { useState } from "react";
import { ShoppingBag } from "lucide-react";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div
            className="text-3xl font-serif tracking-tight text-stone-800"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Light
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-700">
            <a href="#shop" className="hover:text-stone-900 transition-colors">
              Shop
            </a>
            <a href="#about" className="hover:text-stone-900 transition-colors">
              About Us
            </a>
            <a
              href="#contact"
              className="hover:text-stone-900 transition-colors"
            >
              Contact
            </a>
          </div>

          <button
            className="p-2 hover:bg-stone-100 rounded-full transition-colors"
            aria-label="Shopping cart"
          >
            <ShoppingBag className="w-5 h-5 text-stone-700" />
          </button>
        </nav>
      </header>

      <main className="pt-20 md:pt-24 pb-12 px-6">
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-800 mb-6 leading-tight tracking-tight px-4"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Find Your Light:
              <br />
              Crafted for Tranquility.
            </h1>

            <p className="text-base md:text-lg text-stone-600 max-w-xl mx-auto mb-10 leading-relaxed px-4">
              Hand-poured, 100% natural wax, and essential oil blends for a
              sustainable sense of home.
            </p>

            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`
                px-10 py-4 bg-stone-800 text-white rounded-full
                font-medium text-sm tracking-wide
                shadow-lg hover:shadow-xl
                transform transition-all duration-300
                ${isHovered ? "scale-105 bg-stone-900" : "scale-100"}
              `}
            >
              Explore the Collection
            </button>
          </div>

          <div className="relative mb-12 md:mb-16">
            <div className="rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <img
                src="https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                alt="Luxury hand-poured candle with warm ambient lighting"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center text-sm text-stone-600 pt-8 border-t border-stone-200 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div>
              <span>Hand-Poured in Brooklyn</span>
            </div>

            <div className="hidden md:block w-px h-4 bg-stone-300"></div>

            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div>
              <span>Sustainable Sourcing</span>
            </div>

            <div className="hidden md:block w-px h-4 bg-stone-300"></div>

            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div>
              <span>Vegan & Cruelty-Free</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
