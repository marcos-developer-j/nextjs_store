import {Roboto} from 'next/font/google'
import { Footer } from "../components/shared/Footer";
import { Header } from "../components/shared/Header";
import  "app/sass/globals.sass"
import { Hero } from 'app/components/home/Hero';
import { Description } from 'app/components/home/Description';

const roboto = Roboto({
  weight:["900"],
  subsets:["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <Hero />
        <Description />
        {children}
        <Footer />
      </body>
    </html>
  );
}
