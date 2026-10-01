import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface JsonLdFaqProps {
  faqs: FAQ[];
}

const JsonLdFaq: React.FC<JsonLdFaqProps> = ({ faqs }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default JsonLdFaq;
