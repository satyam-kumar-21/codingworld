import { redirect } from "next/navigation";
import { Footer, SiteHeader } from "@/components/coding-world";
import { ProfileView } from "@/components/profile-view";
import { getSessionUser } from "@/lib/auth";

export default async function ProfilePage({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const user = await getSessionUser();
  if (!user) redirect("/login");
  const params = await searchParams;

  return <><SiteHeader /><ProfileView user={user} initialTab={params.tab === "learning" ? "learning" : "profile"} /><Footer /></>;
}
