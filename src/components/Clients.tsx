const clients = [
  "Nordvik",
  "BirchStone",
  "Kelda",
  "Tundra",
  "Varden",
  "Sølv Capital",
  "Isfjord",
  "Kystlinje",
];

export default function Clients() {
  return (
    <section className="bg-white py-16 lg:py-20 border-y border-silver-light/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-charcoal/35 text-[10px] font-semibold tracking-[0.3em] uppercase mb-10">
          Trusted By Ambitious Teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5 lg:gap-x-14">
          {clients.map((client) => (
            <span
              key={client}
              className="font-display text-lg lg:text-xl font-semibold text-charcoal/18 hover:text-charcoal/40 transition-colors duration-200 cursor-default tracking-tight"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
