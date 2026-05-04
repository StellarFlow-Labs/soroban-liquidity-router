import "./globals.css";

export const metadata = {
  title: "StellarFlow | Soroban Router",
  description: "Advanced liquidity routing for the Stellar ecosystem.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
}