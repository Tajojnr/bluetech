const PHONE_NUMBER = "2349122814636";

export const getWhatsAppUrl = (productName: string, price: number, specs: string) => {
  const text = `Hi Bluetech Gadgets! 🚀\nI saw this on your website and want to order:\n\n💻 *${productName}*\n💰 Price: ₦${price.toLocaleString()}\n⚙️ Details: ${specs}\n\nIs this currently available in stock?`;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const getSetupCalculatorUrl = (selectedItems: { name: string; price: number }[], total: number) => {
  const itemsList = selectedItems.map(i => `• ${i.name} (₦${i.price.toLocaleString()})`).join('\n');
  const text = `Hi Bluetech Gadgets! 🖥️\nI calculated a custom desk setup on your website:\n\n${itemsList}\n\n*ESTIMATED TOTAL: ₦${total.toLocaleString()}*\n\nCan you confirm item availability and delivery timeframe?`;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const getConsultationUrl = () => {
  const text = `Hi Bluetech Gadgets! ⚡ I need help choosing the right setup/laptop for my budget. Can we consult?`;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
};