import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Heart, Star, Sparkles, Upload, Palette, Frame, Truck } from "lucide-react";

export default function Home() {
  const [, navigate] = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const petImages = [
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663327826806/ZGPkUKZIeDSfHLOT.png",
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663327826806/cioKZEitHOLQDtCl.png",
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663327826806/SwAidaIXPdCcRjpW.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % petImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [petImages.length]);

  const artStyles = [
    {
      name: "Watercolor",
      description: "Soft, flowing artistic style",
      color: "from-blue-100 to-cyan-100",
      icon: "🎨",
    },
    {
      name: "Oil Painting",
      description: "Rich, textured masterpiece",
      color: "from-amber-100 to-orange-100",
      icon: "🖼️",
    },
    {
      name: "Digital Art",
      description: "Modern, vibrant style",
      color: "from-purple-100 to-pink-100",
      icon: "✨",
    },
    {
      name: "Sketch",
      description: "Classic pencil drawing",
      color: "from-gray-100 to-slate-100",
      icon: "✏️",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      pet: "Princess Bella",
      text: "The portrait of Bella is absolutely stunning! It captures her personality perfectly. I've received so many compliments!",
      rating: 5,
    },
    {
      name: "James Chen",
      pet: "Sir Max",
      text: "Professional, beautiful work. The whole process was smooth and the final piece exceeded my expectations.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      pet: "Charlie",
      text: "A beautiful way to remember my beloved companion. This portrait will be treasured forever.",
      rating: 5,
    },
  ];

  const steps = [
    { number: 1, title: "Upload Photo", description: "Share your pet's best photo", icon: Upload },
    { number: 2, title: "Describe Vision", description: "Tell us your creative ideas", icon: Sparkles },
    { number: 3, title: "Choose Style", description: "Select your preferred art style", icon: Palette },
    { number: 4, title: "Pick Frame", description: "Choose frame and size", icon: Frame },
    { number: 5, title: "We Create", description: "Our artists bring it to life", icon: Sparkles },
    { number: 6, title: "Receive & Enjoy", description: "Your masterpiece arrives", icon: Truck },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663327826806/YtNpNZCREiTQjjgP.png" alt="Anima Pixels" className="w-16 h-16 object-contain" />
            <span className="font-semibold text-lg text-gray-900">Anima Pixels</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#gallery" className="text-gray-600 hover:text-teal-600 transition">
              Gallery
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-teal-600 transition">
              How It Works
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-teal-600 transition">
              Testimonials
            </a>
          </div>
          <Button
            onClick={() => navigate("/order")}
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white"
          >
            Create Portrait
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-8 md:py-16" style={{backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663327826806/kNfLpQaNywHsctDA.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-white/70"></div>

        <div className="container relative z-10 text-center">
          <div className="mb-6 flex justify-center">
            <div className="inline-block">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663327826806/YtNpNZCREiTQjjgP.png" alt="Anima Pixels" className="w-96 h-96 object-contain animate-pulse" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Turn Your Loyal Friend Into a{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Timeless Masterpiece
            </span>
          </h1>

          <p className="text-lg md:text-bold text-black-600 mb-8 max-w-2xl mx-auto">
            Custom pet portraits designed exactly as you imagine them. Premium artistry meets emotional storytelling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => navigate("/order")}
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white text-lg px-8 py-6"
            >
              Create My Portrait
            </Button>
            <Button
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6"
            >
              View Gallery
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-teal-600">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">15+</div>
              <div className="text-sm text-gray-600">Art Styles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">100%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Marketing Section 1 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                <div className="relative w-full h-full">
                  {petImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="Pet Portrait"
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
                    />
                  ))}
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {petImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Gift for Your Most Loyal Friend
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your pet isn't just a companion—they're family. Celebrate that bond with a stunning custom portrait that captures their unique personality and spirit.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-red-400" />
                  <span className="text-gray-700">Personalized to your pet's unique character</span>
                </li>
                <li className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-red-400" />
                  <span className="text-gray-700">Premium quality materials and framing</span>
                </li>
                <li className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-red-400" />
                  <span className="text-gray-700">Perfect for any room in your home</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portrait Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gallery of Masterpieces
            </h2>
            <p className="text-lg text-gray-600">
              Explore our collection of stunning custom pet portraits in various artistic styles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artStyles.map((style, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${style.color} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {style.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{style.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{style.description}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Marketing Section 2 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Remember the Memories
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              With those who never left your side. A custom pet portrait is more than art—it's a celebration of unconditional love and cherished moments.
            </p>
            <Button
              onClick={() => navigate("/order")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3"
            >
              Start Creating
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              From photo to masterpiece in 6 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emotional Marketing Section 3 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-2xl p-8 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  If Your Pet Had Personality, We Turn It Into Art
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  From picky princess to royal knight—imagination becomes reality. Our artists capture not just appearance, but the essence of who your pet truly is.
                </p>
                <Button
                  onClick={() => navigate("/order")}
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-3"
                >
                  Bring Your Vision to Life
                </Button>
              </div>
              <div className="relative h-80 md:h-96 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">👑</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by Pet Parents
            </h2>
            <p className="text-lg text-gray-600">
              See what our happy customers have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">Pet: {testimonial.pet}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Create a Memory That Lasts Forever
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your pet deserves to be immortalized in art. Start your custom portrait journey today.
          </p>
          <Button
            onClick={() => navigate("/order")}
            size="lg"
            className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-10 py-6 font-semibold"
          >
            Start My Portrait
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AP</span>
                </div>
                <span className="font-semibold text-lg">Anima Pixels</span>
              </div>
              <p className="text-gray-400 text-sm">
                Premium custom pet portraits for pet lovers everywhere.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#gallery" className="hover:text-white transition">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Shipping Info
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  TikTok
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Anima Pixels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
