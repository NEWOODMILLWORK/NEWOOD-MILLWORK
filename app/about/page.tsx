import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#0E1116] text-[#E3C9AE]">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-[#C47A45] mb-6">About NEWOOD</h1>
          <p className="text-lg text-[#BFA382] mb-6">
            At NEWOOD MILLWORK INC, we believe craftsmanship and precision go hand in hand...
          </p>
          <p className="text-lg text-[#BFA382] mb-6">
            From our workshop in Concord, Ontario, our skilled artisans and CNC specialists combine traditional craftsmanship with cutting-edge technology.
          </p>
          <p className="text-lg text-[#BFA382] mb-6">
            We take pride in our transparent process — from consultation to installation — ensuring our clients are informed and inspired every step of the way.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
