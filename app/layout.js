export const metadata = {
  title: "PropertyShare",
  description: "Invest in real estate without owning or operating the property.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
