export const BOOKING_URL = "https://bloomfield-acu.janeapp.com/#/staff_member/1/treatment/1";

export const LOCATIONS = [
  {
    name: "Hyde Park, Chicago",
    address: "1525 E 53rd St, Ste 814",
    city: "Chicago, IL 60615",
    bookingUrl: "https://bloomfield-acu.janeapp.com/#/staff_member/1/treatment/1",
  },
  {
    name: "Frankfort",
    address: "20500 S La Grange Rd, Ste 5",
    city: "Frankfort, IL 60423",
    bookingUrl: "https://laurenmanselldpt.janeapp.com/#/staff_member/23",
  },
] as const;

export const CONTACT = {
  email: "anna@bloomfield-acu.com",
  phone: "708-252-3732",
  website: "bloomfield-acu.com",
} as const;

export const FORM_ENDPOINT = "https://formspree.io/f/PLACEHOLDER"; // TODO: replace with actual Formspree endpoint

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Appointments", href: "#booking" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    id: "acupuncture",
    name: "Acupuncture",
    description:
      "Thin needles less than half of a millimeter thick are placed into the body to release endorphins and neurotransmitters, improve blood circulation, and take the body from a sympathetic state to a parasympathetic state.",
    icon: "Crosshair" as const,
    detail: {
      metaTitle: "Acupuncture in Hyde Park Chicago | Natural Pain & Stress Relief",
      metaDescription: "Targeted acupuncture for back, neck, shoulder, knee, and joint pain in Hyde Park, Chicago and Frankfort, IL. Natural, drug-free relief with Dr. Anna Bloomfield.",
      fullDescription:
        "Acupuncture is the foundation of our practice. Using thin, sterile needles — less than half a millimeter thick — Dr. Bloomfield stimulates specific points along the body's meridians to release endorphins and neurotransmitters, improve blood circulation, and shift the body from a sympathetic (fight-or-flight) state to a parasympathetic (rest-and-heal) state. Techniques include Master Tung's points, Five Element acupuncture, Yin Yang theory, and Motor Entry Point (MEP) needling.",
      conditions: [
        "Back pain & sciatica",
        "Neck & shoulder pain",
        "Knee & joint pain",
        "Migraines & headaches",
        "Sports & work injuries",
        "Muscle strains & tendonitis",
        "Stress & anxiety",
        "Insomnia & sleep issues",
        "Digestive disorders",
        "Fertility support",
      ],
      benefits: [
        "Drug-free pain relief",
        "Reduced inflammation",
        "Improved circulation",
        "Nervous system regulation",
        "Faster injury recovery",
        "Better sleep quality",
      ],
    },
  },
  {
    id: "herbalism",
    name: "Herbalism",
    description:
      "One of the oldest forms of medicine — modern research enables herbalists to prescribe herbs compatible with your natural biome and any pharmaceuticals you may be taking.",
    icon: "Leaf" as const,
    detail: {
      metaTitle: "Chinese Herbal Medicine in Hyde Park Chicago | Bloomfield Acupuncture",
      metaDescription: "Custom herbal formulas in Hyde Park, Chicago. Board-certified herbalist Dr. Anna Bloomfield prescribes herbs compatible with your biome and medications.",
      fullDescription:
        "Herbalism is one of the oldest forms of medicine, with evidence showing humans have used plants as medicine for tens of thousands of years. Modern research enables Dr. Bloomfield — a board-certified herbalist — to prescribe herbs that are compatible with your natural biome and any pharmaceuticals you may be taking. Each formula is custom-blended to address your specific health concerns.",
      conditions: [
        "Digestive issues & bloating",
        "Hormonal imbalances",
        "Seasonal allergies",
        "Immune support",
        "Stress & adrenal fatigue",
        "Skin conditions",
        "Menstrual irregularities",
        "Chronic fatigue",
      ],
      benefits: [
        "Personalized formulas",
        "Safe with medications",
        "Addresses root causes",
        "Supports long-term healing",
        "Natural & plant-based",
        "Complements acupuncture",
      ],
    },
  },
  {
    id: "cupping",
    name: "Cupping",
    description:
      "Cups are placed over the skin to create suction, stimulating blood flow, relieving muscle tension, promoting healing, and removing pathogens from the body.",
    icon: "Circle" as const,
    detail: {
      metaTitle: "Cupping Therapy in Hyde Park Chicago | Bloomfield Acupuncture",
      metaDescription: "Cupping therapy in Hyde Park, Chicago for muscle tension, pain relief, and faster recovery. Book with Dr. Anna Bloomfield today.",
      fullDescription:
        "Cups are placed over the skin to create suction, drawing blood to the surface to stimulate circulation, release deep muscle tension, promote healing, and help remove pathogens from the body. Cupping is especially effective for athletes, desk workers, and anyone dealing with chronic tightness or pain. Sessions are often combined with acupuncture for enhanced results.",
      conditions: [
        "Chronic muscle tension",
        "Back & shoulder tightness",
        "Sports recovery",
        "Respiratory issues",
        "Poor circulation",
        "Chronic pain",
      ],
      benefits: [
        "Deep muscle release",
        "Improved blood flow",
        "Reduced inflammation",
        "Toxin removal",
        "Faster recovery time",
        "Relaxation & stress relief",
      ],
    },
  },
  {
    id: "gua-sha",
    name: "Gua Sha",
    description:
      "Scraping the skin with a smooth-edged tool to promote blood circulation, release muscle tension, and boost lymphatic drainage for whole-body wellness.",
    icon: "Hand" as const,
    detail: {
      metaTitle: "Gua Sha Treatment in Hyde Park Chicago | Bloomfield Acupuncture",
      metaDescription: "Professional gua sha therapy in Hyde Park, Chicago. Release muscle tension, boost circulation, and support lymphatic drainage with Dr. Anna Bloomfield.",
      fullDescription:
        "Gua sha involves scraping the skin with a smooth-edged tool to promote blood circulation, release muscle tension, and boost lymphatic drainage. This technique helps break up fascial adhesions and stimulates the body's natural healing response. It's particularly effective for chronic pain, muscle stiffness, and supporting the immune system.",
      conditions: [
        "Neck & shoulder stiffness",
        "Chronic pain",
        "Muscle knots & adhesions",
        "Headaches & migraines",
        "Cold & flu symptoms",
        "Inflammation",
      ],
      benefits: [
        "Fascial release",
        "Lymphatic drainage",
        "Improved range of motion",
        "Immune system support",
        "Reduced muscle soreness",
        "Enhanced circulation",
      ],
    },
  },
  {
    id: "bodywork",
    name: "Body Work",
    description:
      "Hands-on therapeutic techniques including muscle energy methods to relieve tension, restore mobility, and complement your acupuncture treatments.",
    icon: "Zap" as const,
    detail: {
      metaTitle: "Therapeutic Bodywork in Hyde Park Chicago | Bloomfield Acupuncture",
      metaDescription: "Therapeutic bodywork and muscle energy techniques in Hyde Park, Chicago. Restore mobility and relieve tension with Dr. Anna Bloomfield.",
      fullDescription:
        "Dr. Bloomfield incorporates hands-on therapeutic bodywork techniques including muscle energy methods to relieve tension, restore mobility, and complement your acupuncture treatments. These techniques are particularly effective for structural imbalances, restricted range of motion, and chronic pain patterns that benefit from a manual therapy approach.",
      conditions: [
        "Limited range of motion",
        "Postural imbalances",
        "Chronic muscle tension",
        "Joint stiffness",
        "Repetitive strain injuries",
        "Post-surgical recovery",
      ],
      benefits: [
        "Restored mobility",
        "Structural rebalancing",
        "Pain pattern interruption",
        "Complements acupuncture",
        "Improved posture",
        "Tension relief",
      ],
    },
  },
  {
    id: "nutrition",
    name: "Nutrition",
    description:
      "Personalized dietary guidelines rooted in Chinese medicine principles, tailored to support your constitution and health goals from the inside out.",
    icon: "Flame" as const,
    detail: {
      metaTitle: "Nutritional Counseling in Hyde Park Chicago | Bloomfield Acupuncture",
      metaDescription: "Personalized dietary guidelines rooted in Chinese medicine in Hyde Park, Chicago. Support your health goals from the inside out with Dr. Anna Bloomfield.",
      fullDescription:
        "Nutrition in Chinese medicine is about more than just calories — it's about eating according to your unique constitution, the seasons, and your current health needs. Dr. Bloomfield provides personalized dietary guidelines that work alongside your acupuncture and herbal treatments to support healing from the inside out.",
      conditions: [
        "Digestive disorders",
        "Low energy & fatigue",
        "Weight management",
        "Inflammation",
        "Food sensitivities",
        "Hormonal imbalances",
      ],
      benefits: [
        "Constitution-based approach",
        "Supports treatment outcomes",
        "Sustainable changes",
        "Seasonal eating guidance",
        "Whole-body nourishment",
        "Integrates with other therapies",
      ],
    },
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    condition: "Chronic Pain",
    quote:
      "After years of living with constant pain, Dr. Bloomfield gave me my life back. I can finally play with my kids again without wincing.",
  },
  {
    name: "James R.",
    condition: "Anxiety & Insomnia",
    quote:
      "I was skeptical at first, but after just three sessions, I was sleeping through the night for the first time in years. The calm I feel now is incredible.",
  },
  {
    name: "Maria L.",
    condition: "Migraines",
    quote:
      "My migraines went from weekly to almost nonexistent. Dr. Bloomfield truly listens and creates a treatment plan that works for you as an individual.",
  },
  {
    name: "David K.",
    condition: "Sports Recovery",
    quote:
      "The combination of acupuncture and cupping has transformed my recovery time. I wish I'd started this years ago.",
  },
  {
    name: "Linda P.",
    condition: "Digestive Issues",
    quote:
      "The herbal formulas Dr. Bloomfield prescribed alongside acupuncture have completely changed my relationship with food and digestion.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide variety of modalities to ensure the best chance for achieving your health goals. This includes acupuncture, herbalism, cupping, gua sha, body work, and dietary guidelines. Muscle energy techniques are also being incorporated into treatments.",
  },
  {
    question: "How do I get started?",
    answer:
      "Click the Book Now button to set up a new patient appointment — just make sure to select the correct location. Once you pick your time, you'll receive an email from Jane (the electronic scheduling and medical records system) to fill out new patient paperwork. You can also contact us to schedule a complimentary 15-minute phone consultation.",
  },
  {
    question: "How much do you charge for cash appointments?",
    answer:
      "A new patient acupuncture session is $120 and runs for 70–90 minutes. Return visits are $90 for 60 minutes. Herbal consult appointments are $60 for 40 minutes. We are committed to making services as accessible as possible, including discounted events. Feel free to reach out with any questions regarding pricing or upcoming events.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We accept BlueCross BlueShield insurance. For other insurance providers, we are currently an out-of-network provider and require payment at the time of service. We are in the process of getting paneled by Optum as well.",
  },
  {
    question: "Does acupuncture hurt?",
    answer:
      "Most patients are surprised by how comfortable acupuncture is. The needles used are hair-thin — less than half a millimeter thick. You may feel a brief sensation upon insertion, often described as a mild tingling or dull ache. Many patients find the experience deeply relaxing and even fall asleep during sessions.",
  },
  {
    question: "What should I expect during my first visit?",
    answer:
      "Your first visit begins with a thorough consultation where we discuss your health history, current concerns, and wellness goals. This is followed by a physical assessment including pulse and tongue diagnosis. Your initial treatment will be gentle and tailored to your specific needs. Plan for about 70–90 minutes for your first appointment.",
  },
  {
    question: "Where are you located?",
    answer:
      "We have two locations: Hyde Park in Chicago at 1525 E 53rd St, Ste 814, Chicago, IL 60615, and Frankfort at 20500 S La Grange Rd, Ste 5, Frankfort, IL 60423.",
  },
  {
    question: "How should I prepare for my appointment?",
    answer:
      "Eat a light meal 1–2 hours before your appointment — don't come on an empty stomach. Wear loose, comfortable clothing that can be rolled up above the elbows and knees. Avoid caffeine and alcohol before your session. Come with an open mind and any questions you might have.",
  },
] as const;

export const GALLERY_IMAGES = [
  { src: "/treatment-ear-auriculotherapy.jpeg", alt: "Auriculotherapy treatment on ear" },
  { src: "/treatment-back-needles.jpeg", alt: "Acupuncture needles along the back" },
  { src: "/treatment-patient-care.jpeg", alt: "Dr. Bloomfield treating a patient" },
  { src: "/treatment-back-multiple-bw.jpeg", alt: "Acupuncture treatment in black and white" },
  { src: "/treatment-deep-insertion.jpeg", alt: "Precise needle placement technique" },
  { src: "/treatment-neck-needles.jpeg", alt: "Acupuncture treatment on neck and upper back" },
  { src: "/treatment-back-ear.jpeg", alt: "Combined back and ear acupuncture treatment" },
  { src: "/treatment-needle-insertion.jpeg", alt: "Careful needle insertion technique" },
  { src: "/treatment-bw-insertion.jpeg", alt: "Acupuncture needle insertion close-up" },
  { src: "/treatment-back-bw.jpeg", alt: "Back treatment in black and white" },
] as const;
