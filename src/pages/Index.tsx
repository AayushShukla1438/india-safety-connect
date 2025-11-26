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
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative z-10 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center justify-center p-2 bg-primary-foreground/10 rounded-full mb-4">
              <Shield className="h-12 w-12 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Help Reunite Families Across India
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Advanced facial recognition and community support to find missing persons and reunite loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/upload">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Photo to Search
                </Button>
              </Link>
              <Link to="/cases">
                <Button size="lg" variant="outline" className="gap-2 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20">
                  <Search className="h-5 w-5" />
                  Browse All Cases
                </Button>
              </Link>
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
