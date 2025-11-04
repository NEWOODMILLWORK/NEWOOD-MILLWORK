import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "Request a Quote" };

export default function QuotePage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#0E1116] text-[#E3C9AE]">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-[#C47A45] mb-6">Request a Quote</h1>
          <p className="text-lg text-[#BFA382] mb-8">
            Ready to bring your vision to life? Send us your project details, measurements, or reference drawings.
          </p>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Full name" className="w-full rounded-xl border border-[#C47A45]/30 bg-[#1A1D23] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C47A45]" />
              <input required type="email" placeholder="Email" className="w-full rounded-xl border border-[#C47A45]/30 bg-[#1A1D23] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C47A45]" />
            </div>
            <input placeholder="Phone (optional)" className="w-full rounded-xl border border-[#C47A45]/30 bg-[#1A1D23] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C47A45]" />
            <textarea placeholder="Tell us about your project (dimensions, style, materials, timeline)" rows={5} className="w-full rounded-xl border border-[#C47A45]/30 bg-[#1A1D23] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C47A45]" />
            <div>
              <label className="block text-sm mb-2">Upload drawings or photos</label>
              <input type="file" multiple className="w-full text-sm text-[#BFA382]" />
            </div>
            <button type="submit" className="rounded-xl bg-[#C47A45] text-[#0E1116] px-5 py-3 text-sm font-semibold hover:bg-[#a86230]">Submit Request</button>
          </form>
          <div className="mt-10 border-t border-[#C47A45]/30 pt-6 text-sm text-[#BFA382]">
            Or email us directly at <a href="mailto:info@newoodmillwork.com" className="underline text-[#C47A45]">info@newoodmillwork.com</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
