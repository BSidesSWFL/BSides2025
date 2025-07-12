import Link from "next/link"
import Image from "next/image"
import { Linkedin, NotebookPen } from "lucide-react"
import { SiX, SiYoutube, SiDiscord, SiFacebook, SiBluesky } from "@icons-pack/react-simple-icons"

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full bg-gradient-to-r from-purple-900 via-purple-800 to-pink-800 backdrop-blur-lg border-t border-purple-500/20 shadow-2xl opacity-97 mt-auto md:h-[14.5vh] lg:h-[16vh]">
      <div className="container mx-auto px-4 lg:px-6 py-2">
        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-1 md:gap-2 lg:gap-4">
          <SocialLink href="https://x.com/BSides_SWFL" icon={SiX} label="Twitter" />
          <SocialLink
            href="https://www.facebook.com/people/BSides-SWFL/61566492254339/"
            icon={SiFacebook}
            label="Facebook"
          />
          <SocialLink href="https://discord.gg/yHfHPZ3JRb" icon={SiDiscord} label="Discord" />
          <SocialLink href="https://www.youtube.com/@BSidesSWFL" icon={SiYoutube} label="YouTube" />
          <SocialLink href="https://bsky.app/profile/bsidesswfl.bsky.social" icon={SiBluesky} label="BlueSky" />
          <SocialLink href="https://www.linkedin.com/company/bsides-swfl/" icon={Linkedin} label="LinkedIn" />
          <SocialLink href="/contactus" icon={NotebookPen} label="Contact Us" />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-2"></div>

        {/* Footer Content */}
        <div className="space-y-2">
          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/70 text-sm font-medium">© 2025 BSides SWFL. All rights reserved.</p>
          </div>

          {/* Powered By */}
          <div className="text-center">
            <p className="text-white/60 text-sm flex items-center justify-center gap-2">
              Powered by <a href="https://github.com/bsides-swfl/bsides-swfl.github.io" className="text-white/70 hover:text-white transition-all duration-200">
                <span className="sr-only">BSides SWFL</span>
                <Image src="/bsideslogo.ico" width={40} height={40} alt="BSides Logo" className="object-contain" />
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-2 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 rounded-full opacity-60"></div>
        </div>
      </div>
    </footer>
  )
}

// Social Media Link Component
const SocialLink = ({ href, icon: Icon, label }) => (
  <Link
    href={href}
    className="group p-3 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-xl backdrop-blur-sm border border-transparent hover:border-white/20 hover:shadow-lg"
    aria-label={label}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noreferrer" : undefined}
  >
    <Icon size={20} className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
  </Link>
)
