import React, { useState } from 'react';
import { Mail, ArrowRight, Star, MessageCircle, BookOpen, Heart } from 'lucide-react';

export default function JimmyAdamsLife() {
  const [email, setEmail] = useState('');
  const [arcEmail, setArcEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [arcSubmitted, setArcSubmitted] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  const handleArcSubmit = (e) => {
    e.preventDefault();
    if (arcEmail) {
      setArcSubmitted(true);
      setTimeout(() => setArcSubmitted(false), 3000);
      setArcEmail('');
    }
  };

  const reviews = [
    {
      author: "Michael T.",
      role: "ARC Reader",
      text: "This isn't just a memoir. It's a masterclass in facing what you've been through and choosing wholeness. Jimmy's honesty will break you open and rebuild you.",
      rating: 5
    },
    {
      author: "Sarah M.",
      role: "Beta Reader",
      text: "Reading this made me realize I've been carrying guilt that was never mine. Jimmy's journey gave me permission to go back for the parts of myself I left behind.",
      rating: 5
    },
    {
      author: "David R.",
      role: "ARC Reader",
      text: "Raw, real, and exactly what men need to read. No fluff, no performance. Just a man telling the truth about what life taught him.",
      rating: 5
    }
  ];

  const chapters = [
    {
      part: "PART I",
      title: "The Pieces That Shaped Me",
      description: "From childhood confusion to survival in unfamiliar streets, discover the foundation beneath everything.",
      chapters: ["Trees Outside the Window", "A Spark Inside Me", "The Disneyland Fight", "The Mirror That Broke Me", "Into the Wild", "The General"]
    },
    {
      part: "PART II",
      title: "The Pieces That Guided Me",
      description: "Dreams, love, fatherhood, and the dangerous work of helping everyone but yourself.",
      chapters: ["Chasing the Dream", "What Keeps the Dream Alive?", "Becoming a Father", "The Fixer"]
    },
    {
      part: "PART III",
      title: "The Pieces That Made Me Whole",
      description: "Facing the truth, loving yourself, rebuilding from within, and finding your way back.",
      chapters: ["Facing What You Have Been Through", "Learning to Love Yourself", "Rebuilding From Within", "Finding Your Way Back to Yourself"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">Jimmy Adams</div>
          <div className="hidden md:flex gap-8">
            <a href="#story" className="text-gray-700 hover:text-gray-900">Story</a>
            <a href="#book" className="text-gray-700 hover:text-gray-900">The Book</a>
            <a href="#arc" className="text-gray-700 hover:text-gray-900">ARC Program</a>
            <a href="#community" className="text-gray-700 hover:text-gray-900">Community</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Ocean Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%), url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 800%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad1%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23667eea;stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%231a73e8;stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%221200%22 height=%22800%22 fill=%22url(%23grad1)%22/%3E%3Cpath d=%22M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z%22 fill=%22%23ffffff%22 opacity=%220.1%22/%3E%3C/svg%3E')`
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Find Your Way Back<br />to Yourself
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
            A true story of survival, healing, and discovering wholeness—one piece at a time.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#arc" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2">
              Join the ARC <ArrowRight size={20} />
            </a>
            <a href="#story" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Read the Story
            </a>
          </div>
        </div>
      </section>

      {/* Story Intro Section */}
      <section id="story" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-blue-600 font-semibold mb-2">YOUR JOURNEY BEGINS</p>
            <h2 className="text-4xl font-bold mb-6">What Happens When You Stop Running?</h2>
            <p className="text-lg text-gray-700 mb-6">
              I spent most of my life moving forward. Surviving. Building. Helping. Chasing dreams. But somewhere along the way, I realized I'd left pieces of myself behind—pieces that still needed healing.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              This book is not about escape. It's about going back for what you left behind and bringing it into the life you're building now.
            </p>
            <p className="text-lg text-gray-700 font-semibold">
              It's about finding your way back to you.
            </p>
          </div>

          {/* Three-Part Structure */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {chapters.map((section, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200">
                <p className="text-sm font-bold text-blue-600 mb-2">{section.part}</p>
                <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <p className="text-sm text-gray-500">{section.chapters.length} chapters</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Preview Section */}
      <section id="book" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">The Pieces That Made Me Whole</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gray-300 aspect-[9/12] rounded-lg mb-6 flex items-center justify-center">
                <BookOpen size={60} className="text-gray-500" />
              </div>
              <p className="text-gray-600">
                <strong>Coming Soon</strong> — An intimate memoir exploring childhood confusion, family separation, Los Angeles survival, and the long journey toward wholeness.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">What You'll Discover</h3>
              <ul className="space-y-4">
                {[
                  "How childhood pain shapes adult patterns—and how to break free",
                  "The difference between survival and healing",
                  "Why dreams can become distractions from deeper work",
                  "How to love yourself without abandoning others",
                  "The path to becoming whole"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <Heart size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Themes */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded">
            <h4 className="font-bold mb-3">Core Themes</h4>
            <p className="text-gray-700">
              Faith • Purpose • Resilience • Family • Legacy • Personal Growth • Healing • Wholeness
            </p>
          </div>
        </div>
      </section>

      {/* ARC Program CTA */}
      <section id="arc" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Become an ARC Reader</h2>
              <p className="text-lg mb-6 text-blue-100">
                Join our community of beta readers who get the book before publication and help shape its final form.
              </p>
              <ul className="space-y-3">
                {[
                  "First access to the complete manuscript",
                  "Direct connection with Jimmy",
                  "Shape the book's journey",
                  "Your voice matters in this story"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <Star size={20} className="flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Join the ARC Program</h3>
              {arcSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded p-4 text-green-900">
                  ✓ Thank you! Check your email for next steps.
                </div>
              ) : (
                <form onSubmit={handleArcSubmit} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={arcEmail}
                    onChange={(e) => setArcEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Get Early Access
                  </button>
                  <p className="text-sm text-gray-600 text-center">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Community Reviews */}
      <section id="community" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">What Readers Are Saying</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, idx) => (
              <div 
                key={idx}
                className={`p-8 rounded-lg border-2 transition cursor-pointer ${
                  activeReview === idx 
                    ? 'border-blue-600 bg-white' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
                onClick={() => setActiveReview(idx)}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{review.author}</p>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">Have you read an advance copy?</p>
            <a href="#arc" className="text-blue-600 font-semibold hover:text-blue-800">
              Leave your review →
            </a>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Follow the Journey</h3>
              <p className="text-gray-700">
                Subscribe for updates on the book launch, exclusive insights, and Jimmy's latest thoughts on healing, purpose, and wholeness.
              </p>
            </div>
            
            <div>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-900">
                  ✓ Thank you for subscribing! Welcome to the community.
                </div>
              ) : (
                <form onSubmit={handleEmailSubmit} className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
                  >
                    <Mail size={18} />
                    <span className="hidden sm:inline">Subscribe</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-4">Jimmy Adams</h4>
              <p className="text-gray-400">Entrepreneur, Author, and Guide for Finding Your Way Back.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#story" className="hover:text-white">The Story</a></li>
                <li><a href="#book" className="hover:text-white">The Book</a></li>
                <li><a href="#arc" className="hover:text-white">ARC Program</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://twitter.com" className="hover:text-white">Twitter</a></li>
                <li><a href="https://instagram.com" className="hover:text-white">Instagram</a></li>
                <li><a href="https://linkedin.com" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Brand</h4>
              <p className="text-gray-400 mb-4">Creating a culture of understanding, one story at a time.</p>
              <p className="text-gray-400 text-sm">© 2026 Jimmy Adams. All rights reserved.</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>JimmyAdamsLife.com — Where Pieces Become Whole</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
