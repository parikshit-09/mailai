//api/clerk/webhook/route.tsx

export const POST = async (req: Request) => {
  const { data } = await req.json();
  console.log("Webhook data:", data);
  return new Response("Webhook received", { status: 200 });
};
