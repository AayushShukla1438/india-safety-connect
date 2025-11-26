import { Link } from "react-router-dom";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import casesData from "@/data/cases.json";

const Matches = () => {
  // Simulate match results with random confidence scores
  const mockMatches = casesData
    .filter((c) => c.status === "missing" || c.status === "found")
    .slice(0, 5)
    .map((caseItem, index) => ({
      ...caseItem,
      confidence: [92, 85, 78, 71, 65][index],
    }))
    .sort((a, b) => b.confidence - a.confidence);

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 85) return "text-success";
    if (confidence >= 70) return "text-warning";
    return "text-muted-foreground";
  };

  const getConfidenceBadge = (confidence: number) => {
    if (confidence >= 85) {
      return <Badge className="bg-success text-success-foreground">High Match</Badge>;
    }
    if (confidence >= 70) {
      return <Badge className="bg-warning text-warning-foreground">Possible Match</Badge>;
    }
    return <Badge variant="outline">Low Match</Badge>;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Success Header */}
          <Card className="p-6 mb-8 bg-success/10 border-success/20">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-success" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-2">Match Results Found!</h2>
                <p className="text-muted-foreground">
                  We found {mockMatches.length} potential matches in our database. Please review
                  each match carefully.
                </p>
              </div>
            </div>
          </Card>

          {/* Match Results */}
          <div className="space-y-4">
            {mockMatches.map((match, index) => (
              <Card
                key={match.id}
                className="p-6 hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Photo */}
                  <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={match.photo}
                      alt={match.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-card-foreground mb-1">
                          {match.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {match.age} years • {match.gender}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {match.city}, {match.state}
                        </p>
                      </div>
                      {getConfidenceBadge(match.confidence)}
                    </div>

                    {/* Confidence Score */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Match Confidence</span>
                        <span className={`font-semibold ${getConfidenceColor(match.confidence)}`}>
                          {match.confidence}%
                        </span>
                      </div>
                      <Progress value={match.confidence} className="h-2" />
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {match.description}
                    </p>

                    {/* Case Info */}
                    <div className="flex flex-wrap gap-2 text-sm">
                      <Badge variant="outline">Case ID: {match.id}</Badge>
                      <Badge
                        className={
                          match.status === "missing"
                            ? "bg-destructive text-destructive-foreground"
                            : "bg-warning text-warning-foreground"
                        }
                      >
                        {match.status.toUpperCase()}
                      </Badge>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to={`/cases/${match.id}`} className="flex-1">
                        <Button className="w-full">View Full Details</Button>
                      </Link>
                      <Button variant="outline" className="flex-1">
                        Report This Match
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* No Match Notice */}
          <Card className="p-6 mt-6 bg-secondary/30">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">
                  Don't see the person you're looking for?
                </p>
                <p>
                  These are potential matches based on facial recognition. If none match, you can{" "}
                  <Link to="/report/missing" className="text-primary hover:underline">
                    report a missing person
                  </Link>{" "}
                  or{" "}
                  <Link to="/report/found" className="text-primary hover:underline">
                    report a found person
                  </Link>{" "}
                  to add to our database.
                </p>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link to="/upload" className="flex-1">
              <Button variant="outline" size="lg" className="w-full">
                Try Another Photo
              </Button>
            </Link>
            <Link to="/cases" className="flex-1">
              <Button variant="default" size="lg" className="w-full">
                Browse All Cases
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Matches;
