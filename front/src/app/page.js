"use client";
import { Button } from "@/components/ui/button"
import CodeBlock from "@/components/codeblock"
import TestJupyterIntegration from "@/components/testJupyterIntegration";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">

      <CodeBlock />
      <TestJupyterIntegration />

    </main>
  );
}


