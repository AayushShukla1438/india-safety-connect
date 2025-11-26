import { Users, Shield, Database, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsCard from "@/components/StatsCard";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatsCard title="Total Cases" value="30" icon={Database} />
            <StatsCard title="Police Officers" value="5" icon={Shield} variant="success" />
            <StatsCard title="Active Users" value="150" icon={Users} />
            <StatsCard title="System Health" value="98%" icon={Activity} variant="success" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
