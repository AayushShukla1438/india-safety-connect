import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, User, Phone, Ruler, Shield, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import casesData from "@/data/cases.json";
import { format } from "date-fns";

const CaseDetail = () => {
  const { id } = useParams();
  const caseData = casesData.find((c) => c.id === id);

  if (!caseData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Case Not Found</h2>
            <p className="text-muted-foreground">The case you're looking for doesn't exist.</p>
            <Link to="/cases">
              <Button>Back to Cases</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "missing":
        return "bg-destructive text-destructive-foreground";
      case "found":
        return "bg-warning text-warning-foreground";
      case "reunited":
        return "bg-success text-success-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getVerificationBadge = (verification: string) => {
    if (verification === "verified") {
      return (
        <Badge className="bg-success text-success-foreground gap-1">
          <CheckCircle2 className="h-3 w-3" />
          Verified by Police
        </Badge>
      );
    }
    return (
      <Badge variant="outline" className="gap-1">
        <Clock className="h-3 w-3" />
        Pending Verification
      </Badge>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Back Button */}
          <Link to="/cases">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Cases
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Photo and Quick Info */}
            <div className="lg:col-span-1 space-y-4">
              <Card className="overflow-hidden">
                <div className="aspect-square">
                  <img
                    src={caseData.photo}
                    alt={caseData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <Badge className={getStatusColor(caseData.status)}>
                    {caseData.status.toUpperCase()}
                  </Badge>
                  {getVerificationBadge(caseData.police_verification)}
                </div>
              </Card>

              {/* Contact Card */}
              <Card className="p-4 space-y-3">
                <h3 className="font-semibold text-card-foreground">Contact Information</h3>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href={`tel:${caseData.contact}`} className="text-primary hover:underline">
                    {caseData.contact}
                  </a>
                </div>
                <Button className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
              </Card>
            </div>

            {/* Detailed Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 space-y-4">
                <div>
                  <h1 className="text-3xl font-bold text-card-foreground mb-2">{caseData.name}</h1>
                  <p className="text-lg text-muted-foreground">Case ID: {caseData.id}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="h-4 w-4 text-primary" />
                    <div>
                      <div className="text-xs">Age & Gender</div>
                      <div className="font-medium text-card-foreground">
                        {caseData.age} years • {caseData.gender}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <div>
                      <div className="text-xs">Location</div>
                      <div className="font-medium text-card-foreground">
                        {caseData.city}, {caseData.state}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <div>
                      <div className="text-xs">Last Seen</div>
                      <div className="font-medium text-card-foreground">
                        {format(new Date(caseData.last_seen), "PPP")}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Ruler className="h-4 w-4 text-primary" />
                    <div>
                      <div className="text-xs">Height</div>
                      <div className="font-medium text-card-foreground">{caseData.height}</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Description */}
              <Card className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-card-foreground">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{caseData.description}</p>
              </Card>

              {/* Distinguishing Marks */}
              <Card className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-card-foreground">Distinguishing Marks</h3>
                <p className="text-muted-foreground">{caseData.distinguishing_marks}</p>
              </Card>

              {/* Timeline */}
              <Card className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-card-foreground">Case Timeline</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <div className="h-full w-px bg-border" />
                    </div>
                    <div className="pb-4">
                      <div className="font-medium text-card-foreground">Case Reported</div>
                      <div className="text-sm text-muted-foreground">
                        {format(new Date(caseData.created_at), "PPP 'at' p")}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <div className="h-full w-px bg-border" />
                    </div>
                    <div className="pb-4">
                      <div className="font-medium text-card-foreground">Last Seen</div>
                      <div className="text-sm text-muted-foreground">
                        {format(new Date(caseData.last_seen), "PPP 'at' p")}
                      </div>
                    </div>
                  </div>

                  {caseData.police_verification === "verified" && (
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="h-2 w-2 rounded-full bg-success" />
                      </div>
                      <div>
                        <div className="font-medium text-card-foreground flex items-center gap-2">
                          <Shield className="h-4 w-4 text-success" />
                          Police Verification Complete
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Case has been verified by authorities
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1" size="lg">
                  I Have Information
                </Button>
                <Button variant="outline" className="flex-1" size="lg">
                  Share This Case
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseDetail;
