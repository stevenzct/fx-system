import { RatesTable } from "@/components/rates/RatesTable";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";
import { rates } from "@/data/mockData";

export default function RatesPage() {
  return (
    <Card>
      <CardHeader
        title="FX Rates Database"
        description="Buying and selling rates with effective date and approval status."
        action={<Button type="button">Add Rate</Button>}
      />
      <RatesTable rates={rates} />
    </Card>
  );
}
