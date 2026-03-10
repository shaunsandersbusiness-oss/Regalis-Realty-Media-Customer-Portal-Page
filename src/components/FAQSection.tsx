import AccordionItem from './AccordionItem';

export default function FAQSection() {
  return (
    <section id="faq" className="py-12 px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[32px] font-bold text-white mb-3">Frequently Asked Questions</h2>
          <p className="text-[#999999] text-[16px]">
            Quick answers to the most common portal questions
          </p>
        </div>

        <div className="space-y-3">
          <AccordionItem title="I can't find my delivery email. How do I get my media?" compact>
            <p>Check your spam or junk folder — search for "Regalis" or "Aryeo." If you still can't find it, contact us at <a href="mailto:contact@regalisrealtymedia.com" className="text-[#c9a84c]">contact@regalisrealtymedia.com</a> or call (917) 683-8034. We'll resend the delivery link within minutes.</p>
          </AccordionItem>

          <AccordionItem title="Which photo size should I use for MLS?" compact>
            <p>Use the <strong>Web/MLS</strong> version. These images are optimized for online platforms — they load fast and look great on every device. The Print versions are higher resolution and meant for physical print materials only. Uploading Print-size images to MLS can slow down your listing page.</p>
          </AccordionItem>

          <AccordionItem title="How do I get my photos onto my phone?" compact>
            <p>Open the delivery link in your phone's web browser (Safari on iPhone, Chrome on Android). You can tap individual photos to save them to your camera roll. Avoid downloading the ZIP file on your phone — it's much easier to handle on a computer. If you need help, contact us and we can text you the individual photo links.</p>
          </AccordionItem>

          <AccordionItem title="Can I download my media again later?" compact>
            <p>Yes. Your delivery link remains active and your media is stored securely in the system. You can return to download your photos, videos, and other assets anytime. Bookmark the link for easy access.</p>
          </AccordionItem>

          <AccordionItem title="How do I add my video to MLS?" compact>
            <p>Copy the video link from your delivery page. In your MLS listing editor, look for the "Video" or "Virtual Tour URL" field and paste the link. The video player is MLS-compliant — no third-party branding that violates MLS rules.</p>
          </AccordionItem>

          <AccordionItem title="How do I add my 3D Tour to MLS?" compact>
            <p>Copy the 3D Tour link from your delivery page. In your MLS listing editor, paste it into the "Virtual Tour URL" or "3D Tour" field. Most MLS systems have a dedicated field for virtual tours. The tour is Zillow-compatible and works on all major real estate platforms.</p>
          </AccordionItem>

          <AccordionItem title="Can I use my photos on social media?" compact>
            <p>Absolutely. Your listing media is licensed for use in marketing the property. Post photos and videos to Instagram, Facebook, TikTok, LinkedIn, YouTube, and anywhere else you market your listings. Use the Web/MLS size for social media — they're already optimized.</p>
          </AccordionItem>

          <AccordionItem title="How do I share my property website?" compact>
            <p>Copy the property website URL from your delivery page. Share it via text, email, social media, or add it to your MLS listing. The website is live and accessible to anyone with the link.</p>
          </AccordionItem>

          <AccordionItem title="Can you update the property description or details on my listing website?" compact>
            <p>Yes. Contact us at <a href="mailto:contact@regalisrealtymedia.com" className="text-[#c9a84c]">contact@regalisrealtymedia.com</a> with the changes you'd like made and we'll update the property website for you.</p>
          </AccordionItem>

          <AccordionItem title="My download link isn't working. What do I do?" compact>
            <p>Try these steps: (1) Make sure you're using a modern browser (Chrome, Safari, Firefox, Edge). (2) Clear your browser cache and try again. (3) Try a different browser. (4) If downloading a ZIP, make sure you have enough storage space on your device. (5) If none of that works, contact us and we'll troubleshoot or send an alternative download link.</p>
          </AccordionItem>

          <AccordionItem title="How long will my media be available?" compact>
            <p>Your media is stored securely and remains accessible for the life of your listing and beyond. You can return to download your files anytime. We recommend downloading and saving a local copy of your media to your computer as a backup.</p>
          </AccordionItem>

          <AccordionItem title="I need to re-order or add additional services to an existing listing." compact>
            <p>Contact us at <a href="mailto:contact@regalisrealtymedia.com" className="text-[#c9a84c]">contact@regalisrealtymedia.com</a> or call (917) 683-8034. We can add services like twilight photos, video, virtual staging, or any other product to an existing listing without reshooting the original media.</p>
          </AccordionItem>

          <AccordionItem title="Who owns the photos?" compact>
            <p>Regalis Realty Media retains the copyright to all images and video. You are granted a marketing license to use the media for the purpose of marketing the property for the duration of the listing. Contact us if you have questions about extended licensing or usage beyond the original listing period.</p>
          </AccordionItem>
        </div>
      </div>
    </section>
  );
}
