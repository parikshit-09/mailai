import Link from "next/link";
import { Button } from "@/components/ui/button";
import Linkaccountbutton from "@/components/link-account-button";

export default async function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Linkaccountbutton />
    </div>
  );
}
