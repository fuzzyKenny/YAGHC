import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/app-sidebar";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <div className="max-h-screen absolute">
        <AppSidebar />
      </div>
      <Nav />
    </>
  );
}
