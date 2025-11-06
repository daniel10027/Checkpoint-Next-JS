import Layout from '@/components/Layout';
import { customers } from '@/lib/data';
import Image from 'next/image';


export default function Customers() {
  return (
    <Layout title="Clients — Daniel' description='Ils m'ont fait confiance">
      <h1>Customers</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 24, alignItems: 'center' }}>
        {customers.map((c) => (
          <div key={c.name} style={{ textAlign: 'center' }}>
            <Image src={c.logo} alt={c.name} width={140} height={60} />
            <p style={{ marginTop: 8 }}>{c.name}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}