import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { 
  Database, 
  Layers, 
  Shield, 
  Zap,
  Cloud,
  Server,
  Smartphone,
  Globe,
  Lock,
  BarChart3,
  Users,
  Settings
} from 'lucide-react'

export function ArchitecturePage() {
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
              <Layers className="h-3 w-3 mr-1" />
              System Architecture
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Technical Architecture
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Scalable, secure, and production-ready architecture designed for enterprise-grade crypto DCA operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Layers className="h-5 w-5 mr-2" />
                  System Overview
                </CardTitle>
                <CardDescription>
                  Microservices architecture with clear separation of concerns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <Smartphone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-semibold">iOS Frontend</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">SwiftUI + MVVM</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <Server className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Backend Services</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Python/Flask APIs</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <Database className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Data Layer</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">PostgreSQL + Redis</p>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-4">Key Architectural Principles</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm">Security by Design</span>
                        </div>
                        <div className="flex items-center">
                          <Zap className="h-4 w-4 text-yellow-600 mr-2" />
                          <span className="text-sm">High Performance</span>
                        </div>
                        <div className="flex items-center">
                          <BarChart3 className="h-4 w-4 text-blue-600 mr-2" />
                          <span className="text-sm">Horizontal Scalability</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Lock className="h-4 w-4 text-red-600 mr-2" />
                          <span className="text-sm">Compliance Ready</span>
                        </div>
                        <div className="flex items-center">
                          <Cloud className="h-4 w-4 text-indigo-600 mr-2" />
                          <span className="text-sm">Cloud Native</span>
                        </div>
                        <div className="flex items-center">
                          <Settings className="h-4 w-4 text-slate-600 mr-2" />
                          <span className="text-sm">Maintainable Code</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Technology Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium mb-2">Frontend</h5>
                      <div className="space-y-1">
                        <Badge variant="outline" className="mr-2">SwiftUI</Badge>
                        <Badge variant="outline" className="mr-2">MVVM</Badge>
                        <Badge variant="outline">Combine</Badge>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Backend</h5>
                      <div className="space-y-1">
                        <Badge variant="outline" className="mr-2">Python 3.11</Badge>
                        <Badge variant="outline" className="mr-2">Flask</Badge>
                        <Badge variant="outline">Celery</Badge>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Database</h5>
                      <div className="space-y-1">
                        <Badge variant="outline" className="mr-2">PostgreSQL</Badge>
                        <Badge variant="outline" className="mr-2">Redis</Badge>
                        <Badge variant="outline">SQLAlchemy</Badge>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Infrastructure</h5>
                      <div className="space-y-1">
                        <Badge variant="outline" className="mr-2">Docker</Badge>
                        <Badge variant="outline" className="mr-2">Kubernetes</Badge>
                        <Badge variant="outline">AWS/GCP</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">API Response Time</span>
                      <Badge variant="secondary">&lt; 200ms</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Database Queries</span>
                      <Badge variant="secondary">&lt; 50ms</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Concurrent Users</span>
                      <Badge variant="secondary">10,000+</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Uptime SLA</span>
                      <Badge variant="secondary">99.9%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Detailed Architecture Sections */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="h-5 w-5 mr-2" />
                  iOS Application Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">MVVM Pattern</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                      Clean separation between UI, business logic, and data management
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Views (SwiftUI)</span>
                        <Badge variant="outline">UI Layer</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">ViewModels</span>
                        <Badge variant="outline">Logic Layer</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Models</span>
                        <Badge variant="outline">Data Layer</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Key Components</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-sm">AppState Management</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        <span className="text-sm">API Service Layer</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                        <span className="text-sm">Onramp SDK Integration</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                        <span className="text-sm">Security & Keychain</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="h-5 w-5 mr-2" />
                  Backend Microservices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Core Services</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">User Management</span>
                        <Badge variant="outline">Auth</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Portfolio Service</span>
                        <Badge variant="outline">Core</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Purchase Engine</span>
                        <Badge variant="outline">DCA</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Onramp Aggregator</span>
                        <Badge variant="outline">Integration</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Supporting Services</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-sm">Notification Service</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        <span className="text-sm">Compliance Monitor</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                        <span className="text-sm">Analytics Service</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                        <span className="text-sm">Audit Logger</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  Data Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">PostgreSQL Schema</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Users & Profiles</span>
                        <Badge variant="outline">Core</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Portfolios & Holdings</span>
                        <Badge variant="outline">Financial</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">DCA Schedules</span>
                        <Badge variant="outline">Automation</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Transactions</span>
                        <Badge variant="outline">History</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Redis Caching</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                        <span className="text-sm">Session Management</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                        <span className="text-sm">API Rate Limiting</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                        <span className="text-sm">Price Data Cache</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                        <span className="text-sm">Task Queue</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Security & Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Security Layers</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">TLS/SSL Encryption</span>
                        <Badge variant="outline">Transport</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Database Encryption</span>
                        <Badge variant="outline">At Rest</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">JWT Authentication</span>
                        <Badge variant="outline">API</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Certificate Pinning</span>
                        <Badge variant="outline">Mobile</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Compliance Features</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        <span className="text-sm">KYC/AML Integration</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        <span className="text-sm">Audit Trail Logging</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        <span className="text-sm">GDPR Compliance</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        <span className="text-sm">SOC 2 Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

