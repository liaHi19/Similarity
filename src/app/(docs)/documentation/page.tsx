import type { Metadata } from "next";

import "simplebar-react/dist/simplebar.min.css";

import Layout from "./layout";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import DocumentationTabs from "@/components/DocumentationTabs";

export const metadata: Metadata = {
  title: "Similarity API Documentation",
  description: "Free & open-source text similarity API",
};

const Documentation = () => {
  return (
    <div className="container max-w-7xl mx-auto mt-12">
      <div className="flex flex-col items-center justify-center gap-6">
        <Layout>
          <LargeHeading>Make a request</LargeHeading>
          <Paragraph>api/v1/similarity</Paragraph>

          <DocumentationTabs />
        </Layout>
      </div>
    </div>
  );
};

export default Documentation;
