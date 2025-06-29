import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { 
  FileText, 
  Code, 
  Database, 
  Shield, 
  Smartphone,
  Download,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Book,
  Settings,
  Zap,
  Users,
  Globe
} from 'lucide-react'

export function DocumentationPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge variant="secondary" className="mb-4">
              <Book className="h-3 w-3 mr-1" />
              Complete Documentation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Project Documentation
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Comprehensive guides, technical specifications, and implementation details for building your crypto DCA app
            </p>
          </motion.div>
        </div>
      </section>

      {/* Documentation Tabs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
              <TabsTrigger value="ios">iOS App</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="deployment">Deployment</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="h-5 w-5 mr-2" />
                        Project Overview
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-slate-600 dark:text-slate-300">
                        The Crypto DCA App is a complete iOS application designed for automated dollar-cost averaging into cryptocurrencies. 
                        It features onramp aggregation, portfolio tracking, and comprehensive security measures.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold">Key Features</h4>
                          <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                            <li className="flex items-center"><CheckCircle className="h-3 w-3 mr-2 text-green-600" />Automated DCA scheduling</li>
                            <li className="flex items-center"><CheckCircle className="h-3 w-3 mr-2 text-green-600" />Multi-provider onramp aggregation</li>
                            <li className="flex items-center"><CheckCircle className="h-3 w-3 mr-2 text-green-600" />Real-time portfolio tracking</li>
                            <li className="flex items-center"><CheckCircle className="h-3 w-3 mr-2 text-green-600" />Security and compliance</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold">Technical Stack</h4>
                          <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                            <li className="flex items-center"><CheckCircle className="h-3 w-3 mr-2 text-blue-600" />SwiftUI + MVVM</li>
                            <li className="flex items-center"><CheckCircle className="h-3 w-3 mr-2 text-blue-600" />Python/Flask Backend</li>
                            <li className="flex items-center"><CheckCircle className="h-3 w-3 mr-2 text-blue-600" />PostgreSQL + Redis</li>
                            <li className="flex items-center"><CheckCircle className="h-3 w-3 mr-2 text-blue-600" />Docker + Kubernetes</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Implementation Phases</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            phase: "Phase 1: MVP",
                            duration: "4-6 weeks",
                            description: "Core iOS app with Ramp Network integration",
                            features: ["Basic DCA functionality", "Single onramp provider", "Portfolio tracking"]
                          },
                          {
                            phase: "Phase 2: Enhanced",
                            duration: "3-4 weeks", 
                            description: "Multi-provider comparison and advanced features",
                            features: ["MoonPay integration", "Provider comparison", "Advanced analytics"]
                          },
                          {
                            phase: "Phase 3: Complete",
                            duration: "4-6 weeks",
                            description: "Full platform with DeFi integration",
                            features: ["All onramp providers", "DeFi protocols", "Advanced optimization"]
                          }
                        ].map((phase, index) => (
                          <div key={index} className="border-l-4 border-blue-500 pl-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">{phase.phase}</h4>
                              <Badge variant="outline">{phase.duration}</Badge>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">{phase.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {phase.features.map((feature, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">{feature}</Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Quick Start</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download Complete Project
                      </Button>
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View GitHub Repository
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Documentation Sections</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { icon: Database, title: "System Architecture", desc: "Microservices design and data flow" },
                          { icon: Smartphone, title: "iOS Development", desc: "SwiftUI implementation guide" },
                          { icon: Code, title: "Backend APIs", desc: "Python/Flask service architecture" },
                          { icon: Globe, title: "Onramp Integration", desc: "Provider comparison and setup" },
                          { icon: Shield, title: "Security & Compliance", desc: "KYC/AML and data protection" },
                          { icon: Settings, title: "Deployment Guide", desc: "Production deployment steps" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                            <item.icon className="h-4 w-4 text-blue-600 mt-1" />
                            <div>
                              <div className="font-medium text-sm">{item.title}</div>
                              <div className="text-xs text-slate-500">{item.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="architecture" className="mt-8">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Database className="h-5 w-5 mr-2" />
                      System Architecture
                    </CardTitle>
                    <CardDescription>
                      Comprehensive microservices architecture designed for scalability and security
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Frontend Architecture</h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                              <span className="font-medium">SwiftUI Framework</span>
                              <Badge>iOS 15+</Badge>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                              <span>MVVM Architecture</span>
                              <Badge variant="outline">Pattern</Badge>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                              <span>Reactive UI Components</span>
                              <Badge variant="outline">Modern</Badge>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Backend Services</h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                              <span className="font-medium">Python/Flask API</span>
                              <Badge>Microservices</Badge>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                              <span>PostgreSQL Database</span>
                              <Badge variant="outline">Primary</Badge>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                              <span>Redis Cache</span>
                              <Badge variant="outline">Performance</Badge>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                              <span>Kafka Message Queue</span>
                              <Badge variant="outline">Async</Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Core Services</h4>
                          <div className="space-y-3">
                            {[
                              { name: "User Management", desc: "Authentication and profiles" },
                              { name: "Portfolio Service", desc: "Holdings and performance tracking" },
                              { name: "Purchase Engine", desc: "DCA automation and execution" },
                              { name: "Onramp Aggregator", desc: "Provider comparison and routing" },
                              { name: "Notification Service", desc: "Push notifications and alerts" },
                              { name: "Compliance Monitor", desc: "KYC/AML and regulatory checks" }
                            ].map((service, index) => (
                              <div key={index} className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg">
                                <div className="font-medium text-sm">{service.name}</div>
                                <div className="text-xs text-slate-500 mt-1">{service.desc}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Infrastructure</h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                              <span className="font-medium">Docker Containers</span>
                              <Badge>Containerized</Badge>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                              <span>Kubernetes Orchestration</span>
                              <Badge variant="outline">K8s</Badge>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                              <span>Load Balancer</span>
                              <Badge variant="outline">HA</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="ios" className="mt-8">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Smartphone className="h-5 w-5 mr-2" />
                      iOS Application
                    </CardTitle>
                    <CardDescription>
                      Complete SwiftUI application with modern architecture and user experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">App Structure</h4>
                          <div className="space-y-2 font-mono text-sm">
                            <div className="pl-0">📱 CryptoDCAApp/</div>
                            <div className="pl-4">├── Models/</div>
                            <div className="pl-8">├── AppState.swift</div>
                            <div className="pl-8">├── UserProfile.swift</div>
                            <div className="pl-8">├── Portfolio.swift</div>
                            <div className="pl-8">└── OnrampProvider.swift</div>
                            <div className="pl-4">├── Views/</div>
                            <div className="pl-8">├── Onboarding/</div>
                            <div className="pl-8">├── Dashboard/</div>
                            <div className="pl-8">├── Portfolio/</div>
                            <div className="pl-8">├── Purchase/</div>
                            <div className="pl-8">├── Settings/</div>
                            <div className="pl-8">└── Components/</div>
                            <div className="pl-4">└── Services/</div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Key Features</h4>
                          <div className="space-y-2">
                            {[
                              "Onboarding flow with budget setup",
                              "Portfolio dashboard with charts",
                              "Automated purchase scheduling",
                              "Onramp provider comparison",
                              "Security and wallet integration",
                              "Push notifications and alerts"
                            ].map((feature, index) => (
                              <div key={index} className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Technical Implementation</h4>
                          <div className="space-y-3">
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                              <h5 className="font-medium mb-2">MVVM Architecture</h5>
                              <p className="text-sm text-slate-600 dark:text-slate-300">
                                Clean separation of concerns with reactive data binding and state management
                              </p>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                              <h5 className="font-medium mb-2">SwiftUI Components</h5>
                              <p className="text-sm text-slate-600 dark:text-slate-300">
                                Modern UI components with animations, charts, and interactive elements
                              </p>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                              <h5 className="font-medium mb-2">Security Integration</h5>
                              <p className="text-sm text-slate-600 dark:text-slate-300">
                                Keychain storage, certificate pinning, and biometric authentication
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Development Setup</h4>
                          <div className="space-y-2 text-sm">
                            <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded font-mono">
                              # Open in Xcode<br/>
                              open CryptoDCAApp.xcworkspace
                            </div>
                            <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded font-mono">
                              # Install dependencies<br/>
                              pod install
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="backend" className="mt-8">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="h-5 w-5 mr-2" />
                      Backend Services
                    </CardTitle>
                    <CardDescription>
                      Scalable microservices architecture with Python/Flask and modern infrastructure
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">API Endpoints</h4>
                          <div className="space-y-2">
                            {[
                              { method: "POST", endpoint: "/api/auth/login", desc: "User authentication" },
                              { method: "GET", endpoint: "/api/users/profile", desc: "User profile data" },
                              { method: "GET", endpoint: "/api/portfolio", desc: "Portfolio holdings" },
                              { method: "POST", endpoint: "/api/purchases", desc: "Create DCA purchase" },
                              { method: "GET", endpoint: "/api/onramps/quotes", desc: "Compare provider quotes" },
                              { method: "POST", endpoint: "/api/schedules", desc: "Setup DCA schedule" }
                            ].map((api, index) => (
                              <div key={index} className="flex items-center space-x-3 p-2 border border-slate-200 dark:border-slate-700 rounded">
                                <Badge variant={api.method === 'GET' ? 'secondary' : 'default'} className="text-xs">
                                  {api.method}
                                </Badge>
                                <code className="text-sm font-mono flex-1">{api.endpoint}</code>
                                <span className="text-xs text-slate-500">{api.desc}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Database Schema</h4>
                          <div className="space-y-2">
                            {[
                              { table: "users", desc: "User accounts and profiles" },
                              { table: "portfolios", desc: "User portfolio holdings" },
                              { table: "transactions", desc: "Purchase and sale records" },
                              { table: "schedules", desc: "DCA automation settings" },
                              { table: "providers", desc: "Onramp provider configurations" },
                              { table: "compliance_logs", desc: "Regulatory audit trail" }
                            ].map((table, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded">
                                <code className="font-mono text-sm">{table.table}</code>
                                <span className="text-xs text-slate-500">{table.desc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Service Architecture</h4>
                          <div className="space-y-3">
                            {[
                              {
                                service: "Authentication Service",
                                tech: "JWT + OAuth2",
                                desc: "User authentication and authorization"
                              },
                              {
                                service: "Portfolio Service", 
                                tech: "Python/Flask",
                                desc: "Holdings tracking and performance analytics"
                              },
                              {
                                service: "Purchase Engine",
                                tech: "Celery + Redis",
                                desc: "Automated DCA execution and scheduling"
                              },
                              {
                                service: "Onramp Aggregator",
                                tech: "REST APIs",
                                desc: "Provider comparison and routing"
                              },
                              {
                                service: "Notification Service",
                                tech: "APNs + FCM",
                                desc: "Push notifications and alerts"
                              }
                            ].map((service, index) => (
                              <div key={index} className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <h5 className="font-medium">{service.service}</h5>
                                  <Badge variant="outline" className="text-xs">{service.tech}</Badge>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-300">{service.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Development Commands</h4>
                          <div className="space-y-2 text-sm">
                            <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded font-mono">
                              # Setup environment<br/>
                              python -m venv venv<br/>
                              source venv/bin/activate
                            </div>
                            <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded font-mono">
                              # Install dependencies<br/>
                              pip install -r requirements.txt
                            </div>
                            <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded font-mono">
                              # Run development server<br/>
                              python manage.py runserver
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="integrations" className="mt-8">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="h-5 w-5 mr-2" />
                      Onramp Provider Integrations
                    </CardTitle>
                    <CardDescription>
                      Comprehensive integration with major onramp providers for optimal pricing and coverage
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        {[
                          {
                            provider: "Ramp Network",
                            status: "Primary",
                            features: ["Native iOS SDK", "Liquidity aggregation", "Simple integration"],
                            complexity: "Low"
                          },
                          {
                            provider: "MoonPay",
                            status: "Secondary", 
                            features: ["React Native SDK", "URL signing", "Comprehensive API"],
                            complexity: "Medium"
                          }
                        ].map((provider, index) => (
                          <Card key={index}>
                            <CardHeader>
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">{provider.provider}</CardTitle>
                                <Badge variant={provider.status === 'Primary' ? 'default' : 'secondary'}>
                                  {provider.status}
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium">Integration Complexity</span>
                                  <Badge variant="outline">{provider.complexity}</Badge>
                                </div>
                                <div>
                                  <span className="text-sm font-medium mb-2 block">Key Features</span>
                                  <div className="space-y-1">
                                    {provider.features.map((feature, idx) => (
                                      <div key={idx} className="flex items-center text-sm">
                                        <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                                        {feature}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      <div className="space-y-6">
                        {[
                          {
                            provider: "Transak",
                            status: "Extended",
                            features: ["136+ cryptocurrencies", "White label options", "Extensive customization"],
                            complexity: "Medium"
                          },
                          {
                            provider: "Coinbase Pay",
                            status: "Extended",
                            features: ["Coinbase user base", "Self-custody support", "Brand recognition"],
                            complexity: "Medium"
                          }
                        ].map((provider, index) => (
                          <Card key={index}>
                            <CardHeader>
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">{provider.provider}</CardTitle>
                                <Badge variant="outline">{provider.status}</Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium">Integration Complexity</span>
                                  <Badge variant="outline">{provider.complexity}</Badge>
                                </div>
                                <div>
                                  <span className="text-sm font-medium mb-2 block">Key Features</span>
                                  <div className="space-y-1">
                                    {provider.features.map((feature, idx) => (
                                      <div key={idx} className="flex items-center text-sm">
                                        <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                                        {feature}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">Integration Strategy</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <h5 className="font-medium text-sm mb-1">Phase 1: MVP</h5>
                                <p className="text-xs text-slate-600 dark:text-slate-300">Start with Ramp Network for fastest implementation</p>
                              </div>
                              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                <h5 className="font-medium text-sm mb-1">Phase 2: Enhanced</h5>
                                <p className="text-xs text-slate-600 dark:text-slate-300">Add MoonPay for comparison and redundancy</p>
                              </div>
                              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                <h5 className="font-medium text-sm mb-1">Phase 3: Complete</h5>
                                <p className="text-xs text-slate-600 dark:text-slate-300">Full aggregation with all providers</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="deployment" className="mt-8">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="h-5 w-5 mr-2" />
                      Deployment Guide
                    </CardTitle>
                    <CardDescription>
                      Complete production deployment instructions for iOS app and backend services
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">iOS App Deployment</h4>
                          <div className="space-y-3">
                            {[
                              { step: "1", title: "Xcode Configuration", desc: "Bundle ID, certificates, and signing" },
                              { step: "2", title: "Build Archive", desc: "Create release build for distribution" },
                              { step: "3", title: "App Store Connect", desc: "Upload and configure metadata" },
                              { step: "4", title: "Review Submission", desc: "Submit for Apple review process" },
                              { step: "5", title: "Release Management", desc: "Phased rollout and monitoring" }
                            ].map((item, index) => (
                              <div key={index} className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                  {item.step}
                                </div>
                                <div>
                                  <h5 className="font-medium text-sm">{item.title}</h5>
                                  <p className="text-xs text-slate-600 dark:text-slate-300">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Prerequisites</h4>
                          <div className="space-y-2">
                            {[
                              "Apple Developer Program membership",
                              "Xcode 15.0+ with iOS 17 SDK",
                              "Provisioning profiles and certificates",
                              "App Store Connect access"
                            ].map((req, index) => (
                              <div key={index} className="flex items-center text-sm">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                {req}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Backend Deployment</h4>
                          <div className="space-y-3">
                            {[
                              { step: "1", title: "Container Build", desc: "Docker image creation and registry push" },
                              { step: "2", title: "Infrastructure Setup", desc: "Kubernetes cluster and resources" },
                              { step: "3", title: "Database Migration", desc: "PostgreSQL setup and schema deployment" },
                              { step: "4", title: "Service Deployment", desc: "Microservices rollout and configuration" },
                              { step: "5", title: "Monitoring Setup", desc: "Logging, metrics, and alerting" }
                            ].map((item, index) => (
                              <div key={index} className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                  {item.step}
                                </div>
                                <div>
                                  <h5 className="font-medium text-sm">{item.title}</h5>
                                  <p className="text-xs text-slate-600 dark:text-slate-300">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Infrastructure Requirements</h4>
                          <div className="space-y-2">
                            {[
                              "Kubernetes cluster (AWS EKS/GKE/AKS)",
                              "PostgreSQL database (managed service)",
                              "Redis cache cluster",
                              "Load balancer and CDN",
                              "Monitoring and logging stack"
                            ].map((req, index) => (
                              <div key={index} className="flex items-center text-sm">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                                {req}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-3">Production Checklist</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h5 className="font-medium text-sm">Security</h5>
                          {[
                            "SSL/TLS certificates configured",
                            "API keys and secrets secured",
                            "Database encryption enabled",
                            "Security audit completed"
                          ].map((item, index) => (
                            <div key={index} className="flex items-center text-sm">
                              <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                              {item}
                            </div>
                          ))}
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium text-sm">Monitoring</h5>
                          {[
                            "Application metrics configured",
                            "Error tracking enabled",
                            "Performance monitoring active",
                            "Alerting rules defined"
                          ].map((item, index) => (
                            <div key={index} className="flex items-center text-sm">
                              <CheckCircle className="h-3 w-3 text-blue-600 mr-2" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

