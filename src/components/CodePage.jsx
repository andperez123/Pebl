import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { 
  Code, 
  Download,
  Copy,
  ExternalLink,
  FileText,
  Smartphone,
  Database,
  Globe,
  Terminal,
  Layers,
  Zap
} from 'lucide-react'

export function CodePage() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

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
              <Code className="h-3 w-3 mr-1" />
              Production Ready Code
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Code Examples & Implementation
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Complete codebase with SwiftUI frontend, Python backend, and comprehensive integration examples
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Download className="h-5 w-5 mr-2" />
                Download Complete Project
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="h-5 w-5 mr-2" />
                View on GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="ios" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
              <TabsTrigger value="ios">iOS/SwiftUI</TabsTrigger>
              <TabsTrigger value="backend">Backend API</TabsTrigger>
              <TabsTrigger value="onramp">Onramp SDKs</TabsTrigger>
              <TabsTrigger value="database">Database</TabsTrigger>
              <TabsTrigger value="deployment">Deployment</TabsTrigger>
            </TabsList>

            <TabsContent value="ios" className="mt-8">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Smartphone className="h-5 w-5 mr-2" />
                      SwiftUI Implementation
                    </CardTitle>
                    <CardDescription>
                      Modern iOS app with MVVM architecture and reactive UI components
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">Main App Structure</h4>
                          <Button variant="outline" size="sm" onClick={() => copyToClipboard('// SwiftUI App code')}>
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                          <pre className="text-sm">
{`import SwiftUI

@main
struct CryptoDCAApp: App {
    @StateObject private var appState = AppState()
    
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(appState)
        }
    }
}

struct ContentView: View {
    @EnvironmentObject var appState: AppState
    
    var body: some View {
        Group {
            if appState.isOnboardingComplete {
                MainTabView()
            } else {
                OnboardingView()
            }
        }
        .animation(.easeInOut, value: appState.isOnboardingComplete)
    }
}`}
                          </pre>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">Portfolio Dashboard View</h4>
                          <Button variant="outline" size="sm" onClick={() => copyToClipboard('// Portfolio View code')}>
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                          <pre className="text-sm">
{`struct DashboardView: View {
    @EnvironmentObject var appState: AppState
    @State private var isRefreshing = false
    
    var body: some View {
        NavigationView {
            ScrollView {
                LazyVStack(spacing: 20) {
                    // Welcome Header
                    welcomeHeader
                    
                    // Portfolio Overview
                    portfolioOverview
                    
                    // Quick Actions
                    quickActions
                    
                    // Recent Transactions
                    recentTransactions
                }
                .padding()
            }
            .navigationTitle("Dashboard")
            .refreshable {
                await refreshData()
            }
        }
    }
    
    private var portfolioOverview: some View {
        Card {
            VStack(alignment: .leading, spacing: 16) {
                HStack {
                    Text("Portfolio Value")
                        .font(.headline)
                    Spacer()
                    Text(appState.portfolio.totalValue.formatted(.currency(code: "USD")))
                        .font(.title2)
                        .fontWeight(.bold)
                }
                
                PieChartView(data: appState.portfolio.assetAllocation)
                    .frame(height: 200)
            }
            .padding()
        }
    }
}`}
                          </pre>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">DCA Manager Service</h4>
                          <Button variant="outline" size="sm" onClick={() => copyToClipboard('// DCA Manager code')}>
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                          <pre className="text-sm">
{`class DCAManager: ObservableObject {
    @Published var nextPurchaseDate: Date?
    @Published var isProcessing = false
    
    private let apiService = APIService()
    private let notificationManager = NotificationManager()
    
    func scheduleDCA(amount: Double, asset: String, frequency: DCAFrequency) async {
        isProcessing = true
        defer { isProcessing = false }
        
        do {
            let schedule = DCASchedule(
                amount: amount,
                asset: asset,
                frequency: frequency,
                nextExecutionDate: calculateNextDate(frequency: frequency)
            )
            
            try await apiService.createDCASchedule(schedule)
            await scheduleLocalNotification(for: schedule)
            
            nextPurchaseDate = schedule.nextExecutionDate
        } catch {
            print("Failed to schedule DCA: \\(error)")
        }
    }
    
    private func calculateNextDate(frequency: DCAFrequency) -> Date {
        let calendar = Calendar.current
        let now = Date()
        
        switch frequency {
        case .daily:
            return calendar.date(byAdding: .day, value: 1, to: now) ?? now
        case .weekly:
            return calendar.date(byAdding: .weekOfYear, value: 1, to: now) ?? now
        case .monthly:
            return calendar.date(byAdding: .month, value: 1, to: now) ?? now
        }
    }
}`}
                          </pre>
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
                      <Database className="h-5 w-5 mr-2" />
                      Python/Flask Backend
                    </CardTitle>
                    <CardDescription>
                      Microservices architecture with RESTful APIs and async processing
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">Flask Application Setup</h4>
                          <Button variant="outline" size="sm" onClick={() => copyToClipboard('# Flask app code')}>
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                          <pre className="text-sm">
{`from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
from celery import Celery
import redis

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')

db = SQLAlchemy(app)
jwt = JWTManager(app)
redis_client = redis.Redis.from_url(os.getenv('REDIS_URL'))

# Celery configuration for async tasks
celery = Celery(
    app.import_name,
    broker=os.getenv('CELERY_BROKER_URL'),
    backend=os.getenv('CELERY_RESULT_BACKEND')
)

@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.authenticate(data['email'], data['password'])
    
    if user:
        access_token = create_access_token(identity=user.id)
        return jsonify({
            'access_token': access_token,
            'user': user.to_dict()
        })
    
    return jsonify({'error': 'Invalid credentials'}), 401

@app.route('/api/portfolio', methods=['GET'])
@jwt_required()
def get_portfolio():
    user_id = get_jwt_identity()
    portfolio = Portfolio.query.filter_by(user_id=user_id).first()
    
    if not portfolio:
        return jsonify({'error': 'Portfolio not found'}), 404
    
    return jsonify(portfolio.to_dict())

if __name__ == '__main__':
    app.run(debug=True)`}
                          </pre>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">DCA Purchase Service</h4>
                          <Button variant="outline" size="sm" onClick={() => copyToClipboard('# Purchase service code')}>
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                          <pre className="text-sm">
{`@celery.task
def execute_dca_purchase(schedule_id):
    """Async task to execute DCA purchase"""
    schedule = DCASchedule.query.get(schedule_id)
    if not schedule:
        return {'error': 'Schedule not found'}
    
    try:
        # Get best onramp provider
        best_provider = OnrampAggregator.get_best_quote(
            amount=schedule.amount,
            asset=schedule.asset,
            user_location=schedule.user.location
        )
        
        # Execute purchase
        purchase = Purchase(
            user_id=schedule.user_id,
            amount=schedule.amount,
            asset=schedule.asset,
            provider=best_provider.name,
            status='pending'
        )
        
        db.session.add(purchase)
        db.session.commit()
        
        # Process with provider
        result = best_provider.execute_purchase(purchase)
        
        # Update purchase status
        purchase.status = result.status
        purchase.transaction_id = result.transaction_id
        db.session.commit()
        
        # Schedule next purchase
        schedule.next_execution = calculate_next_execution(schedule)
        db.session.commit()
        
        # Send notification
        NotificationService.send_purchase_confirmation(
            user=schedule.user,
            purchase=purchase
        )
        
        return {'success': True, 'purchase_id': purchase.id}
        
    except Exception as e:
        purchase.status = 'failed'
        purchase.error_message = str(e)
        db.session.commit()
        return {'error': str(e)}

class OnrampAggregator:
    @staticmethod
    def get_best_quote(amount, asset, user_location):
        providers = [RampProvider(), MoonPayProvider(), TransakProvider()]
        quotes = []
        
        for provider in providers:
            try:
                quote = provider.get_quote(amount, asset, user_location)
                quotes.append(quote)
            except Exception as e:
                logger.warning(f"Provider {provider.name} failed: {e}")
        
        # Return provider with lowest total cost
        return min(quotes, key=lambda q: q.total_cost)`}
                          </pre>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">Database Models</h4>
                          <Button variant="outline" size="sm" onClick={() => copyToClipboard('# Database models code')}>
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                          <pre className="text-sm">
{`class User(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    email = db.Column(db.String(255), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    portfolio = db.relationship('Portfolio', backref='user', uselist=False)
    dca_schedules = db.relationship('DCASchedule', backref='user')
    purchases = db.relationship('Purchase', backref='user')

class Portfolio(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = db.Column(db.String(36), db.ForeignKey('user.id'), nullable=False)
    total_value = db.Column(db.Numeric(20, 8), default=0)
    total_invested = db.Column(db.Numeric(20, 8), default=0)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    holdings = db.relationship('Holding', backref='portfolio')

class DCASchedule(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = db.Column(db.String(36), db.ForeignKey('user.id'), nullable=False)
    amount = db.Column(db.Numeric(10, 2), nullable=False)
    asset = db.Column(db.String(10), nullable=False)
    frequency = db.Column(db.Enum(DCAFrequency), nullable=False)
    next_execution = db.Column(db.DateTime, nullable=False)
    is_active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Purchase(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = db.Column(db.String(36), db.ForeignKey('user.id'), nullable=False)
    amount = db.Column(db.Numeric(10, 2), nullable=False)
    asset = db.Column(db.String(10), nullable=False)
    provider = db.Column(db.String(50), nullable=False)
    status = db.Column(db.Enum(PurchaseStatus), default=PurchaseStatus.PENDING)
    transaction_id = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="onramp" className="mt-8">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="h-5 w-5 mr-2" />
                      Onramp Provider Integrations
                    </CardTitle>
                    <CardDescription>
                      SDK implementations for MoonPay, Ramp, Transak, and Coinbase Pay
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">Ramp Network Integration (iOS)</h4>
                          <Button variant="outline" size="sm" onClick={() => copyToClipboard('// Ramp integration code')}>
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                          <pre className="text-sm">
{`import Ramp

class RampManager: ObservableObject {
    static let shared = RampManager()
    
    func initializeRamp() -> RampViewController {
        var config = Configuration()
        config.hostApiKey = Config.rampAPIKey
        config.userEmailAddress = UserManager.shared.userEmail
        config.enabledFlows = [.onramp]
        config.defaultAsset = "USDC"
        config.defaultFiatCurrency = "USD"
        
        let rampVC = try! RampViewController(configuration: config)
        rampVC.delegate = self
        return rampVC
    }
    
    func presentRamp(from viewController: UIViewController, amount: Double) {
        let rampVC = initializeRamp()
        rampVC.modalPresentationStyle = .pageSheet
        viewController.present(rampVC, animated: true)
    }
}

extension RampManager: RampDelegate {
    func ramp(_ rampViewController: RampViewController, didCreatePurchase purchase: RampPurchase, purchaseViewToken: String, apiUrl: URL) {
        // Handle successful purchase
        AnalyticsManager.shared.trackPurchase(
            amount: purchase.amount,
            asset: purchase.asset,
            provider: "ramp"
        )
        
        // Update local portfolio
        PortfolioManager.shared.addPurchase(purchase)
        
        // Send to backend
        APIService.shared.recordPurchase(purchase)
        
        NotificationCenter.default.post(
            name: .purchaseCompleted,
            object: purchase
        )
    }
    
    func ramp(_ rampViewController: RampViewController, didFailWithError error: RampError) {
        // Handle purchase failure
        print("Ramp purchase failed: \\(error.localizedDescription)")
    }
}`}
                          </pre>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">MoonPay Integration (iOS)</h4>
                          <Button variant="outline" size="sm" onClick={() => copyToClipboard('// MoonPay integration code')}>
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                          <pre className="text-sm">
{`import MoonPaySDK

class MoonPayManager: ObservableObject {
    static let shared = MoonPayManager()
    
    func initializeMoonPay() {
        let config = MoonPaySDKConfig(
            apiKey: Config.moonPayAPIKey,
            environment: .production,
            colorCode: "#007AFF",
            showWalletAddressForm: true
        )
        
        MoonPaySDK.initialize(config: config)
    }
    
    func presentMoonPay(from viewController: UIViewController, 
                       walletAddress: String, 
                       amount: Double) {
        
        let parameters = MoonPayParameters(
            walletAddress: walletAddress,
            currencyCode: "USDC",
            baseCurrencyAmount: amount,
            baseCurrencyCode: "USD"
        )
        
        MoonPaySDK.present(
            from: viewController,
            parameters: parameters
        ) { result in
            switch result {
            case .success(let transaction):
                self.handleSuccessfulPurchase(transaction)
            case .failure(let error):
                self.handlePurchaseError(error)
            }
        }
    }
    
    private func handleSuccessfulPurchase(_ transaction: MoonPayTransaction) {
        // Record purchase in backend
        Task {
            await APIService.shared.recordMoonPayPurchase(transaction)
        }
        
        // Update UI
        DispatchQueue.main.async {
            NotificationCenter.default.post(
                name: .moonPayPurchaseCompleted,
                object: transaction
            )
        }
    }
}`}
                          </pre>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">Provider Comparison Service</h4>
                          <Button variant="outline" size="sm" onClick={() => copyToClipboard('# Provider comparison code')}>
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                          <pre className="text-sm">
{`class OnrampProviderService:
    def __init__(self):
        self.providers = {
            'ramp': RampProvider(),
            'moonpay': MoonPayProvider(),
            'transak': TransakProvider(),
            'coinbase': CoinbasePayProvider()
        }
    
    async def get_best_quote(self, amount: float, asset: str, user_location: str):
        """Get quotes from all providers and return the best one"""
        quotes = []
        
        # Fetch quotes concurrently
        tasks = []
        for name, provider in self.providers.items():
            task = asyncio.create_task(
                self._get_provider_quote(provider, amount, asset, user_location)
            )
            tasks.append((name, task))
        
        # Collect results
        for name, task in tasks:
            try:
                quote = await task
                if quote:
                    quotes.append({
                        'provider': name,
                        'quote': quote,
                        'total_cost': quote.amount + quote.fees
                    })
            except Exception as e:
                logger.warning(f"Provider {name} failed: {e}")
        
        if not quotes:
            raise Exception("No providers available")
        
        # Return provider with lowest total cost
        best_quote = min(quotes, key=lambda q: q['total_cost'])
        return best_quote
    
    async def _get_provider_quote(self, provider, amount, asset, location):
        """Get quote from individual provider with timeout"""
        try:
            return await asyncio.wait_for(
                provider.get_quote(amount, asset, location),
                timeout=5.0
            )
        except asyncio.TimeoutError:
            logger.warning(f"Provider {provider.name} timed out")
            return None

class RampProvider:
    def __init__(self):
        self.api_key = os.getenv('RAMP_API_KEY')
        self.base_url = "https://api.ramp.network"
    
    async def get_quote(self, amount: float, asset: str, location: str):
        async with aiohttp.ClientSession() as session:
            params = {
                'hostApiKey': self.api_key,
                'fiatCurrency': 'USD',
                'fiatValue': amount,
                'cryptoCurrency': asset,
                'userLocation': location
            }
            
            async with session.get(f"{self.base_url}/api/host-api/crypto/price", params=params) as response:
                data = await response.json()
                
                return Quote(
                    provider='ramp',
                    amount=amount,
                    asset=asset,
                    crypto_amount=data['cryptoAmount'],
                    fees=data['appliedFee'],
                    exchange_rate=data['exchangeRate']
                )`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="database" className="mt-8">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Database className="h-5 w-5 mr-2" />
                      Database Schema & Migrations
                    </CardTitle>
                    <CardDescription>
                      PostgreSQL schema design with migrations and optimization
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">Database Schema (SQL)</h4>
                          <Button variant="outline" size="sm" onClick={() => copyToClipboard('-- Database schema')}>
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                          <pre className="text-sm">
{`-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone VARCHAR(20),
    country_code VARCHAR(2),
    kyc_status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Portfolios table
CREATE TABLE portfolios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    total_value DECIMAL(20, 8) DEFAULT 0,
    total_invested DECIMAL(20, 8) DEFAULT 0,
    total_profit_loss DECIMAL(20, 8) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Holdings table
CREATE TABLE holdings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    portfolio_id UUID REFERENCES portfolios(id) ON DELETE CASCADE,
    asset VARCHAR(10) NOT NULL,
    quantity DECIMAL(20, 8) NOT NULL DEFAULT 0,
    average_cost DECIMAL(20, 8) NOT NULL DEFAULT 0,
    current_value DECIMAL(20, 8) NOT NULL DEFAULT 0,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- DCA Schedules table
CREATE TABLE dca_schedules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    amount DECIMAL(10, 2) NOT NULL,
    asset VARCHAR(10) NOT NULL,
    frequency VARCHAR(20) NOT NULL, -- 'daily', 'weekly', 'monthly'
    next_execution TIMESTAMP NOT NULL,
    is_active BOOLEAN DEFAULT true,
    preferred_provider VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Purchases table
CREATE TABLE purchases (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    dca_schedule_id UUID REFERENCES dca_schedules(id),
    amount DECIMAL(10, 2) NOT NULL,
    asset VARCHAR(10) NOT NULL,
    provider VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending',
    transaction_id VARCHAR(255),
    crypto_amount DECIMAL(20, 8),
    exchange_rate DECIMAL(20, 8),
    fees DECIMAL(10, 2),
    error_message TEXT,
    executed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Onramp Providers table
CREATE TABLE onramp_providers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(50) UNIQUE NOT NULL,
    api_key_encrypted TEXT,
    is_active BOOLEAN DEFAULT true,
    supported_assets TEXT[], -- JSON array of supported assets
    supported_countries TEXT[], -- JSON array of country codes
    fee_structure JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Compliance Logs table
CREATE TABLE compliance_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    event_type VARCHAR(50) NOT NULL,
    event_data JSONB,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_portfolios_user_id ON portfolios(user_id);
CREATE INDEX idx_holdings_portfolio_id ON holdings(portfolio_id);
CREATE INDEX idx_dca_schedules_user_id ON dca_schedules(user_id);
CREATE INDEX idx_dca_schedules_next_execution ON dca_schedules(next_execution) WHERE is_active = true;
CREATE INDEX idx_purchases_user_id ON purchases(user_id);
CREATE INDEX idx_purchases_created_at ON purchases(created_at);
CREATE INDEX idx_compliance_logs_user_id ON compliance_logs(user_id);
CREATE INDEX idx_compliance_logs_created_at ON compliance_logs(created_at);`}
                          </pre>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">Database Migration Script</h4>
                          <Button variant="outline" size="sm" onClick={() => copyToClipboard('# Migration script')}>
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                          <pre className="text-sm">
{`#!/usr/bin/env python3
"""
Database migration script for Crypto DCA App
"""

import os
import psycopg2
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT

def create_database():
    """Create the main database if it doesn't exist"""
    conn = psycopg2.connect(
        host=os.getenv('DB_HOST', 'localhost'),
        user=os.getenv('DB_USER', 'postgres'),
        password=os.getenv('DB_PASSWORD'),
        database='postgres'
    )
    conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
    
    cursor = conn.cursor()
    cursor.execute("SELECT 1 FROM pg_database WHERE datname = 'cryptodca'")
    exists = cursor.fetchone()
    
    if not exists:
        cursor.execute('CREATE DATABASE cryptodca')
        print("Database 'cryptodca' created successfully")
    
    cursor.close()
    conn.close()

def run_migrations():
    """Run all database migrations"""
    conn = psycopg2.connect(
        host=os.getenv('DB_HOST', 'localhost'),
        user=os.getenv('DB_USER', 'postgres'),
        password=os.getenv('DB_PASSWORD'),
        database='cryptodca'
    )
    
    cursor = conn.cursor()
    
    # Enable UUID extension
    cursor.execute('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    cursor.execute('CREATE EXTENSION IF NOT EXISTS "pgcrypto"')
    
    # Read and execute schema file
    with open('schema.sql', 'r') as f:
        schema_sql = f.read()
        cursor.execute(schema_sql)
    
    # Insert default onramp providers
    providers_sql = """
    INSERT INTO onramp_providers (name, is_active, supported_assets, supported_countries) VALUES
    ('ramp', true, '["BTC", "ETH", "USDC", "USDT"]', '["US", "EU", "UK", "CA"]'),
    ('moonpay', true, '["BTC", "ETH", "USDC", "USDT", "ADA", "DOT"]', '["US", "EU", "UK", "CA", "AU"]'),
    ('transak', true, '["BTC", "ETH", "USDC", "USDT", "BNB", "MATIC"]', '["US", "EU", "UK", "CA", "IN"]'),
    ('coinbase', true, '["BTC", "ETH", "USDC"]', '["US", "EU", "UK", "CA"]')
    ON CONFLICT (name) DO NOTHING;
    """
    cursor.execute(providers_sql)
    
    conn.commit()
    cursor.close()
    conn.close()
    
    print("Database migrations completed successfully")

if __name__ == '__main__':
    create_database()
    run_migrations()`}
                          </pre>
                        </div>
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
                      <Terminal className="h-5 w-5 mr-2" />
                      Deployment Configuration
                    </CardTitle>
                    <CardDescription>
                      Docker, Kubernetes, and CI/CD pipeline configuration
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">Dockerfile (Backend)</h4>
                          <Button variant="outline" size="sm" onClick={() => copyToClipboard('# Dockerfile')}>
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                          <pre className="text-sm">
{`FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \\
    gcc \\
    libpq-dev \\
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Create non-root user
RUN useradd --create-home --shell /bin/bash app \\
    && chown -R app:app /app
USER app

# Expose port
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \\
    CMD curl -f http://localhost:8000/health || exit 1

# Run application
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "4", "app:app"]`}
                          </pre>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">Kubernetes Deployment</h4>
                          <Button variant="outline" size="sm" onClick={() => copyToClipboard('# K8s deployment')}>
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                          <pre className="text-sm">
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: cryptodca-backend
  labels:
    app: cryptodca-backend
spec:
  replicas: 3
  selector:
    matchLabels:
      app: cryptodca-backend
  template:
    metadata:
      labels:
        app: cryptodca-backend
    spec:
      containers:
      - name: backend
        image: cryptodca/backend:latest
        ports:
        - containerPort: 8000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: cryptodca-secrets
              key: database-url
        - name: REDIS_URL
          valueFrom:
            secretKeyRef:
              name: cryptodca-secrets
              key: redis-url
        - name: JWT_SECRET_KEY
          valueFrom:
            secretKeyRef:
              name: cryptodca-secrets
              key: jwt-secret
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 8000
          initialDelaySeconds: 5
          periodSeconds: 5

---
apiVersion: v1
kind: Service
metadata:
  name: cryptodca-backend-service
spec:
  selector:
    app: cryptodca-backend
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8000
  type: ClusterIP

---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: cryptodca-ingress
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  tls:
  - hosts:
    - api.cryptodca.app
    secretName: cryptodca-tls
  rules:
  - host: api.cryptodca.app
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: cryptodca-backend-service
            port:
              number: 80`}
                          </pre>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">GitHub Actions CI/CD</h4>
                          <Button variant="outline" size="sm" onClick={() => copyToClipboard('# GitHub Actions')}>
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                          <pre className="text-sm">
{`name: Deploy to Production

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:13
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: test_cryptodca
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Python
      uses: actions/setup-python@v4
      with:
        python-version: '3.11'
    
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
        pip install pytest pytest-cov
    
    - name: Run tests
      run: |
        pytest --cov=app tests/
      env:
        DATABASE_URL: postgresql://postgres:postgres@localhost/test_cryptodca
    
    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3

  build-and-deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-west-2
    
    - name: Login to Amazon ECR
      id: login-ecr
      uses: aws-actions/amazon-ecr-login@v1
    
    - name: Build and push Docker image
      env:
        ECR_REGISTRY: \${{ steps.login-ecr.outputs.registry }}
        ECR_REPOSITORY: cryptodca-backend
        IMAGE_TAG: \${{ github.sha }}
      run: |
        docker build -t \$ECR_REGISTRY/\$ECR_REPOSITORY:\$IMAGE_TAG .
        docker push \$ECR_REGISTRY/\$ECR_REPOSITORY:\$IMAGE_TAG
    
    - name: Deploy to EKS
      run: |
        aws eks update-kubeconfig --name cryptodca-cluster
        kubectl set image deployment/cryptodca-backend backend=\$ECR_REGISTRY/\$ECR_REPOSITORY:\$IMAGE_TAG
        kubectl rollout status deployment/cryptodca-backend`}
                          </pre>
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

