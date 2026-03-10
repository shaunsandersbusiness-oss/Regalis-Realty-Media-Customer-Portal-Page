export default function HelpCTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[600px] mx-auto bg-[#0a0a0a] border border-[#c9a84c]/20 rounded-2xl p-10 md:p-12 text-center shadow-[0_0_40px_rgba(201,168,76,0.05)]">
        <h2 className="text-[28px] font-bold text-white mb-3">Still Need Help?</h2>
        <p className="text-[#999] text-[16px] mb-8">
          We're here for you. Reach out anytime and we'll get your media sorted.
        </p>

        <div className="space-y-2 mb-8">
          <div className="text-[15px] text-[#D4D4D4]">
            📧 <a href="mailto:contact@regalisrealtymedia.com" className="text-[#c9a84c] hover:underline ml-2">contact@regalisrealtymedia.com</a>
          </div>
          <div className="text-[15px] text-[#D4D4D4]">
            📞 <span className="text-[#c9a84c] ml-2">(917) 683-8034</span>
          </div>
          <div className="text-[15px] text-[#D4D4D4]">
            📅 <a href="https://regalisrealtymedia.com/calendar" className="text-[#c9a84c] hover:underline ml-2">Book a Call → regalisrealtymedia.com/calendar</a>
          </div>
        </div>

        <a 
          href="https://www.regalisrealtymedia.com/calendar"
          className="inline-block bg-[#c9a84c] text-black text-[16px] font-bold py-3.5 px-8 rounded-lg transition-all duration-300 hover:shadow-[0_0_24px_rgba(201,168,76,0.25)] hover:bg-[#d4b55d]"
        >
          CONTACT US →
        </a>
      </div>
    </section>
  );
}
