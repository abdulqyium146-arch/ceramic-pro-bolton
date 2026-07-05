import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import SchemaLocalBusiness from "@/components/seo/SchemaLocalBusiness";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaLocalBusiness />
      <Header />
      <main className="flex-1 pt-16 md:pt-20 pb-20 lg:pb-0">
        {children}
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
