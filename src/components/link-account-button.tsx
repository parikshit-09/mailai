"use client";
import React from "react";
import { Button } from "./ui/button";
import { getAurinkoAuthUrl } from "@/lib/aurinko";

const Linkaccountbutton = () => {
  return (
    <Button
      onClick={async () => {
        const authUrl = await getAurinkoAuthUrl("Google");
        console.log("Auth URL:", authUrl);
      }}
    >
      Link Me
    </Button>
  );
};

export default Linkaccountbutton;
