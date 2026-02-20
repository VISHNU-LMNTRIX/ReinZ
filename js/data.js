/* js/data.js */
const leksvinData = {
    categories: [
        { id: 'exterior-coatings', name: "Exterior Nano Coatings", image: "img/product-category/exterior_coatings.jpg" },
        { id: 'paint-correction', name: "Paint Correction & Polishing", image: "img/product-category/paint_correction.jpg" },
        { id: 'interior-protection', name: "Interior Protection", image: "img/product-category/interior_protection.jpg" },
        { id: 'automotive-films', name: "Automotive Films", image: "img/product-category/automotive_films.jpg" }
    ],

    // Product Data Dictionary
    products: {
        'exterior-coatings': [
            {
                id: 'ext-01',
                name: "Premium Nano Borograph",
                price: "Inquire for Price",
                image: "img/products/borograph.webp",
                desc: {
                    text: "Rein'Z - Borograph Coating - A premium hybrid formulation of Graphene and Borophene nano coatings that delivers deep gloss, strong hydrophobicity, and long-lasting protection. Forms a smooth, durable layer that resists UV rays, oxidation, chemicals and micro-scratches, while giving a slick mirror-like finish that repels water, dust and contaminants.",
                    bullets: ["Deep Gloss. Lasting Protection", "Engineered for Harsh Conditions", "Graphene-Borophene Powered"]
                }
            },
            {
                id: 'ext-02',
                name: "Ultra Refined Borophene",
                price: "Inquire for Price",
                image: "img/products/borophene.webp",
                desc: {
                    text: "Rein'Z Borophene Coating is an advanced nano-engineered protective solution powered by Borophene technology, one of the strongest and most durable 2D materials. Designed to deliver exceptional surface hardness, deep gloss and long-lasting protection. It sets a new benchmark in modern coating performance.",
                    bullets: ["Long-Lasting", "Superior Hydrophobic", "Low-Friction Surface", "High-Gloss, Ultra-Slick"]
                }
            },
            {
                id: 'ext-03',
                name: "Most Enhanced Graphene",
                price: "Inquire for Price",
                image: "img/products/graphene.webp",
                desc: {
                    text: "Graphene Coating is a next-generation nano protective solution formulated with graphene technology, a revolutionary 2D carbon material known for its exceptional strength, thermal stability, and conductivity. Engineered to protect and enhance surfaces, it delivers long-lasting gloss, durability and resistance against environmental damage.",
                    bullets: ["Enhanced Surface Hardness", "Superior Hydrophobicamet", "Oxidation Resistance", "Thermal Stability"]
                }
            },
            {
                id: 'ext-04',
                name: "Pure Grade Nano Ceramic",
                price: "Inquire for Price",
                image: "img/products/nano_ceramic.webp",
                desc: {
                    text: "Pure Grade Nano Ceramic Coating is a high-performance surface protection solution formulated with ultra-refined ceramic nanoparticles. Designed to create a strong, transparent protective layer. It enhances gloss while delivering reliable, long-term protection against environmental and chemical damage.",
                    bullets: ["Brilliant Gloss", "Prevents Fading", "High Surface Hardness", "Easy Maintenance"]
                }
            },
            {
                id: 'ext-05',
                name: "Borophene Infused Hydro Swipe",
                price: "Inquire for Price",
                image: "img/products/hydro_swipe.webp",
                desc: {
                    text: "Utilizes a next-generation silica network infused with nano-borophene particles, engineered to form a dense, cross-linking protective layer. The advanced formula delivers superior surface hardness, chemical resistance and long-term hydrophobic performance in an easy spray-on application.",
                    bullets: ["Nano-Borophene Silica", "High-Gloss, Ultra-Slick", "Superior Hydrophobic", "3-6 Months Durable"]
                }
            }
        ],
        'paint-correction': [
            {
                id: 'pc-01',
                name: "PRO-Z1 Polishing Compound",
                price: "Inquire for Price",
                image: "img/products/pro_z1.webp",
                desc: {
                    text: "Rein'Z paint correction compound PRO-Z1 is formulated with advanced abrasive technology for best results on painted surfaces with heavy cutting technology provides a flawless and finished surface with excellent gloss level.",
                    bullets: ["Remove deep scratches", "Fast acting formula", "Mirror like finish", "Durable Gloss"]
                }
            },
            {
                id: 'pc-02',
                name: "PRO-Z10 Polishing Compound",
                price: "Inquire for Price",
                image: "img/products/pro_z10.webp",
                desc: {
                    text: "Rein'Z polishing compound PRO-Z10 enhances the surface to an excellent gloss. This intense blend of silicones and polymers not only seals for protection, it also intensifies the color of the painted surface while giving a very durable finish.",
                    bullets: ["Mirror like finish","Remove Deep Scratches", "Fast Acting Formula", "Durable gloss"]
                }
            }
        ],
        'interior-protection': [
            {
                id: 'int-01',
                name: "SKIN-Z Premium Leather Coating",
                price: "Inquire for Price",
                image: "img/products/skin_z.webp",
                desc: {
                    text: "Rein'Z Leather Coating is a premium ceramic-based shield designed to preserve the soft, supple feel of your leather while providing industrial-grade protection against daily use.",
                    bullets: ["Superior Stain Resistance", "Dye Transfer Prevention", "UV Shielding"]
                }
            },
            {
                id: 'int-02',
                name: "FAB-Z Premium Fabric Coating",
                price: "Inquire for Price",
                image: "img/products/fab_z.webp",
                desc: {
                    text: "Rein'Z Fabric Coating uses advanced nanotechnology to wrap every individual fiber in a breathable, protective shield, ensuring your vehicle's upholstery, carpets and floor mats stay looking brand new.",
                    bullets: ["Hydrophobic Technology", "Oil & Grease Resistance", "UV & Color Preservation"]
                }
            }
        ],
        'automotive-films': [
            {
                id: 'film-01',
                name: "GUARD-Z Premium PPF (TPU)",
                price: "Inquire for Price",
                image: "img/products/guard_z.webp",
                desc: {
                    text: "The Ultimate Shield for Your Investment. Rein'Z GUARD-Z is a high-quality TPU (Thermoplastic Polyurethane) film designed to be a virtually invisible barrier for your vehicle's paint surfaces. Whether your car is brand new or a cherished classic, our PPF ensures it remains in showroom condition.",
                    bullets: ["Self-Healing Technology: Watch scratches and swirl marks disappear as the film surface recovers itself to a 'just waxed' finish automatically.", "Comprehensive Defense: Protects against stone chips, sand, bug splatters, bird droppings, road tar, oils and acid rain.", "Ease of maintenance: Save time on polishing and waxing; a gentle rinse is all it takes to keep your car clean.", "Variable Thickness: Available from 7mil to 10mil", "Versatile Application: Highly stretchable for easy installation on paint surfaces and can also be used as headlight tint.", "High Durability: Built to withstand harsh environmental conditions."]
                }
            },
            {
                id: 'film-02',
                name: "TINT-Z Premium Window Films",
                price: "Inquire for Price",
                image: "img/products/tint_z.webp",
                desc: {
                    text: "Rein'Z - TINT-Z Window films; we provide a shield for you lifestyle. Our advanced film technology is engineered to offer the perfect balance of style, comfort, and safety.",
                    bullets: ["Nano-Ceramic Technology: High-grade materials that don't interfere with electronics or GPS signals.", "Precision Fit: Designed to bond seamlessly with your glass for a factory-finish look.", "Durabiliy: Scratch-resistant coating that ensures your tint looks new for years to come.", "99% UV Rejection", "Superior Heat Control", "Glare Reduction", "Shatter Resistance", "Available shades from 2% VLT to 80% VLT"]
                }
            }
        ]
    }
};