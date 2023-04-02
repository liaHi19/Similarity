import { FC } from "react";
import SimpleBar from "simplebar-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import Code from "./Code";

import { nodejs, python } from "@/helpers/documentation-code";

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">Node</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        {
          /* <SimpleBar></SimpleBar> */
          <Code language="javascript" code={nodejs} show animated />
        }
      </TabsContent>
      <TabsContent value="python">
        {
          /* <SimpleBar></SimpleBar> */
          <Code language="python" code={python} show animated />
        }
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
