import pharm1 from "../assets/pharmacy01.png";
import pharm2 from "../assets/pharmacy02.png";
import pharm3 from "../assets/pharmacy03.png";

export default function PharmacyDirectory() {
  const pharmacies = [
    {
      name: "Goodlife Pharmacy",
      seller: "Goodlife Health Ltd",
      location: "Nairobi CBD",
      services: "Prescription & OTC",
      image: pharm1,
      products: ["Paracetamol", "Vitamin C", "Blood Pressure Monitor"],
    },
    {
      name: "Dawa Plus",
      seller: "Dawa Healthcare Group",
      location: "Westlands",
      services: "Prescription & Wellness",
      image: pharm2,
      products: ["Antibiotics", "Wellness Supplements", "First Aid Kits"],
    },
    {
      name: "Community Health Pharmacy",
      seller: "Community Care Services",
      location: "Kilimani",
      services: "Chronic Care Meds",
      image: pharm3,
      products: ["Diabetes Medication", "Asthma Inhalers", "Pain Relief"],
    },
  ];

  return (
    <section className="space-y-12">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-white">Pharmacies</h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Locate trusted pharmacies, explore available products, and connect
          with verified sellers near you.
        </p>
      </header>

      {/* Pharmacy Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pharmacies.map((pharmacy, index) => (
          <div
            key={index}
            className="bg-cardDark rounded-xl overflow-hidden shadow hover:shadow-xl transition"
          >
            {/* Image */}
            <img
              src={pharmacy.image}
              alt={pharmacy.name}
              className="h-44 w-full object-cover"
            />

            {/* Content */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {pharmacy.name}
                </h3>
                <p className="text-xs text-gray-400">
                  Seller: {pharmacy.seller}
                </p>
              </div>

              <div className="text-sm text-gray-300 space-y-1">
                <p>{pharmacy.location}</p>
                <p className="text-accent">{pharmacy.services}</p>
              </div>

              {/* Products */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-white">
                  Available Products
                </p>

                <div className="flex flex-wrap gap-2">
                  {pharmacy.products.map((product, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-cardLight text-gray-200 border border-white/10"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button className="w-full mt-2 px-4 py-2 text-sm font-semibold rounded-md bg-accent text-primary hover:opacity-90 transition">
                View Pharmacy
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
