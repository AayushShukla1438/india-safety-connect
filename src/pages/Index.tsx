import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Upload, Search, AlertTriangle, Users, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsCard from "@/components/StatsCard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 pb-36 px-4 overflow-hidden bg-slate-900 text-white">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-amber-500 rounded-full blur-[120px] opacity-10"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="container relative z-10 mx-auto text-center">
          <div className="animate-fade-in-up flex flex-col items-center">
            
            {/* Logo / Badge */}
            <div className="mb-8 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl">
               <img
                src="/image/logo.png" 
                alt="Pehchaan Logo"
                className="h-20 w-20 object-contain drop-shadow-lg"
              />
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-400">
              Reuniting Lives <br className="hidden md:block" /> Through Technology.
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Using advanced AI facial recognition to connect missing loved ones with their families. Fast, secure, and accessible to everyone.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 w-full max-w-md justify-center">
              <Link to="/upload" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-14 gap-2 text-lg bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/50 transition-all transform hover:-translate-y-1">
                  <Upload className="h-5 w-5" />
                  Scan & Search
                </Button>
              </Link>
              <Link to="/cases" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full h-14 gap-2 text-lg border-slate-600 text-black hover:bg-white/10 hover:text-white transition-all">
                  <Search className="h-5 w-5" />
                  Browse Database
                </Button>
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="mt-12 flex items-center gap-2 text-sm text-slate-400 bg-slate-800/50 py-2 px-4 rounded-full border border-slate-700">
              <Shield className="h-4 w-4 text-green-400" />
              <span>Secure & Verified by Law Enforcement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard
              title="Active Missing Cases"
              value="24"
              icon={AlertTriangle}
              description="Cases currently under investigation"
              variant="destructive"
            />
            <StatsCard
              title="Found Persons"
              value="8"
              icon={Users}
              description="Awaiting identification"
              variant="warning"
            />
            <StatsCard
              title="Successful Reunions"
              value="5"
              icon={CheckCircle2}
              description="Families reunited this month"
              variant="success"
              trend={{ value: "12% from last month", isPositive: true }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform uses advanced technology to help find missing persons quickly and efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center space-y-4 p-6 rounded-lg border bg-card hover:shadow-lg transition-all animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                <Upload className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Upload Photo</h3>
              <p className="text-muted-foreground">
                Upload a photo of a missing or found person to our secure platform
              </p>
              <Link to="/upload">
                <Button variant="link">Get Started →</Button>
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="text-center space-y-4 p-6 rounded-lg border bg-card hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">AI-Powered Matching</h3>
              <p className="text-muted-foreground">
                Our system compares against thousands of records to find potential matches
              </p>
              <Link to="/cases">
                <Button variant="link">Browse Cases →</Button>
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="text-center space-y-4 p-6 rounded-lg border bg-card hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 text-success">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Police Verification</h3>
              <p className="text-muted-foreground">
                All matches are verified by law enforcement to ensure accuracy and safety
              </p>
              <Link to="/police/login">
                <Button variant="link">Police Portal →</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Have Information About a Missing Person?
            </h2>
            <p className="text-lg text-muted-foreground">
              Every piece of information helps. Report what you know or upload a photo to help reunite families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/report/missing">
                <Button size="lg" variant="default" className="gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Report Missing Person
                </Button>
              </Link>
              <Link to="/report/found">
                <Button size="lg" variant="outline" className="gap-2">
                  <Users className="h-5 w-5" />
                  Report Found Person
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-12 px-4 bg-destructive/10 border-y border-destructive/20">
        <div className="container mx-auto">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Emergency Contact Numbers</h3>
            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-semibold">Police:</span>
                <a href="tel:100" className="text-primary hover:underline">100</a>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <span className="font-semibold">Women Helpline:</span>
                <a href="tel:1091" className="text-primary hover:underline">1091</a>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-semibold">Child Helpline:</span>
                <a href="tel:1098" className="text-primary hover:underline">1098</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
