
export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <h1>Mehul</h1>
        {children}
      </body>
    </html>
  );
}