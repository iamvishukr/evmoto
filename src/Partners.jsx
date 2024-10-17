import { Link } from "react-router-dom";

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Associated Lending Partners</h1>
      <p className="text-center text-gray-600 mb-8">
        Don't let finance stop your dreams. Apply online for study abroad education loan- with/ without collateral
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <img src="https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo-768x432.png" alt="SBI Logo" width={100} height={100} className="mx-auto" />
        <img src="https://companieslogo.com/img/orig/BANKBARODA.NS-6790b239.png?t=1720244490" alt="Bank of Baroda Logo" width={100} height={100} className="mx-auto" />
        <img src="https://companieslogo.com/img/orig/KARURVYSYA.NS-2afed839.png?t=1720244492" alt="Karur Vysya Bank Logo" width={100} height={100} className="mx-auto" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUN820yDwe0Zoncp4O4X4t4u6sniGMSmVfHg&s" alt="PNB Logo" width={100} height={100} className="mx-auto" />
        <img src="https://www.researchgate.net/publication/362715080/figure/fig5/AS:11431281079411620@1660702920120/Example-Axis-Bank-logo.ppm" alt="Axis Bank Logo" width={100} height={100} className="mx-auto" />
        <div className="flex items-center justify-center">
          <span className="text-xl font-semibold bg-white p-6">+9 more Pvt banks /NBFCs</span>
        </div>
      </div>

      <div className="text-center mb-8">
        <button className="px-4 py-2 border  border-gray-300 rounded-md text-[#189E8C] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#189E8C] border-[#189E8C]">
          Apply for Education loan
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Latest Scholarships",
            items: [
              "NUS Overseas Graduate Scholarship 2024",
              "Midlands4Cities Open Doctoral Awards for Students at The University of Leicester 2024",
              "Francis and Judith Croak Scholarship at University of Wisconsin 2024",
              "Enhancing coarse particle flotation limits and application, using novel diagnostics and feed preparation at University of Queensland 2024",
              "Graduate Award Competition at University of Calgary, Canada 2024"
            ]
          },
          {
            title: "Popular Scholarships",
            items: [
              "ServiceScape Scholarship 2024",
              "Study Scholarships - Postgraduate Studies in the Fields of Fine Art, Design, Visual Communication and Film - DAAD 2025",
              "BeArt Presets Academic Scholarships 2024",
              "Ritchie-Jennings Memorial Scholarship Program 2025-26",
              "International Fellowships at American Association For University Women 2024-25"
            ]
          },
          {
            title: "Study abroad Tips",
            items: [
              "950+ USA scholarships for International students [2018-19]",
              "How I failed my Fulbright Scholarship interview",
              "A guide to education loan without collateral for Indian students",
              "Everything you need to know about education loan for abroad studies",
              "Prodigy Finance and Indian Public banks: Myth vs Reality"
            ]
          }
        ].map((card, index) => (
          <div key={index} className="bg-gray-50 rounded-lg shadow-sm overflow-hidden flex flex-col">
            <div className="p-6">
              <h2 className="text-2xl font-normal mb-4">{card.title}</h2>
              <div className="space-y-2 flex-grow">
                {card.items.map((item, itemIndex) => (
                  <Link key={itemIndex} href="#" className="block text-blue-600 hover:underline">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-auto p-6 pt-0">
              <button className="w-full px-4 py-2 border border-teal-600 rounded-md text-teal-600 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                View all
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}