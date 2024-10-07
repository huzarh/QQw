import Test from "@/components/test";
import About from "./pages/about";

export default function Home() {
  return (
    <div className="flex pt-96   flex-col justify-between items-center">
      <h3 className="animate-bounce text-2xl font-semibold tracking-tight">
        Khuzair Askyer
      </h3>
      <About />
    </div>
  );
}
