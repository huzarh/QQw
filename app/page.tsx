import Test from "@/components/test";
import About from "./pages/about";

export default function Home() {
  return (
    <div className="flex pt-40  flex-col justify-between items-center">
      <img
        alt=""
        src="/assets/profile.jpeg"
        className="inline-block h-48 w-48 rounded-full border-solid border border-gray-400 p-2"
      />
      <h3 className="text-2xl font-semibold tracking-tight pt-12 text-orange-400 font-iawriter">
        Khuzair Askyer
      </h3>
      <About />
    </div>
  );
}
