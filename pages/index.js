import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>SystemWell</h1>
      <p>Select a body system to explore relevant supplements and information:</p>
      <ul style={{ lineHeight: '2', listStyle: 'none', padding: 0 }}>
        <li><Link href="/systems/skeletal">🦴 Skeletal System</Link></li>
        <li><Link href="/systems/muscular">💪 Muscular System</Link></li>
        <li><Link href="/systems/cardiovascular">❤️ Cardiovascular System</Link></li>
        <li><Link href="/systems/respiratory">🫁 Respiratory System</Link></li>
        <li><Link href="/systems/digestive">🍽️ Digestive System</Link></li>
        <li><Link href="/systems/urinary">🚽 Urinary System</Link></li>
        <li><Link href="/systems/immune">🛡 Immune System</Link></li>
        <li><Link href="/systems/endocrine">🧬 Endocrine System</Link></li>
        <li><Link href="/systems/nervous">🧠 Nervous System</Link></li>
        <li><Link href="/systems/male-reproductive">♂️ Male Reproductive System</Link></li>
        <li><Link href="/systems/female-reproductive">♀️ Female Reproductive System</Link></li>
      </ul>
    </main>
  );
}
