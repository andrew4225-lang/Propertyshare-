export const metadata = {
  title: "PropertyShare",
  description: "Invest in real estate differently.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
