import AccordionItem from './AccordionItem';

export default function GuidesSection() {
  return (
    <section id="guides" className="py-12 px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[32px] font-bold text-white mb-3">Step-by-Step Guides</h2>
          <p className="text-[#999999] text-[16px]">
            Written instructions for the most common portal tasks
          </p>
        </div>

        <div className="space-y-3">
          <AccordionItem title="How to Log Into Your Customer Portal">
            <p className="mb-4">
              Your media is delivered through Aryeo, a professional real estate media platform. When your media is ready, you'll receive a delivery email from Regalis Realty Media.
            </p>
            
            <h4 className="text-white font-bold mb-2">First-Time Access:</h4>
            <ol className="list-decimal pl-5 mb-4 space-y-1">
              <li>Open the delivery email from Regalis Realty Media</li>
              <li>Click the "View Your Media" or download link in the email</li>
              <li>You'll land on a branded download page with all your listing media</li>
              <li>You can access your photos, videos, 3D tour links, and floor plans from this page</li>
              <li>Bookmark this page for easy return access</li>
            </ol>

            <h4 className="text-white font-bold mb-2">Returning to Your Portal:</h4>
            <p className="mb-4">
              If you have a login account set up, visit the Regalis portal login page (the link is provided in your delivery email). Enter the email address associated with your account. You'll have access to all current and past listings.
            </p>

            <h4 className="text-white font-bold mb-2">Can't Find Your Email?</h4>
            <p>
              Check your spam/junk folder — delivery emails sometimes land there. Search for "Regalis" or "Aryeo" in your inbox. If you still can't find it, contact us at <a href="mailto:contact@regalisrealtymedia.com" className="text-[#c9a84c] hover:underline">contact@regalisrealtymedia.com</a> or call (917) 683-8034 and we'll resend it immediately.
            </p>
          </AccordionItem>

          <AccordionItem title="How to Download Your Listing Photos">
            <p className="mb-4">
              Your photos are available in multiple sizes optimized for different uses.
            </p>

            <h4 className="text-white font-bold mb-2">Download Options:</h4>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li><strong>Web/MLS Size</strong> — Optimized for MLS uploads, website galleries, and email marketing. These are compressed for fast loading while maintaining quality. This is the version you'll upload to your MLS.</li>
              <li><strong>Print Size</strong> — Full-resolution, high-DPI images for print materials like brochures, postcards, mailers, and large format prints. These files are larger.</li>
              <li><strong>Download All (ZIP)</strong> — Downloads all photos in a single ZIP file. This is the fastest way to get everything onto your computer at once.</li>
            </ul>

            <h4 className="text-white font-bold mb-2">How to Download:</h4>
            <ol className="list-decimal pl-5 mb-4 space-y-1">
              <li>Open your delivery link or log into your portal</li>
              <li>Navigate to the listing</li>
              <li>You'll see your photo gallery with download options</li>
              <li>Click "Download All" to get a ZIP file with all photos, or click individual images to download one at a time</li>
              <li>Choose Web/MLS or Print quality depending on your use case</li>
            </ol>

            <h4 className="text-white font-bold mb-2">Downloading on Your Phone:</h4>
            <p className="mb-2">Apple makes ZIP files tricky on iPhone. The easiest way to get photos on your phone:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Open the delivery link in Safari (not the Gmail app)</li>
              <li>Tap individual photos and save them to your camera roll</li>
              <li>Or use the "Files" app on iPhone to open the ZIP and save to your camera roll</li>
              <li>The Aryeo app (if available) lets you save directly to your camera roll</li>
            </ul>

            <p className="bg-[#c9a84c]/10 p-3 rounded-lg border border-[#c9a84c]/20 text-sm">
              <strong className="text-[#c9a84c]">Pro Tip:</strong> Download the Web/MLS versions for your MLS listing and social media posts. Use Print versions only for printed marketing materials — the files are much larger and may be slow to upload online.
            </p>
          </AccordionItem>

          <AccordionItem title="How to Access & Share Your Listing Videos">
            <p className="mb-4">
              Your listing videos are hosted on a dedicated player that's MLS-compliant — no YouTube or Vimeo branding that could violate MLS rules.
            </p>

            <h4 className="text-white font-bold mb-2">Where to Find Your Videos:</h4>
            <ol className="list-decimal pl-5 mb-4 space-y-1">
              <li>Open your delivery link or portal</li>
              <li>Scroll down past photos to the video section</li>
              <li>You'll see your video(s) with a play button and sharing options</li>
            </ol>

            <h4 className="text-white font-bold mb-2">How to Use Your Videos:</h4>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li><strong>MLS:</strong> Copy the direct video link and paste it into your MLS video URL field. The player is MLS-compliant with no outside branding.</li>
              <li><strong>Social Media:</strong> Download the video file directly to post on Instagram, Facebook, TikTok, YouTube, etc. For Reels/Stories, use the vertical version if one was included.</li>
              <li><strong>Email Marketing:</strong> Use the video link in your email campaigns — most email platforms support video links.</li>
              <li><strong>Listing Website:</strong> Your Regalis property website already has the video embedded.</li>
            </ul>

            <h4 className="text-white font-bold mb-2">Downloading the Video File:</h4>
            <p>
              Click the download icon on the video player to save the MP4 file to your device. Video files are large (100-500MB) so this works best on WiFi.
            </p>
          </AccordionItem>

          <AccordionItem title="How to Use Your 3D Tour & Floor Plan">
            <h4 className="text-white font-bold mb-2">3D Tour:</h4>
            <p className="mb-2">
              Your 3D Tour is an interactive Matterport-style walkthrough. Buyers can navigate room-to-room, look around, and explore the home from their device.
            </p>
            <p className="mb-2">How to use it:</p>
            <ol className="list-decimal pl-5 mb-4 space-y-1">
              <li>Copy the 3D Tour link from your delivery page</li>
              <li>Paste it into your MLS "Virtual Tour" URL field</li>
              <li>The tour is Zillow-compatible and will work on all major real estate platforms</li>
              <li>You can also embed it on your personal website — contact us for the embed code</li>
            </ol>

            <h4 className="text-white font-bold mb-2">Floor Plan:</h4>
            <p className="mb-2">
              Your floor plan is delivered as a high-resolution image file (JPG or PNG).
            </p>
            <p className="mb-2">How to use it:</p>
            <ol className="list-decimal pl-5 mb-4 space-y-1">
              <li>Download the floor plan image from your delivery page</li>
              <li>Upload it to your MLS as an additional photo (place it at the end of your photo set)</li>
              <li>Include it in your print materials, listing presentations, and brochures</li>
              <li>Your property website already displays it</li>
            </ol>
          </AccordionItem>

          <AccordionItem title="How to Use Your Custom Property Website">
            <p className="mb-4">
              Every delivered listing includes a custom single-property website. This is a branded, standalone page featuring your photos, videos, property details, and agent contact information.
            </p>

            <h4 className="text-white font-bold mb-2">What It Includes:</h4>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Full photo gallery with slideshow</li>
              <li>Embedded video (if ordered)</li>
              <li>3D Tour embed (if ordered)</li>
              <li>Floor plan display (if ordered)</li>
              <li>Property details and description</li>
              <li>Your agent headshot, contact info, and branding</li>
            </ul>

            <h4 className="text-white font-bold mb-2">How to Use It:</h4>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Share the website URL directly with potential buyers and other agents</li>
              <li>Include it in your MLS "Virtual Tour" or "Media" URL field</li>
              <li>Add it to your email marketing and social media posts</li>
              <li>Use it in listing presentations to show sellers the full marketing package</li>
              <li>The URL is permanent and will remain active for the duration of your listing</li>
            </ul>

            <h4 className="text-white font-bold mb-2">Customizing Your Website:</h4>
            <p>
              If you need to update property details, change the description, or adjust anything on the website, contact us at <a href="mailto:contact@regalisrealtymedia.com" className="text-[#c9a84c] hover:underline">contact@regalisrealtymedia.com</a> and we'll make the changes for you.
            </p>
          </AccordionItem>

          <AccordionItem title="Creating Marketing Materials from Your Media">
            <p className="mb-4">
              Your portal may include access to built-in marketing tools that let you create professional listing materials directly from your delivered photos.
            </p>

            <h4 className="text-white font-bold mb-2">Available Marketing Materials:</h4>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li><strong>Social Media Posts</strong> — Pre-designed templates sized for Instagram, Facebook, and LinkedIn. Drop in your listing photo, add your details, and download.</li>
              <li><strong>Listing Flyers</strong> — Print-ready flyer templates with your photos, property info, and agent branding.</li>
              <li><strong>Postcards</strong> — Direct mail postcard designs featuring your listing photography.</li>
              <li><strong>Digital Ads</strong> — Banner and ad creative sized for Facebook Ads, Google Display, and other platforms.</li>
            </ul>

            <h4 className="text-white font-bold mb-2">How to Access:</h4>
            <ol className="list-decimal pl-5 mb-4 space-y-1">
              <li>Log into your portal</li>
              <li>Navigate to the listing</li>
              <li>Look for the "Marketing" tab or section</li>
              <li>Choose a template, customize, and download</li>
            </ol>

            <p className="mt-4 text-sm text-[#999]">
              <strong>Not seeing marketing tools?</strong> This feature depends on your package. Contact us to learn more.
            </p>
          </AccordionItem>
        </div>
      </div>
    </section>
  );
}
