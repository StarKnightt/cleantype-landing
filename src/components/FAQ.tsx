interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What makes CleanType different from other text editors?",
    answer: "CleanType combines minimalist design with powerful features, focusing on distraction-free writing while maintaining high performance. Our unique interface and customizable workspace help you focus on what matters most - your writing."
  },
  {
    question: "Is CleanType free to use?",
    answer: "Yes, CleanType is completely free and open-source. We believe in making quality writing tools accessible to everyone. You can contribute to the project on GitHub or support us through donations."
  },
  {
    question: "Can I use CleanType offline?",
    answer: "Absolutely! CleanType is a desktop application that works entirely offline. Your documents are stored locally, ensuring privacy and accessibility even without an internet connection."
  },
  {
    question: "How do I report bugs or request features?",
    answer: "You can report bugs and request features through our GitHub repository. We actively monitor issues and welcome community feedback to improve CleanType."
  }
];

const FAQ = () => {
  return (
    <section className="bg-base-100 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted text-lg text-center mb-8">
          Everything you need to know about CleanType
        </p>
        <div className="space-y-4 px-4">
          {faqData.map((item, index) => (
            <div key={index} className="collapse bg-base-100 shadow-soft hover:shadow-hover transition-all duration-300 border border-base-200">
              <input type="radio" name="faq-accordion" /> 
              <div className="collapse-title text-xl font-medium">
                {item.question}
              </div>
              <div className="collapse-content">
                <p className="text-muted pt-2">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 