import Link from "next/link"
import { Button } from "../ui/Button"
import { ChevronRight, Facebook, Linkedin, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1A1F24] text-white">
      <div className="container mx-auto px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-[#00B6E6] text-xl font-semibold mb-4">Company</h2>
            <ul className="space-y-3 text-xs text-[#bcbebf]">
              {[
                "About Us",
                "Careers",
                "Global Leadership",
                "Media Center",
                "Investors",
                "Awards",
                "Global Office Locations",
                "Contact Us",
                "CCaaS",
                "Customer Experience",
                "NICE Public Safety",
                "NICE Actimize",
                "NICE RPA",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#00B6E6] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners Column */}
          <div>
            <h2 className="text-[#00B6E6] text-xl font-semibold mb-4">Partners</h2>
            <ul className="space-y-3 text-xs text-[#bcbebf]">
              {[
                "NICE Partners Overview",
                "Developer Partners (DEVone)",
                "CXone Partner Portal",
                "NICE Help Partner Portal",
                "NICE User Group",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#00B6E6] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support Column */}
          <div>
            <h2 className="text-[#00B6E6] text-xl font-semibold mb-4">Customer Support</h2>
            <ul className="space-y-3 text-xs text-[#bcbebf]">
              {["Customer Support Overview", "CXone Support Login", "NICE Customer Support"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#00B6E6] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[#fcf5ea] text-xl font-semibold mb-4">Want to Learn More?</h2>
           
             <div className="hidden lg:flex items-center gap-5 pb-10">
                        <button className="flex items-center gap-2 h-10 px-4 py-1 transition duration-500 bg-cyan-400 hover:border-cyan-400 hover:border text-black font-semibold rounded-full shadow-md hover:text-white hover:bg-black">
                        Join the Newsletter <ChevronRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>

            <h3 className="text-white text-xl font-semibold mb-2">STAY CONNECTED</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#00B6E6] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-[#00B6E6] transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-[#00B6E6] transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-[#00B6E6] transition-colors">
                <Youtube className="h-5 w-5"/>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-4 text-[#bcbebf] font-bold justify-center md:justify-start">
              {["Terms of Use", "Site Map", "Privacy Policy", "Legal", "Cookies Settings", "Accessibility"].map(
                (item) => (
                  <Link key={item} href="#" className="text-sm hover:text-[#00B6E6] transition-colors">
                    {item}
                  </Link>
                ),
              )}
            </div>
            <div className="text-sm text-gray-400">© 2025 NICE</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

