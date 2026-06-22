import { BranchGrid } from "@/components/branches/BranchGrid";
import { branches } from "@/data/mockData";

export default function BranchesPage() {
  return <BranchGrid branches={branches} />;
}
