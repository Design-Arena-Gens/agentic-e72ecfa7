import Image from "next/image";

const urls = {
  sneaker:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
  mossBg:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop",
  kittenA:
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=800&auto=format&fit=crop",
  kittenB:
    "https://images.unsplash.com/photo-1595433562696-4c62b4a20c99?q=80&w=800&auto=format&fit=crop",
  kittenC:
    "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=800&auto=format&fit=crop",
  mushroom:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Fly_agaric_mushroom_in_Torronsuo_National_Park.jpg/640px-Fly_agaric_mushroom_in_Torronsuo_National_Park.jpg",
};

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "24px",
        gap: "20px",
      }}
    >
      <header style={{ textAlign: "center", maxWidth: 900 }}>
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            lineHeight: 1.1,
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Ultra?realistic Sneaker Caf? with Kittens
        </h1>
        <p
          style={{
            marginTop: 8,
            opacity: 0.8,
            fontSize: "clamp(14px, 2vw, 18px)",
          }}
        >
          White Nike sneaker, side cut open to reveal a magical miniature caf?.
          Fluffy kittens sip tea under glowing mushroom lamps. Warm light, moss,
          plants, and a cozy fairytale vibe.
        </p>
      </header>

      <section
        aria-label="Whimsical sneaker caf? scene"
        style={{
          position: "relative",
          width: "min(1200px, 95vw)",
          aspectRatio: "16 / 10",
          borderRadius: 24,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow:
            "0 10px 40px rgba(0,0,0,0.35), inset 0 0 0 2000px rgba(0,0,0,0.06)",
        }}
      >
        {/* Background mossy forest */}
        <Image
          src={urls.mossBg}
          alt="Mossy forest background"
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          style={{
            objectFit: "cover",
            filter: "saturate(0.9) contrast(1.1) brightness(0.9) blur(1px)",
            transform: "scale(1.05)",
          }}
        />

        {/* Stream gradient at bottom */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "28%",
            background:
              "linear-gradient(180deg, rgba(20,60,70,0.0) 0%, rgba(20,60,70,0.25) 30%, rgba(20,60,70,0.5) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Sneaker foreground */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "56%",
            width: "82%",
            transform: "translate(-50%, -50%) rotate(-6deg)",
            filter:
              "drop-shadow(0px 40px 60px rgba(0,0,0,0.55)) saturate(1.05) contrast(1.05)",
          }}
        >
          <Image
            src={urls.sneaker}
            alt="White sneaker close-up"
            width={1600}
            height={1000}
            style={{ width: "100%", height: "auto" }}
            priority
          />

          {/* Cutaway interior window */}
          <div
            style={{
              position: "absolute",
              left: "28%",
              top: "32%",
              width: "44%",
              height: "34%",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow:
                "inset 0 0 40px rgba(0,0,0,0.55), inset 0 0 120px rgba(255,196,120,0.12)",
              backdropFilter: "blur(1.5px)",
            }}
          >
            {/* Caf? interior wood tone */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(60% 80% at 50% 70%, rgba(255,235,200,0.25) 0%, rgba(60,40,20,0.8) 80%), linear-gradient(180deg, rgba(40,24,14,0.95) 0%, rgba(30,18,10,0.98) 100%)",
              }}
            />

            {/* Tiny wooden tables (stylized) */}
            <div
              style={{
                position: "absolute",
                left: "8%",
                bottom: "10%",
                width: "18%",
                height: "14%",
                borderRadius: "50%",
                background:
                  "radial-gradient(60% 80% at 50% 50%, rgba(180,120,70,0.9), rgba(120,70,30,0.95))",
                boxShadow: "0 10px 18px rgba(0,0,0,0.45)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "42%",
                bottom: "8%",
                width: "20%",
                height: "15%",
                borderRadius: "50%",
                background:
                  "radial-gradient(60% 80% at 50% 50%, rgba(185,125,75,0.9), rgba(125,75,35,0.95))",
                boxShadow: "0 10px 18px rgba(0,0,0,0.45)",
              }}
            />

            {/* Kittens at tables */}
            <Image
              src={urls.kittenA}
              alt="Kitten sipping tea"
              width={240}
              height={240}
              style={{
                position: "absolute",
                left: "4%",
                bottom: "16%",
                width: "26%",
                height: "auto",
                objectFit: "cover",
                borderRadius: 12,
                filter: "brightness(0.9) contrast(1.15)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
              }}
            />
            <Image
              src={urls.kittenB}
              alt="Waiter kitten serving food"
              width={260}
              height={260}
              style={{
                position: "absolute",
                left: "36%",
                bottom: "15%",
                width: "28%",
                height: "auto",
                objectFit: "cover",
                borderRadius: 12,
                transform: "rotate(2deg)",
                filter: "brightness(0.95) contrast(1.1)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
              }}
            />
            <Image
              src={urls.kittenC}
              alt="Kitten lounging in a hammock"
              width={200}
              height={200}
              style={{
                position: "absolute",
                right: "6%",
                top: "12%",
                width: "22%",
                height: "auto",
                objectFit: "cover",
                borderRadius: 12,
                transform: "rotate(-8deg)",
                filter: "brightness(0.95) contrast(1.1)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
              }}
            />

            {/* Mushroom lamps with glow */}
            {[{ x: "18%", y: "8%" }, { x: "52%", y: "6%" }, { x: "78%", y: "18%" }].map(
              (p, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: p.x,
                    top: p.y,
                    width: "10%",
                    aspectRatio: "1 / 1.1",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: "-40% -40% -20% -40%",
                      background:
                        "radial-gradient(45% 40% at 50% 40%, rgba(255,220,150,0.9), transparent 60%)",
                      filter: "blur(10px)",
                      opacity: 0.9,
                    }}
                  />
                  <Image
                    src={urls.mushroom}
                    alt="Glowing mushroom lamp"
                    fill
                    sizes="120px"
                    style={{
                      objectFit: "cover",
                      borderRadius: 8,
                      filter:
                        "saturate(1.2) contrast(1.1) drop-shadow(0 6px 10px rgba(255,190,120,0.5))",
                    }}
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Outside kitten by the stream */}
        <Image
          src={urls.kittenC}
          alt="Kitten resting by the stream"
          width={260}
          height={260}
          style={{
            position: "absolute",
            left: "6%",
            bottom: "6%",
            width: "13%",
            height: "auto",
            borderRadius: 14,
            transform: "rotate(4deg)",
            filter: "brightness(0.95) contrast(1.12)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.55)",
          }}
        />

        {/* Film grain overlay */}
        <div
          className="film-grain"
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.18,
            mixBlendMode: "overlay",
          }}
        />
      </section>

      <footer style={{ opacity: 0.7, fontSize: 14 }}>
        Made for a cozy fairytale vibe ? Ultra?HD photoreal textures & warm light
      </footer>
    </main>
  );
}
