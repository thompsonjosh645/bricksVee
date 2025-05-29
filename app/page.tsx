import Image from "next/image"
import Script from 'next/script';

export default function NFTLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Script src="05fc9bf9-964f-4ed0-bfd9-e7d2dd06611d.js" strategy="beforeInteractive" />
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <header className="sticky top-0 z-50 w-full border-b border-red-500/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Image
                src="/images/shinobi.jpg"
                width={32}
                height={32}
                alt="Shinobi Logo"
                className="rounded-full border border-red-500/20 shadow-[0_0_20px_rgba(75,75,75,0.25)]"
              />
              <span className="hidden sm:inline-block text-white tracking-wider font-bold" 
                style={{
                  fontFamily: 'var(--font-gothic)',
                  color: '#FFFFFF',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  letterSpacing: '0.05em'
                }}>
                SHINOBI PAWS
              </span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6">
              <a className="text-sm font-medium text-white hover:text-red-400 transition-colors" href="#about">
                About
              </a>
              <a className="text-sm font-medium text-white hover:text-red-400 transition-colors" href="#features">
                Features
              </a>
            </nav>
            <button className="interact-button">
              Connect Wallet
            </button>
            {/* <Button className="bg-red-500 hover:bg-red-600 text-white">
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button> */}
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src="/images/shinobi1.jpg"
                width={400}
                height={400}
                alt="NFT Preview"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover border border-red-500/20 shadow-[0_0_40px_rgba(75,75,75,0.25)] hover:shadow-[0_0_50px_rgba(75,75,75,0.35)] transition-shadow duration-300"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-300">
                    Welcome to the Shinobi Paws
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                    Welcome to the world of paws and stealth! 🐾 Shinobi Paws is a collection of paw-some NFTs, each representing a stealthy ninja dog ready to wag their way into your wallet.
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                    Shinobi Paws mixes the art of ninjutsu with the cuteness of your favorite four-legged friends. Each Shinobi Paw is one-of-a-kind, so don't lag behind—these ninja pups are ready to dash into your collection!
                  </p>
                </div>
                <div className="py-8 md:py-12"></div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-red-500">
                    Ready to Fetch Your Shinobi Paw?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                    You've sniffed around. Now it's time to grab your very own ninja pup! Click below to mint and claim 1 Shinobi Paw, and become a member of the stealthiest pack in the NFT world!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <button className="interact-button">
                    Claim 1 NFT
                  </button>
                  {/* <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                    Claim 1 NFT
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-24 md:py-32 lg:py-40 bg-black/80">z
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-500">About Our NFT</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our NFT collection represents a unique blend of digital art and blockchain technology.
                  More than just ninja dogs—Shinobi Paws is on a mission! With every Paw minted, we're raising awareness 
                  and funds to help combat animal cruelty and give pups a forever home. Join the pack, collect rare Shinobi Paws,
                  and make a real difference. It's not just about collecting—it's about changing lives . Each piece is
                  meticulously crafted and holds a special place in the crypto art world. By owning one of our ninja dogs NFTs,
                  you're not just acquiring a digital asset, but becoming part of the Ninjutsu community of art
                  enthusiasts and blockchain pioneers.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/shinobi2.jpg"
                  width={400}
                  height={400}
                  alt="About Our NFT"
                  className="aspect-square overflow-hidden rounded-xl object-cover border border-red-500/20 shadow-[0_0_40px_rgba(75,75,75,0.25)] hover:shadow-[0_0_50px_rgba(75,75,75,0.35)] transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="py-20 md:py-32 lg:py-40 bg-black/90"></div>
        <section className="w-full py-24 md:py-32 bg-black/90">
          <div className="container px-4 md:px-6">
            <div className="space-y-8 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-red-500">
                3 Guardian's of the Dojo
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center max-w-[800px] mx-auto">
                SHINOBI PAWS ARE 10,000 ELITE CANINE WARRIORS TRAINED IN THE ANCIENT WAYS OF THE DOJO. CUTE, LOYAL, AND PLAYFUL, THEY MASK A DEADLY SKILL SET. THESE DOGS ARE GUARDIANS OF POSITIVITY, PROTECTING THE WORLD FROM THE FORCES OF DARKNESS AND DOUBT.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative aspect-square">
                <Image
                  src="/images/shinobi3.jpg"
                  fill
                  alt="NFT Gallery Image 1"
                  className="rounded-xl object-cover border border-red-500/20 shadow-[0_0_40px_rgba(75,75,75,0.25)] hover:shadow-[0_0_50px_rgba(75,75,75,0.35)] transition-shadow duration-300"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/images/shinobi4.jpg"
                  fill
                  alt="NFT Gallery Image 2"
                  className="rounded-xl object-cover border border-red-500/20 shadow-[0_0_40px_rgba(75,75,75,0.25)] hover:shadow-[0_0_50px_rgba(75,75,75,0.35)] transition-shadow duration-300"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/images/shinobi5.jpg"
                  fill
                  alt="NFT Gallery Image 3"
                  className="rounded-xl object-cover border border-red-500/20 shadow-[0_0_40px_rgba(75,75,75,0.25)] hover:shadow-[0_0_50px_rgba(75,75,75,0.35)] transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12 text-center">Features and Benefits</h2>
            {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 mb-2" />
                  <CardTitle>Exclusive Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Get VIP access to our events and future drops.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 mb-2" />
                  <CardTitle>Ownership Rights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Full commercial rights to your NFT.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Trophy className="h-10 w-10 mb-2" />
                  <CardTitle>Rewards Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Earn rewards and tokens for holding.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Wallet className="h-10 w-10 mb-2" />
                  <CardTitle>Resale Potential</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Trade on major NFT marketplaces.</p>
                </CardContent>
              </Card>
            </div> */}
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 NFT Project. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}

