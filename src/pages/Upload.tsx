import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload as UploadIcon, X, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Invalid file type",
          description: "Please select an image file",
          variant: "destructive",
        });
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image under 10MB",
          variant: "destructive",
        });
        return;
      }

      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setPreviewUrl("");
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select a photo first",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    // Simulate upload and processing
    setTimeout(() => {
      setIsUploading(false);
      toast({
        title: "Photo uploaded successfully",
        description: "Searching for matches...",
      });
      navigate("/matches");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Upload Photo for Search
            </h1>
            <p className="text-muted-foreground">
              Upload a clear photo to search for matches in our database
            </p>
          </div>

          <Card className="p-6 space-y-6">
            {/* Upload Instructions */}
            <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
              <h3 className="font-semibold text-card-foreground">Photo Guidelines:</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Use a clear, front-facing photo</li>
                <li>Face should be clearly visible and well-lit</li>
                <li>Maximum file size: 10MB</li>
                <li>Supported formats: JPG, PNG, WEBP</li>
              </ul>
            </div>

            {/* Upload Area */}
            {!previewUrl ? (
              <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors">
                <Label htmlFor="photo-upload" className="cursor-pointer">
                  <div className="flex flex-col items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <UploadIcon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-muted-foreground">
                        PNG, JPG, WEBP up to 10MB
                      </p>
                    </div>
                  </div>
                </Label>
                <Input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileSelect}
                />
              </div>
            ) : (
              <div className="space-y-4">
                {/* Preview */}
                <div className="relative rounded-lg overflow-hidden border bg-muted">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full h-auto max-h-96 object-contain"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={handleRemove}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* File Info */}
                <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                  <ImageIcon className="h-5 w-5 text-primary" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-card-foreground truncate">
                      {selectedFile?.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {(selectedFile!.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Additional Information */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="additional-info">
                  Additional Information (Optional)
                </Label>
                <Input
                  id="additional-info"
                  placeholder="Any additional details about the person..."
                />
              </div>
            </div>

            {/* Upload Button */}
            <Button
              className="w-full"
              size="lg"
              onClick={handleUpload}
              disabled={!selectedFile || isUploading}
            >
              {isUploading ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Processing...
                </>
              ) : (
                <>
                  <UploadIcon className="h-5 w-5 mr-2" />
                  Search for Matches
                </>
              )}
            </Button>
          </Card>

          {/* Privacy Notice */}
          <Card className="mt-6 p-4 bg-secondary/30">
            <p className="text-sm text-muted-foreground">
              🔒 <strong>Privacy Notice:</strong> All uploaded photos are handled securely and used
              only for matching purposes. We do not share your information without consent.
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Upload;
