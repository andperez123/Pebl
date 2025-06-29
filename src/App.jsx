import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { DocumentationPage } from './components/DocumentationPage'
import { CodePage } from './components/CodePage'
import { ArchitecturePage } from './components/ArchitecturePage'
import { 
  Smartphone, 
  TrendingUp, 
  Shield, 
  Zap, 
  Code, 
  FileText, 
  Download,
  Github,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Coins,
  BarChart3,
  Lock,
  Layers,
  DollarSign,
  Calendar,
  Target
} from 'lucide-react'
import pebblesLogo from './assets/pebbles-logo.png'
import pebblesHeroBg from './assets/pebbles-hero-bg.png'
import pebblesSteps from './assets/pebbles-steps.png'

function App() {
  return (
    <Router>
      <div className="min-h-screen pebbles-gradient-hero pebbles-font-primary">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/code" element={<CodePage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
        </Routes>
      </div>
    </Router>
  )
}

function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={pebblesLogo} alt="Pebbles" className="h-8 w-8" />
              <span className="text-xl font-semibold pebbles-heading">Pebbles</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="pebbles-body hover:text-green-600 transition-colors">How it works</a>
              <a href="#why-pebbles" className="pebbles-body hover:text-green-600 transition-colors">Why Pebbles</a>
              <a href="/documentation" className="pebbles-body hover:text-green-600 transition-colors">Documentation</a>
              <button className="pebbles-button pebbles-button-primary">
                Start stacking today
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${pebblesHeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold pebbles-heading mb-6">
              Buy bits. <span className="text-green-600">Grow steadily.</span>
            </h1>
            <p className="text-xl pebbles-subheading mb-8 max-w-3xl mx-auto">
              Start your crypto foundation with small, automated monthly purchases — all guided in one smooth app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="pebbles-button pebbles-button-primary text-lg px-8 py-4">
                Start stacking today
              </button>
              <button className="pebbles-button pebbles-button-secondary text-lg px-8 py-4">
                <FileText className="h-5 w-5 mr-2" />
                View Documentation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 pebbles-gradient-section">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold pebbles-heading mb-4">
              How it works
            </h2>
            <p className="text-lg pebbles-subheading max-w-2xl mx-auto">
              Three simple steps to start building your crypto foundation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="pebbles-card p-8 h-full">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold pebbles-heading mb-4">
                  1. Choose your monthly budget
                </h3>
                <p className="pebbles-body">
                  Start with as little as $20/month. Set your comfort level and let Pebbles handle the rest.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="pebbles-card p-8 h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Coins className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold pebbles-heading mb-4">
                  2. Select what you want to stack
                </h3>
                <p className="pebbles-body">
                  Choose Bitcoin or stablecoins. Simple, clear options without overwhelming complexity.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="pebbles-card p-8 h-full">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-stone-600" />
                </div>
                <h3 className="text-xl font-semibold pebbles-heading mb-4">
                  3. Let Pebbles guide your growth
                </h3>
                <p className="pebbles-body">
                  We find the lowest-cost path and automate your purchases. Steady growth, no stress.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <img 
              src={pebblesSteps} 
              alt="How Pebbles works" 
              className="mx-auto max-w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Pebbles Section */}
      <section id="why-pebbles" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold pebbles-heading mb-4">
              Why Pebbles
            </h2>
            <p className="text-lg pebbles-subheading max-w-2xl mx-auto">
              Simple, steady, and approachable crypto investing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="pebbles-card p-6 text-center h-full">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold pebbles-heading mb-2">Lower fees</h3>
                <p className="pebbles-body text-sm">Automated routing finds the best prices across providers</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="pebbles-card p-6 text-center h-full">
                <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold pebbles-heading mb-2">Small & steady</h3>
                <p className="pebbles-body text-sm">Start small and build consistently without stress</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="pebbles-card p-6 text-center h-full">
                <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-semibold pebbles-heading mb-2">Guided growth</h3>
                <p className="pebbles-body text-sm">Optional DeFi swaps for growth — guided, never complicated</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="pebbles-card p-6 text-center h-full">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold pebbles-heading mb-2">Your keys</h3>
                <p className="pebbles-body text-sm">Full self-custody — your keys, your coins, your control</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 pebbles-gradient-water">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold pebbles-heading mb-6">
              Build your crypto future, one pebble at a time.
            </h2>
            <p className="text-xl pebbles-subheading mb-8">
              Start with just $20 and watch your foundation grow steadily.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="pebbles-button pebbles-button-primary text-lg px-8 py-4">
                Get started with $20
              </button>
              <button className="pebbles-button pebbles-button-secondary text-lg px-8 py-4">
                <Download className="h-5 w-5 mr-2" />
                Download Project
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={pebblesLogo} alt="Pebbles" className="h-6 w-6 brightness-0 invert" />
                <span className="text-lg font-semibold">Pebbles</span>
              </div>
              <p className="text-stone-400 text-sm">
                Start small, build big — without the noise. Your crypto foundation, pebble by pebble.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2">
                <a href="/documentation" className="block text-stone-400 hover:text-white text-sm transition-colors">Documentation</a>
                <a href="/code" className="block text-stone-400 hover:text-white text-sm transition-colors">Code Examples</a>
                <a href="/architecture" className="block text-stone-400 hover:text-white text-sm transition-colors">Architecture Guide</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Project</h4>
              <div className="space-y-2">
                <a href="#" className="block text-stone-400 hover:text-white text-sm transition-colors">GitHub Repository</a>
                <a href="#" className="block text-stone-400 hover:text-white text-sm transition-colors">Live Demo</a>
                <a href="#" className="block text-stone-400 hover:text-white text-sm transition-colors">Technical Specs</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <a href="#" className="block text-stone-400 hover:text-white text-sm transition-colors">Documentation</a>
                <a href="#" className="block text-stone-400 hover:text-white text-sm transition-colors">Community</a>
                <a href="#" className="block text-stone-400 hover:text-white text-sm transition-colors">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-800 mt-8 pt-8 text-center">
            <p className="text-stone-400 text-sm">
              © 2024 Pebbles. Created by Manus AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

