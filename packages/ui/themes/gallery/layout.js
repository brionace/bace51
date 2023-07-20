export default function Layout({ children, inter, metadata }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-slate-100 text-blue-500 text-lg font-medium">
          header
        </header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
