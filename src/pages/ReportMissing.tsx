import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ReportMissing = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Report submitted successfully",
        description: "Police authorities have been notified. Case ID: MP031",
      });
      navigate("/cases");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Report Missing Person
              </h1>
            </div>
            <p className="text-muted-foreground">
              Please provide as much detail as possible to help locate the missing person
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <Card className="p-6 space-y-6">
              {/* Emergency Notice */}
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <p className="text-sm text-foreground">
                  <strong>Emergency?</strong> If this is an urgent situation, please call{" "}
                  <a href="tel:100" className="text-destructive font-semibold hover:underline">
                    100 (Police)
                  </a>{" "}
                  immediately before filing this report.
                </p>
              </div>

              {/* Personal Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-card-foreground">Personal Details</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Enter full name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age">Age *</Label>
                    <Input id="age" type="number" placeholder="Enter age" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="height">Height</Label>
                    <Input id="height" placeholder="e.g., 5'8&quot;" />
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-card-foreground">Location Details</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input id="city" placeholder="Enter city" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                        <SelectItem value="Gujarat">Gujarat</SelectItem>
                        <SelectItem value="Delhi">Delhi</SelectItem>
                        <SelectItem value="Karnataka">Karnataka</SelectItem>
                        <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="last-seen">Last Seen Location *</Label>
                    <Input id="last-seen" placeholder="Detailed address where last seen" required />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="last-seen-date">Last Seen Date & Time *</Label>
                    <Input id="last-seen-date" type="datetime-local" required />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-card-foreground">
                  Description & Details
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="description">Physical Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Clothing worn, physical features, any distinguishing marks..."
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="marks">Distinguishing Marks</Label>
                  <Input
                    id="marks"
                    placeholder="Scars, tattoos, birthmarks, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photo">Upload Photo *</Label>
                  <Input id="photo" type="file" accept="image/*" required />
                  <p className="text-xs text-muted-foreground">
                    Please upload a clear, recent photo
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-card-foreground">Your Contact Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="reporter-name">Your Name *</Label>
                    <Input id="reporter-name" placeholder="Enter your name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="relationship">Relationship to Missing Person *</Label>
                    <Input id="relationship" placeholder="e.g., Parent, Sibling" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Contact Number *</Label>
                    <Input id="phone" type="tel" placeholder="+91-XXXXXXXXXX" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Submitting Report...
                  </>
                ) : (
                  <>
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Submit Missing Person Report
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this report, you confirm that all information provided is accurate to
                the best of your knowledge.
              </p>
            </Card>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReportMissing;
