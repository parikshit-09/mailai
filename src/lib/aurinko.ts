import { useAuth } from "@clerk/nextjs";

export const getAurinkoAuthUrl = (
  userId: string,
  serviceType: "Google" | "Office365",
) => {
  if (!userId) {
    throw new Error("User not authenticated");
  }

  const params = new URLSearchParams({
    clientId: process.env.AURINKO_CLIENT_ID || "",
    scope: "Mail.Read Mail.Send Mail.ReadWrite Mail.Drafts Mail.All",
    serviceType,
    responseType: "code",
    returnUrl: `${process.env.NEXT_PUBLIC_URL}/api/aurinko/auth/callback`,
  });

  return `https://aurinko.app/api/v1/auth/authorize?${params.toString()}`;
};
