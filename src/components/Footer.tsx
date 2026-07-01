export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-10 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        <p className="text-[#666666] text-[14px] mb-4">
          © 2026 Regalis Realty Media
        </p>
        <div className="flex gap-6 items-center">
          <a href="https://termsandconditions.regalisrealtymedia.com/" className="text-[#c9a84c] text-[14px] hover:underline">
            Terms & Conditions
          </a>
          <a href="https://privacypolicy.regalisrealtymedia.com/" className="text-[#c9a84c] text-[14px] hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
