import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users } from "lucide-react";
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

const ReportFound = () => {
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
        description: "Authorities have been notified. Case ID: FP011",
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
              <div className="h-10 w-10 rounded-full bg-success/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-success" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Report Found Person
              </h1>
            </div>
            <p className="text-muted-foreground">
              Help us identify and reunite a found person with their family
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <Card className="p-6 space-y-6">
              {/* Important Notice */}
              <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                <p className="text-sm text-foreground">
                  <strong>Thank you for helping!</strong> Your report will help us match this person
                  with their family. Please provide accurate information.
                </p>
              </div>

              {/* Person Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-card-foreground">Person Details</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name (if known)</Label>
                    <Input id="name" placeholder="Unknown if not sure" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age">Approximate Age *</Label>
                    <Input id="age" type="number" placeholder="Estimated age" required />
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
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="height">Approximate Height</Label>
                    <Input id="height" placeholder="e.g., 5'8&quot;" />
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-card-foreground">Where Found</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input id="city" placeholder="City where found" required />
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
                    <Label htmlFor="found-location">Detailed Location *</Label>
                    <Input id="found-location" placeholder="Exact address or landmark" required />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="found-date">Date & Time Found *</Label>
                    <Input id="found-date" type="datetime-local" required />
                  </div>
                </div>
              </div>

              {/* Condition & Description */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-card-foreground">
                  Condition & Description
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="condition">Person's Condition *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healthy">Healthy and conscious</SelectItem>
                      <SelectItem value="injured">Injured</SelectItem>
                      <SelectItem value="disoriented">Disoriented/confused</SelectItem>
                      <SelectItem value="unconscious">Unconscious</SelectItem>
                      <SelectItem value="unable-communicate">Unable to communicate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Physical Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Clothing, physical features, any distinguishing marks..."
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="marks">Distinguishing Features</Label>
                  <Input
                    id="marks"
                    placeholder="Scars, tattoos, birthmarks, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="belongings">Personal Belongings</Label>
                  <Input
                    id="belongings"
                    placeholder="ID cards, bags, jewelry, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photo">Upload Photo *</Label>
                  <Input id="photo" type="file" accept="image/*" required />
                  <p className="text-xs text-muted-foreground">
                    Please upload a clear photo (with consent if person is conscious)
                  </p>
                </div>
              </div>

              {/* Reporter Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-card-foreground">Your Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="reporter-name">Your Name *</Label>
                    <Input id="reporter-name" placeholder="Enter your name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Contact Number *</Label>
                    <Input id="phone" type="tel" placeholder="+91-XXXXXXXXXX" required />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
              </div>

              {/* Current Location */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-card-foreground">
                  Current Location of Person
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="current-location">Where is the person now? *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select current location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="police-station">At Police Station</SelectItem>
                      <SelectItem value="hospital">At Hospital</SelectItem>
                      <SelectItem value="shelter">At Shelter Home</SelectItem>
                      <SelectItem value="with-reporter">With me</SelectItem>
                      <SelectItem value="other">Other location</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="current-address">Current Address/Facility Name *</Label>
                  <Input
                    id="current-address"
                    placeholder="Name and address of facility or location"
                    required
                  />
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
                    <Users className="h-5 w-5 mr-2" />
                    Submit Found Person Report
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this report, you confirm that all information provided is accurate.
                Authorities will contact you for verification.
              </p>
            </Card>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReportFound;
