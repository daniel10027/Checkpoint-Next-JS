import Layout from "@/components/Layout";


export default function Biography() {
  return (
    <Layout title='Biography — Daniel' description='Biographie et coordonnées'>
      <h1>Biography</h1>
      <p>
        Software Engineer basé à Abidjan, spécialisé en Python/Django (backend), Flutter (mobile) et Next.js / Angular (web).
        Passionné par l’architecture logicielle, je crée des solutions modernes, performantes et évolutives adaptées aux besoins des entreprises.
      </p>

      <h2>Coordonnées</h2>
      <ul>
        <li><strong>Nom:</strong> Jean Marie Daniel Vianney Guedegbe</li>
        <li><strong>Téléphone:</strong> +225 07 48 73 33 65</li>
        <li><strong>Email:</strong> danieldanielguedegbe10027@gmail.com</li>
        <li><strong>LinkedIn:</strong> <a href='https://www.linkedin.com/in/daniel-guedegbe' target='_blank' rel='noreferrer'>daniel-guedegbe</a></li>
        <li><strong>GitHub:</strong> <a href='https://github.com/daniel10027' target='_blank' rel='noreferrer'>daniel10027</a></li>
        <li><strong>Portfolio:</strong> <a href='https://gdaniel.dev' target='_blank' rel='noreferrer'>gdaniel.dev</a></li>
        <li><strong>Adresse:</strong> Abidjan, Côte d’Ivoire</li>
      </ul>

      <p style={{ marginTop: 16 }}>
        <a className='btn' href='/cv.pdf' target='_blank' rel='noreferrer'>⬇️ Télécharger mon CV</a>
      </p>
    </Layout>
  );
}