import type { Metadata } from "next";
import AuthForm from "../components/AuthForm";

export const metadata: Metadata = {
  title: "Coding World | Create Your Account",
  description: "Create your Coding World account and start learning practical coding skills.",
  robots: { index: false, follow: true },
};

export default function SignUpPage() {
  return <AuthForm mode="signup" />;
}