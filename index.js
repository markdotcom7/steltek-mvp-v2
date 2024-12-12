import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to StelTrek MVP!</h1>
      <p>Your adventure begins here 🚀</p>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}

