import Header from "./components/Header";
import Hero from "./components/Hero";
import VectorGrid from "./components/VectorGrid";
import Footer from "./components/Footer";
import SecurityIntelligence from "./components/SecurityIntelligence";
import ProtocolCore from "./components/ui/ProtocolCore";
import ActionButton from "./components/ui/ActionButton";
import { Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-8 px-16">
      <div className="flex flex-col border border-otonmi-border">
        <Header />
        <Hero />
        <SecurityIntelligence />
        <ProtocolCore />
        {/* <VectorGrid /> */}

        {/* Additional content section placeholder */}
        <section className="py-20 text-center border-t border-otonmi-border w-full flex items-center justify-center flex-col gap-6">
          <h1 className="text-7xl font-bold">BEGIN AUDIT</h1>
          <h3 className="uppercase font-light text-neutral-600">
            Initialize autonomous threat detection for your GitHub repositories
            today.
          </h3>
          <ActionButton className="mt-12 w-fit">
            Initialize Scan <Zap className="w-4 h-4 fill-current" />
          </ActionButton>
        </section>

        <Footer />
      </div>
    </main>
  );
}
