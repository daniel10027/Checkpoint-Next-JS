export default function ServiceCard({
  service,
}: {
  service: { title: string; price: string; description: string; bullets: string[] };
}) {
  return (
    <article className='card'>
      <div className='cardBody'>
        <h3 className='cardTitle'>{service.title}</h3>
        <p className='price'>Starts From <strong>{service.price}</strong></p>
        <p className='cardExcerpt'>{service.description}</p>
        <ul className='bulletList'>
          {service.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </article>
  );
}