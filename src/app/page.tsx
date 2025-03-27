import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Button>Click me</Button>
    </div>
  );
}
