import type { Quote } from "@/types/quote"

// A comprehensive collection of quotes with multilingual support
const LOCAL_QUOTES: Quote[] = [
  {
    _id: "quote-1",
    content: {
      en: "The only way to do great work is to love what you do.",
      ar: "الطريقة الوحيدة للقيام بعمل عظيم هي أن تحب ما تفعله.",
    },
    author: {
      en: "Steve Jobs",
      ar: "ستيف جوبز",
    },
    tags: ["inspiration", "work", "passion"],
  },
  {
    _id: "quote-2",
    content: {
      en: "Life is what happens when you're busy making other plans.",
      ar: "الحياة هي ما يحدث عندما تكون مشغولاً بوضع خطط أخرى.",
    },
    author: {
      en: "John Lennon",
      ar: "جون لينون",
    },
    tags: ["life", "wisdom", "planning"],
  },
  {
    _id: "quote-3",
    content: {
      en: "The future belongs to those who believe in the beauty of their dreams.",
      ar: "المستقبل ينتمي لأولئك الذين يؤمنون بجمال أحلامهم.",
    },
    author: {
      en: "Eleanor Roosevelt",
      ar: "إليانور روزفلت",
    },
    tags: ["future", "dreams", "belief"],
  },
  {
    _id: "quote-4",
    content: {
      en: "In the middle of difficulty lies opportunity.",
      ar: "في وسط الصعوبة تكمن الفرصة.",
    },
    author: {
      en: "Albert Einstein",
      ar: "ألبرت أينشتاين",
    },
    tags: ["opportunity", "difficulty", "challenge"],
  },
  {
    _id: "quote-5",
    content: {
      en: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      ar: "النجاح ليس نهائياً، والفشل ليس قاتلاً: إنها الشجاعة للاستمرار هي ما يهم.",
    },
    author: {
      en: "Winston Churchill",
      ar: "ونستون تشرشل",
    },
    tags: ["success", "failure", "courage"],
  },
  {
    _id: "quote-6",
    content: {
      en: "The best time to plant a tree was 20 years ago. The second best time is now.",
      ar: "أفضل وقت لزراعة شجرة كان قبل 20 عاماً. ثاني أفضل وقت هو الآن.",
    },
    author: {
      en: "Chinese Proverb",
      ar: "مثل صيني",
    },
    tags: ["time", "action", "wisdom"],
  },
  {
    _id: "quote-7",
    content: {
      en: "Your time is limited, don't waste it living someone else's life.",
      ar: "وقتك محدود، فلا تضيعه في عيش حياة شخص آخر.",
    },
    author: {
      en: "Steve Jobs",
      ar: "ستيف جوبز",
    },
    tags: ["time", "life", "authenticity"],
  },
  {
    _id: "quote-8",
    content: {
      en: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
      ar: "أخبرني وأنسى. علمني وأتذكر. أشركني وأتعلم.",
    },
    author: {
      en: "Benjamin Franklin",
      ar: "بنجامين فرانكلين",
    },
    tags: ["learning", "education", "wisdom"],
  },
  {
    _id: "quote-9",
    content: {
      en: "The journey of a thousand miles begins with one step.",
      ar: "رحلة الألف ميل تبدأ بخطوة واحدة.",
    },
    author: {
      en: "Lao Tzu",
      ar: "لاو تزو",
    },
    tags: ["journey", "beginnings", "action"],
  },
  {
    _id: "quote-10",
    content: {
      en: "It does not matter how slowly you go as long as you do not stop.",
      ar: "لا يهم مدى بطء سيرك طالما أنك لا تتوقف.",
    },
    author: {
      en: "Confucius",
      ar: "كونفوشيوس",
    },
    tags: ["perseverance", "progress", "determination"],
  },
  {
    _id: "quote-11",
    content: {
      en: "Our greatest glory is not in never falling, but in rising every time we fall.",
      ar: "مجدنا الأعظم ليس في عدم السقوط أبداً، بل في النهوض في كل مرة نسقط فيها.",
    },
    author: {
      en: "Confucius",
      ar: "كونفوشيوس",
    },
    tags: ["resilience", "failure", "success"],
  },
  {
    _id: "quote-12",
    content: {
      en: "Believe you can and you're halfway there.",
      ar: "آمن بأنك تستطيع وستكون قد قطعت نصف الطريق.",
    },
    author: {
      en: "Theodore Roosevelt",
      ar: "ثيودور روزفلت",
    },
    tags: ["belief", "confidence", "motivation"],
  },
  {
    _id: "quote-13",
    content: {
      en: "Everything you've ever wanted is on the other side of fear.",
      ar: "كل ما أردته يوماً موجود على الجانب الآخر من الخوف.",
    },
    author: {
      en: "George Addair",
      ar: "جورج أدير",
    },
    tags: ["fear", "courage", "desire"],
  },
  {
    _id: "quote-14",
    content: {
      en: "The only limit to our realization of tomorrow will be our doubts of today.",
      ar: "الحد الوحيد لتحقيق غدنا هو شكوكنا اليوم.",
    },
    author: {
      en: "Franklin D. Roosevelt",
      ar: "فرانكلين د. روزفلت",
    },
    tags: ["doubt", "future", "limitation"],
  },
  {
    _id: "quote-15",
    content: {
      en: "Do what you can, with what you have, where you are.",
      ar: "افعل ما تستطيع، بما لديك، حيث أنت.",
    },
    author: {
      en: "Theodore Roosevelt",
      ar: "ثيودور روزفلت",
    },
    tags: ["action", "resourcefulness", "practicality"],
  },
  {
    _id: "quote-16",
    content: {
      en: "Be yourself; everyone else is already taken.",
      ar: "كن نفسك؛ فالجميع الآخرون مأخوذون بالفعل.",
    },
    author: {
      en: "Oscar Wilde",
      ar: "أوسكار وايلد",
    },
    tags: ["authenticity", "individuality", "self"],
  },
  {
    _id: "quote-17",
    content: {
      en: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      ar: "شيئان لا نهاية لهما: الكون وغباء البشر؛ ولست متأكداً من الكون.",
    },
    author: {
      en: "Albert Einstein",
      ar: "ألبرت أينشتاين",
    },
    tags: ["humor", "wisdom", "humanity"],
  },
  {
    _id: "quote-18",
    content: {
      en: "A room without books is like a body without a soul.",
      ar: "غرفة بلا كتب كجسد بلا روح.",
    },
    author: {
      en: "Marcus Tullius Cicero",
      ar: "ماركوس توليوس شيشرون",
    },
    tags: ["books", "reading", "wisdom"],
  },
  {
    _id: "quote-19",
    content: {
      en: "You only live once, but if you do it right, once is enough.",
      ar: "أنت تعيش مرة واحدة فقط، لكن إذا عشتها بشكل صحيح، فمرة واحدة تكفي.",
    },
    author: {
      en: "Mae West",
      ar: "ماي ويست",
    },
    tags: ["life", "living", "wisdom"],
  },
  {
    _id: "quote-20",
    content: {
      en: "If you tell the truth, you don't have to remember anything.",
      ar: "إذا قلت الحقيقة، فلن تضطر لتذكر أي شيء.",
    },
    author: {
      en: "Mark Twain",
      ar: "مارك توين",
    },
    tags: ["truth", "honesty", "wisdom"],
  },
  {
    _id: "quote-21",
    content: {
      en: "I have not failed. I've just found 10,000 ways that won't work.",
      ar: "أنا لم أفشل. لقد وجدت فقط 10,000 طريقة لن تعمل.",
    },
    author: {
      en: "Thomas A. Edison",
      ar: "توماس أ. إديسون",
    },
    tags: ["failure", "perseverance", "invention"],
  },
  {
    _id: "quote-22",
    content: {
      en: "The man who does not read has no advantage over the man who cannot read.",
      ar: "الرجل الذي لا يقرأ ليس لديه أي ميزة على الرجل الذي لا يستطيع القراءة.",
    },
    author: {
      en: "Mark Twain",
      ar: "مارك توين",
    },
    tags: ["reading", "education", "wisdom"],
  },
  {
    _id: "quote-23",
    content: {
      en: "It is never too late to be what you might have been.",
      ar: "لم يفت الأوان أبداً لتكون ما كان يمكن أن تكونه.",
    },
    author: {
      en: "George Eliot",
      ar: "جورج إليوت",
    },
    tags: ["potential", "opportunity", "change"],
  },
  {
    _id: "quote-24",
    content: {
      en: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
      ar: "الأمس تاريخ، والغد لغز، واليوم هبة من الله، ولهذا نسميه الحاضر.",
    },
    author: {
      en: "Bill Keane",
      ar: "بيل كين",
    },
    tags: ["present", "time", "mindfulness"],
  },
  {
    _id: "quote-25",
    content: {
      en: "The secret of getting ahead is getting started.",
      ar: "سر التقدم هو البدء.",
    },
    author: {
      en: "Mark Twain",
      ar: "مارك توين",
    },
    tags: ["beginning", "action", "progress"],
  },
  {
    _id: "quote-26",
    content: {
      en: "I am not a product of my circumstances. I am a product of my decisions.",
      ar: "أنا لست نتاج ظروفي. أنا نتاج قراراتي.",
    },
    author: {
      en: "Stephen Covey",
      ar: "ستيفن كوفي",
    },
    tags: ["decisions", "responsibility", "self-determination"],
  },
  {
    _id: "quote-27",
    content: {
      en: "The only person you are destined to become is the person you decide to be.",
      ar: "الشخص الوحيد الذي من المقدر لك أن تصبحه هو الشخص الذي تقرر أن تكونه.",
    },
    author: {
      en: "Ralph Waldo Emerson",
      ar: "رالف والدو إيمرسون",
    },
    tags: ["destiny", "decision", "self-determination"],
  },
  {
    _id: "quote-28",
    content: {
      en: "Go confidently in the direction of your dreams. Live the life you have imagined.",
      ar: "امضِ بثقة في اتجاه أحلامك. عش الحياة التي تخيلتها.",
    },
    author: {
      en: "Henry David Thoreau",
      ar: "هنري ديفيد ثورو",
    },
    tags: ["dreams", "confidence", "life"],
  },
  {
    _id: "quote-29",
    content: {
      en: "When I let go of what I am, I become what I might be.",
      ar: "عندما أتخلى عما أنا عليه، أصبح ما قد أكون عليه.",
    },
    author: {
      en: "Lao Tzu",
      ar: "لاو تزو",
    },
    tags: ["change", "potential", "transformation"],
  },
  {
    _id: "quote-30",
    content: {
      en: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
      ar: "الحياة لا تقاس بعدد الأنفاس التي نأخذها، بل باللحظات التي تأخذ أنفاسنا.",
    },
    author: {
      en: "Maya Angelou",
      ar: "مايا أنجيلو",
    },
    tags: ["life", "moments", "experience"],
  },
]

