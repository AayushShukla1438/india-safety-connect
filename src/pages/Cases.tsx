import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseCard from "@/components/CaseCard";
import SearchFilters from "@/components/SearchFilters";
import casesData from "@/data/cases.json";

const Cases = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [stateFilter, setStateFilter] = useState("All States");
  const [ageRange, setAgeRange] = useState([0, 100]);

  const filteredCases = casesData.filter((caseItem) => {
    const matchesSearch = caseItem.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = genderFilter === "all" || caseItem.gender === genderFilter;
    const matchesStatus = statusFilter === "all" || caseItem.status === statusFilter;
    const matchesState = stateFilter === "All States" || caseItem.state === stateFilter;
    const matchesAge = caseItem.age >= ageRange[0] && caseItem.age <= ageRange[1];

    return matchesSearch && matchesGender && matchesStatus && matchesState && matchesAge;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Browse Cases</h1>
            <p className="text-muted-foreground">
              Search through our database of missing and found persons
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <SearchFilters
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                genderFilter={genderFilter}
                setGenderFilter={setGenderFilter}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                stateFilter={stateFilter}
                setStateFilter={setStateFilter}
                ageRange={ageRange}
                setAgeRange={setAgeRange}
              />
            </div>

            {/* Cases Grid */}
            <div className="lg:col-span-3">
              <div className="mb-4 text-sm text-muted-foreground">
                Showing {filteredCases.length} of {casesData.length} cases
              </div>

              {filteredCases.length === 0 ? (
                <div className="text-center py-12 bg-card rounded-lg border">
                  <p className="text-lg text-muted-foreground">No cases found matching your criteria</p>
                  <p className="text-sm text-muted-foreground mt-2">Try adjusting your filters</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCases.map((caseItem) => (
                    <CaseCard key={caseItem.id} {...caseItem} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cases;
