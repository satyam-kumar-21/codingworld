import type { Metadata } from "next";
import AuthForm from "../components/AuthForm";

export const metadata: Metadata = {
  title: "Coding World | Sign In",
  description: "Sign in to your Coding World learning account.",
  robots: { index: false, follow: true },
};

export default function SignInPage() {
  return <AuthForm mode="signin" />;
}