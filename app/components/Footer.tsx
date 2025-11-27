import React from "react";

// CronusFooter.jsx
// Simple, modern, dark footer using Tailwind CSS.
// No framer-motion, no extra hooks, no unnecessary code.

export const Cronusfooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Cronus</h3>
            <p className="text-sm text-gray-400 max-w-[18rem]">
              A focused issue-tracking experience — fast, clear, and designed for teams who ship.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="/features" className="text-sm text-gray-300 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-sm text-gray-300 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/faq" className="text-sm text-gray-300 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/docs" className="text-sm text-gray-300 hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername/cronus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="text-sm text-gray-300 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              {/* Minimal social icons */}
              <a href="#" aria-label="Twitter" className="p-2 rounded-md hover:bg-white/5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-300">
                  <path d="M20 8.5c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.4-1.8-.7.4-1.6.7-2.5.8A4.2 4.2 0 0012 11a12 12 0 01-8.7-4.4 4.1 4.1 0 001.3 5.6c-.5 0-1-.2-1.5-.4 0 2 1.4 3.6 3.3 4-.6.2-1.3.2-1.9.1.5 1.6 2 2.8 3.7 2.8A8.5 8.5 0 014 19.6 12 12 0 0020 8.5z" stroke="currentColor" strokeWidth="0" fill="currentColor" />
                </svg>
              </a>

              <a href="#" aria-label="GitHub" className="p-2 rounded-md hover:bg-white/5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-300">
                  <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .8.1-.6.4-1.1.7-1.4-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.8 0 0 .8-.3 2.7 1 .8-.2 1.7-.3 2.6-.3s1.8.1 2.6.3c1.9-1.3 2.7-1 2.7-1 .5 1.5.2 2.5.1 2.8.6.7 1 1.6 1 2.7 0 3.8-2.2 4.7-4.5 4.9.4.4.8 1 .8 2v3c0 .3.2.6.7.5 4-1.3 6.9-5.1 6.9-9.6C22 6.6 17.5 2 12 2z" stroke="currentColor" strokeWidth="0" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {year} Cronus. All rights reserved.</p>
          <div className="text-sm text-gray-400">Built with care · Designed for speed</div>
        </div>
      </div>
    </footer>
  );
}
