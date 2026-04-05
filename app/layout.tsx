export const metadata = {
  title: "Perenor",
  description: "Cloud, networking, and software systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