// Keep track of used quotes to avoid repetition
const usedQuoteIds = new Set<string>()

export async function fetchQuote(): Promise<Quote> {
  try {
    // If we've used all quotes, reset the tracking
    if (usedQuoteIds.size >= LOCAL_QUOTES.length) {
      usedQuoteIds.clear()
    }

    // Find quotes that haven't been used yet
    const availableQuotes = LOCAL_QUOTES.filter((quote) => !usedQuoteIds.has(quote._id))

    // Select a random quote from available quotes
    const randomIndex = Math.floor(Math.random() * availableQuotes.length)
    const selectedQuote = availableQuotes[randomIndex]

    // Mark this quote as used
    usedQuoteIds.add(selectedQuote._id)

    // Simulate network delay for a more realistic experience
    await new Promise((resolve) => setTimeout(resolve, 300))

    return selectedQuote
  } catch (error) {
    console.error("Error fetching quote:", error)
    // In case of any error, return a default quote
    return {
      _id: "default-quote",
      content: {
        en: "The best preparation for tomorrow is doing your best today.",
        ar: "أفضل استعداد للغد هو أن تبذل قصارى جهدك اليوم.",
      },
      author: {
        en: "H. Jackson Brown Jr.",
        ar: "هـ. جاكسون براون جونيور",
      },
      tags: ["preparation", "excellence", "today"],
    }
  }
}

export async function fetchQuotesByTag(tag: string): Promise<Quote[]> {
  try {
    // Filter quotes by the requested tag
    const matchingQuotes = LOCAL_QUOTES.filter(
      (quote) => quote.tags && quote.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
    )

    // If no quotes match the tag, return a subset of all quotes
    if (matchingQuotes.length === 0) {
      return LOCAL_QUOTES.slice(0, 5)
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    return matchingQuotes
  } catch (error) {
    console.error(`Error fetching quotes by tag ${tag}:`, error)
    // Return a few default quotes in case of error
    return LOCAL_QUOTES.slice(0, 5)
  }
}

export async function fetchTags(): Promise<string[]> {
  try {
    // Extract all unique tags from the quotes
    const allTags = LOCAL_QUOTES.flatMap((quote) => quote.tags || [])
    const uniqueTags = [...new Set(allTags)]

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    return uniqueTags
  } catch (error) {
    console.error("Error fetching tags:", error)
    // Return a default set of tags
    return ["inspiration", "wisdom", "life", "success"]
  }
}

