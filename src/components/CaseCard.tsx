import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, User } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface CaseCardProps {
  id: string;
  name: string;
  age: number;
  gender: string;
  city: string;
  state: string;
  status: string;
  photo: string;
  last_seen: string;
  description: string;
}

const CaseCard = ({
  id,
  name,
  age,
  gender,
  city,
  state,
  status,
  photo,
  last_seen,
  description,
}: CaseCardProps) => {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "missing":
        return "destructive";
      case "found":
        return "warning";
      case "reunited":
        return "default";
      default:
        return "secondary";
    }
  };

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

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={photo}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className={`absolute top-2 right-2 ${getStatusColor(status)}`}>
          {status.toUpperCase()}
        </Badge>
      </div>

      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg text-card-foreground line-clamp-1">{name}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
            <User className="h-3.5 w-3.5" />
            <span>
              {age} years • {gender}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span>
            {city}, {state}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" />
          <span>Last seen {formatDistanceToNow(new Date(last_seen), { addSuffix: true })}</span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        <Link to={`/cases/${id}`} className="block">
          <Button className="w-full" variant="outline">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CaseCard;
