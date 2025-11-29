/* js/data.js */
const leksvinData = {
    categories: [
        { id: 'cleaning-detailing-essentials', name: "Cleaning & Detailing", image: "img/product-category/cleaning_and_detailing.jpg" },
        { id: 'interior-exterior-care', name: "Interior & Exterior Care Products", image: "img/product-category/interior_and_exterior_care.jpg" },
        { id: 'protective-coatings-waxes', name: "Protective Coatings & Waxes", image: "img/product-category/coatings_and_waxes.jpg" },
        { id: 'maintenance-solutions', name: "Maintenance Solutions", image: "img/product-category/maintenance_solutions.jpg" },
        { id: 'industrial-cleaners', name: "Industrial Cleaners", image: "img/product-category/industrial_cleaners.jpg" },
        { id: 'carwash-carcare', name: "Car Wash & Car Care", image: "img/product-category/car_wash_&_car_care.jpg" },
        { id: 'workshop-cleaners', name: "Workshop Cleaners", image: "img/product-category/workshop_cleaning.jpg" },
        { id: 'decontamination-chemicals', name: "Decontamination Chemicals", image: "img/product-category/decontamination_chemicals.jpg" },
        { id: 'heavy-duty-cleaning-compounds', name: "Heavy Duty Cleaning Compounds", image: "img/product-category/heavy_duty_cleaning_compound.jpg" },
        { id: 'electrical-contact-cleaners', name: "Electrical Contact Cleaners", image: "img/product-category/electrical_cleaners.jpg" },
        { id: 'ev-fluids', name: "EV Fluids", image: "img/product-category/ev_fluids.jpg" },
        { id: 'floor-cleaners', name: "Floor Cleaners", image: "img/product-category/floor_cleaning.jpg" },
        { id: 'home-care-chemicals', name: "Home Care Chemicals", image: "img/product-category/home_care_chemicals.jpg" },
        { id: 'marine-cleaners', name: "Marine Cleaners", image: "img/product-category/marine_cleaning.jpg" },
    ],

    // Product Data Dictionary
    products: {
        'protective-coatings-waxes': [
            {
                id: 'coat-01',
                name: "Pure Ceramic Coating",
                price: "Inquire for Price",
                image: "img/products/pure_ceramic_coating.webp",
                desc: {
                    text: "Nano Ceramic Coating is an advanced liquid polymer applied to a vehicle’s exterior surfaces to create a durable, transparent protective layer. It chemically bonds with the paint, providing superior resistance against UV rays, oxidation, dirt, and minor scratches.",
                    bullets: ["Exterior Paint Protection & High Gloss", "Self Cleaning, Super Hydrophobic", "Weather resistance, UV Resistance", "Excellent Durability and up to 5 year protection"]
                }
            },
            {
                id: 'coat-02',
                name: "Graphene Pro Coating",
                price: "Inquire for Price",
                image: "img/products/graphene_pro_coating.webp",
                desc: {
                    text: "Graphene Pro Coat is an advanced, easy-to-use nano paint protection coating that provides exceptional surface clarity and durability. Its visible application and enhanced chemical composition deliver long-lasting, high-performance protection.",
                    bullets: ["Enhanced with Additional Silicate Resin for superior durability", "Minimized water spotting for a cleaner finish", "Low sliding angle (10–15°) & High contact angle (110–118°)", "Patent-pending UV Tracing Technology™", "Safe on paint, glass, chrome, trim, and wheels"]
                }
            },
            {
                id: 'coat-03',
                name: "Advanced Borophene Coat",
                price: "Inquire for Price",
                image: "img/products/advanced_borophene_coating.webp",
                desc: {
                    text: "Borophene Coating is a next-generation nano protective coating formulated using advanced boron-based nanomaterials. Renowned for its exceptional strength, thermal stability, and conductivity, borophene provides superior protection and surface enhancement compared to traditional ceramic coatings.",
                    bullets: ["Ultra-High Strength Protection", "Enhanced UV & Oxidation Resistance", "Superior Gloss and Clarity", "Hydrophobic & Self-Cleaning Effect", "Thermal Stability & Chemical Resistance", "Smooth Surface Finish", "Long Lasting Durability"]
                }
            },
            {
                id: 'coat-04',
                name: "Ultimate Borograph Coating",
                price: "Inquire for Price",
                image: "img/products/ultimate_borograph_coating.webp",
                desc: {
                    text: "Borograph Coating is an advanced hybrid nano coating that combines the superior hardness of graphene with the exceptional durability of borophene technology. This unique formulation delivers outstanding surface protection, gloss, and hydrophobic performance for automotive paintwork and other exterior surfaces.",
                    bullets: ["Forms a dense, ultra-smooth layer", "Resists UV rays, oxidation, and chemical stains", "Dual-layer molecular structure enhances surface strength"]
                }
            },
            {
                id: 'coat-05',
                name: "Night Ride Coat",
                price: "Inquire for Price",
                image: "img/products/night_ride_coat.webp",
                desc: {
                    text: "Night Illuminating Ceramic Coating is a premium nano-protective coating infused with photoluminescent compounds that make vehicle surfaces subtly glow in low light or at night. Designed for both aesthetics and performance, this advanced formula not only enhances night time visibility but also provides long-lasting protection.",
                    bullets: ["Photoluminescent Glow Effect", "Dual-Action Protection & Aesthetics", "Advanced Nano Ceramic Shield", "Scratch & Swirl Resistance", "Thermal & Chemical Stability", "Long-Lasting Durability"]
                }
            },
            {
                id: 'coat-11',
                name: "Final Wax Polish",
                price: "Inquire for Price",
                image: "img/products/final_wax_polish.webp",
                desc: {
                    text: "Helps to remove holograms and gives a super shine to the painted surfaces.",
                    bullets: ["Removes holograms", "Super shine finish"]
                }
            },
            {
                id: 'coat-12',
                name: "Spray Carnauba Wax",
                price: "Inquire for Price",
                image: "img/products/spray_carnauba_wax.webp",
                desc: {
                    text: "To make a protective barrier for the finished paint work that lasts over months. Specially made carnauba liquid wax for an easy waxing to get high level of shining.",
                    bullets: ["Protective barrier", "Easy application", "High level shine"]
                }
            },
            {
                id: 'coat-13',
                name: "Carnauba Cream Wax",
                price: "Inquire for Price",
                image: "img/products/carnauba_cream_wax.webp",
                desc: {
                    text: "Its formulation helps to give extra shining and glaze to the polished surfaces. It can be used with machine and waxing pads.",
                    bullets: ["Extra shine and glaze", "Machine compatible", "Easy to use"]
                }
            }
        ],
        'interior-exterior-care': [
            {
                id: 'int-01',
                name: "Z'Leather Coat",
                price: "Inquire for Price",
                image: "img/products/z'leather_coat.webp",
                desc: {
                    text: "Leather Upholstery Coating that protects your leather parts against stains, aging and marks. Creates a smooth and hydrophobic surface that is easy to clean.",
                    bullets: ["Protects against stains and aging", "Hydrophobic surface", "Durability: 1000 passes of abrasion (~6 months)"]
                }
            },
            {
                id: 'int-02',
                name: "Z'Fabric Coat",
                price: "Inquire for Price",
                image: "img/products/z'fabric_coat.webp",
                desc: {
                    text: "Fabric coat helps to repel water based spills without changing the feel of the fabric. A solvent based deep penetrating protectant that evaporates quickly leaving an invisible protective barrier.",
                    bullets: ["Repels water based spills", "Invisible protective barrier", "Ideal for upholstery, curtains, pillows, table linens, backpacks, luggage and more"]
                }
            },
            {
                id: 'int-03',
                name: "Leather ProZ",
                price: "Inquire for Price",
                image: "img/products/leather_proZ.webp",
                desc: {
                    text: "Leather ProZ is a cleaner and conditioner designed to restore leather seats and surfaces to a new look.",
                    bullets: ["Cleans and conditions", "Restores new look", "Maintains original smoothness and texture"]
                }
            },
            {
                id: 'int-04',
                name: "Upholstery Cleaner",
                price: "Inquire for Price",
                image: "img/products/upholstery_cleaner.webp",
                desc: {
                    text: "Upholstery Cleaner is designed to clean and remove dirt and grime from almost all car surfaces. It is formulated to be less harmful to breathe.",
                    bullets: ["Removes dirt and grime", "Versatile surface application", "Safer formulation"]
                }
            },
            {
                id: 'int-05',
                name: "Universal Dressing",
                price: "Inquire for Price",
                image: "img/products/universal_dressing.webp",
                desc: {
                    text: "Protector and restorer of faded plastic and vinyl parts of the cars. Can restore and give new look to rubber, plastic, tyre, trims, and many more.",
                    bullets: ["Restores faded plastic/vinyl", "Versatile application (Rubber, Plastic, Tyre)"]
                }
            }
        ],
        'cleaning-detailing-essentials': [
            {
                id: 'det-01',
                name: "Detailer Polymer Spray",
                price: "Inquire for Price",
                image: "img/products/detailer_polimer_spray.webp",
                desc: {
                    text: "Showroom shine quick detailer spray mainly used to get extra slickness and shine on polished or cleaned cars.",
                    bullets: ["Extra slickness", "Showroom shine", "Ideal for PDIs"]
                }
            },
            {
                id: 'det-02',
                name: "1st Cut Compound",
                price: "Inquire for Price",
                image: "img/products/1st_cut_compound.webp",
                desc: {
                    text: "Step 1 in paint correction process to remove heavy scratches.",
                    bullets: ["Removes heavy scratches", "Compatible with foam and wool pads"]
                }
            },
            {
                id: 'det-03',
                name: "Coating Applicator Block",
                price: "Inquire for Price",
                image: "img/products/coating_applicator_block.webp",
                desc: {
                    text: "Block for application of protective coatings like ceramic coating, graphene coating, and leather coating.",
                    bullets: ["Ergonomic design", "Suitable for various coatings"]
                }
            },
            {
                id: 'det-04',
                name: "Coating Sued Cloth",
                price: "Inquire for Price",
                image: "img/products/coating_sued_cloth.webp",
                desc: {
                    text: "Cloth designed for application of protective coatings like ceramic coating, graphene coating, and leather coating.",
                    bullets: ["Smooth application", "Lint-free"]
                }
            },
            {
                id: 'det-05',
                name: "Cutting Foam Pad Maroon 8\"",
                price: "Inquire for Price",
                image: "img/products/cutting_foam_pad_maroon.webp",
                desc: {
                    text: "Made with premium synthetic foam for paint correction.",
                    bullets: ["Removes heavy scratches", "Premium synthetic foam"]
                }
            },
            {
                id: 'det-06',
                name: "Polishing Foam Pad Yellow 8\"",
                price: "Inquire for Price",
                image: "img/products/polishing_foam_pad_yellow.webp",
                desc: {
                    text: "Made with premium synthetic foam for removing moderate scratches.",
                    bullets: ["Removes swirl marks", "Moderate scratch removal"]
                }
            },
            {
                id: 'det-07',
                name: "Finishing Foam Pad Black 8\"",
                price: "Inquire for Price",
                image: "img/products/finishing_foam_pad_black.webp",
                desc: {
                    text: "Made with premium synthetic foam to remove holograms.",
                    bullets: ["Super shine finish", "Ideal for waxing"]
                }
            },
            {
                id: 'det-08',
                name: "Wool Pad 8\"",
                price: "Inquire for Price",
                image: "img/products/wool_pad.webp",
                desc: {
                    text: "Made of sheep wool for cutting scratches from old paint works.",
                    bullets: ["Heavy cutting", "Natural sheep wool"]
                }
            }
        ],
        'maintenance-solutions': [
            {
                id: 'main-01',
                name: "Engine Shiner",
                price: "Inquire for Price",
                image: "img/products/engine_shiner.webp",
                desc: {
                    text: "Gives engine room a brand new look. Helps to shine and protect engine compartments. Non-conductive formula safely restores new looks without water rinsing.",
                    bullets: ["Restores new look", "Non-conductive formula", "No water rinsing required"]
                }
            },
            {
                id: 'main-02',
                name: "Tire Dressing",
                price: "Inquire for Price",
                image: "img/products/tire_dressing.webp",
                desc: {
                    text: "To shine the tyre like brand new or even more.",
                    bullets: ["High gloss shine", "Restores tire appearance"]
                }
            }
        ],
        'carwash-carcare': [
            {
                id: 'wash-01',
                name: "Super Suds Wax Shampoo",
                price: "Inquire for Price",
                image: "img/products/super_suds_wax_shampoo.webp",
                desc: {
                    text: "New formulation of this shampoo provides extra shine as waxed in washing.",
                    bullets: ["Extra shine", "Less streaking", "Reduces water spotting"]
                }
            },
            {
                id: 'wash-02',
                name: "Waterless Wash",
                price: "Inquire for Price",
                image: "img/products/waterless_wash.webp",
                desc: {
                    text: "Wash the car without water spillage. It not only cleans the car but also gives shine as waxed.",
                    bullets: ["No water spillage", "Cleans and shines", "Eco-friendly solution"]
                }
            }
        ],
        'heavy-duty-cleaning-compounds': [
            {
                id: 'hd-01',
                name: "All Purpose Degreaser",
                price: "Inquire for Price",
                image: "img/products/all_purpose_degreaser.webp",
                desc: {
                    text: "All Purpose Degreaser is to remove greasy and oily dirt and stain mainly from metal parts, engine room, under chassis etc.",
                    bullets: ["Removes grease and oil", "Ideal for engines and chassis", "Heavy duty cleaning"]
                }
            }
        ]
    }
};