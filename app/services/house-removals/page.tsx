import type { Metadata } from "next";
import { getService } from "@/lib/data/services";
import { serviceMetadata } from "@/lib/seo/metadata";
import ServicePage from "@/components/templates/ServicePage";

const service = getService("house-removals")!;

export const metadata: Metadata = serviceMetadata(service);

export default function HouseRemovalsPage() {
  return <ServicePage service={service} />;
}
