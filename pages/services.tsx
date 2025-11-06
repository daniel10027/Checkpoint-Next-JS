import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";


export default function Services() {
  return (
    <Layout title='Services — Daniel' description='Prestations & offres'>
      <h1>Services</h1>
      <p>Je propose une gamme complète couvrant tout le cycle de développement.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
        {services.map((s) => <ServiceCard key={s.title} service={s} />)}
      </div>
    </Layout>
  );
}