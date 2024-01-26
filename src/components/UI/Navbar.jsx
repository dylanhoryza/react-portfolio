export default function Nav({ links }) {
  return (
    <header>
      <nav>
        <div className='nav-links'>{links.map((link) => link)}</div>
      </nav>
    </header>
  );
}
