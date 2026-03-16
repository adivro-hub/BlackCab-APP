import { Header } from "@/components/layout/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />
      <main className="pb-14 md:pb-0">{children}</main>
    </div>
  );
}
