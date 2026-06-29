import type { Metadata } from "next";
import { getService } from "@/lib/data/services";
import { serviceMetadata } from "@/lib/seo/metadata";
import ServicePage from "@/components/templates/ServicePage";

const service = getService("office-removals")!;

export const metadata: Metadata = serviceMetadata(service);

export default function OfficeRemovalsPage() {
  return <ServicePage service={service} />;
}
