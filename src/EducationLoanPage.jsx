import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Select } from "./components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

const EducationLoanPage = () => {
  const [nationality, setNationality] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", { nationality });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-teal-500 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 md:mr-8 md:w-1/2">
            <h1 className="text-4xl font-bold mb-2">Education Loan</h1>
            <p className="text-xl">
              Know about everything starting from the basics of an Education
              Loan, The process, and Types of Education Loans, etc.
            </p>
          </div>
          <Card className="w-full md:w-1/2 bg-white text-gray-800">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Check your Education Loan Eligibility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name *
                  </label>
                  <Input id="fullName" placeholder="Full Name" required />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="nationality"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select your Nationality *
                  </label>
                  <Select
                    id="nationality"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    required
                  >
                    <option value="">Nationality</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="in">India</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                  </Select>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600"
                >
                  Proceed
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <a
                  href="#what-is-education-loan"
                  className="text-blue-600 hover:underline"
                >
                  What Is An Education Loan?
                </a>
              </li>
              <li>
                <a
                  href="#secured-vs-unsecured"
                  className="text-blue-600 hover:underline"
                >
                  Secured vs Unsecured Education Loans
                </a>
              </li>
              <li>
                <a
                  href="#comparing-loans"
                  className="text-blue-600 hover:underline"
                >
                  Comparing Education Loans from Different Banks & NBFC
                </a>
              </li>
              <li>
                <a href="#top-nbfcs" className="text-blue-600 hover:underline">
                  Top 4 Education Loan NBFCs in India
                </a>
              </li>
              <li>
                <a
                  href="#how-to-apply"
                  className="text-blue-600 hover:underline"
                >
                  How to Apply for an Education Loan Online?
                </a>
              </li>
              <li>
                <a
                  href="#documents-needed"
                  className="text-blue-600 hover:underline"
                >
                  Documents Needed to Apply for an Education Loan
                </a>
              </li>
              <li>
                <a
                  href="#calculate-emi"
                  className="text-blue-600 hover:underline"
                >
                  How to Calculate EMI for Education Loans?
                </a>
              </li>
              <li>
                <a
                  href="#loan-repayment"
                  className="text-blue-600 hover:underline"
                >
                  Education Loan Repayment
                </a>
              </li>
              <li>
                <a
                  href="#loan-eligibility"
                  className="text-blue-600 hover:underline"
                >
                  Education Loan Eligibility
                </a>
              </li>
              <li>
                <a
                  href="#cibil-score"
                  className="text-blue-600 hover:underline"
                >
                  CIBIL Score for An Education Loan
                </a>
              </li>
            </ol>
          </div>
          <div className="md:w-1/3">
            <Card className="bg-white text-gray-800">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Top Banks for Education Loan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a href="#sbi" className="text-black hover:underline">
                      SBI Education Loan
                    </a>
                  </li>
                  <li>
                    <a href="#hdfc" className="text-black hover:underline">
                      HDFC Education Loan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#bank-of-baroda"
                      className="text-black hover:underline"
                    >
                      Bank of Baroda Education Loan
                    </a>
                  </li>
                  <li>
                    <a href="#canara" className="text-black hover:underline">
                      Canara Bank Education Loan
                    </a>
                  </li>
                  <li>
                    <a href="#avanse" className="text-black hover:underline">
                      Avanse Education Loan
                    </a>
                  </li>
                  <li>
                    <a href="#axis" className="text-black hover:underline">
                      Axis Bank Education Loan
                    </a>
                  </li>
                  <li>
                    <a href="#icici" className="text-black hover:underline">
                      ICICI Bank Education Loan
                    </a>
                  </li>
                  <li>
                    <a href="#pnb" className="text-black hover:underline">
                      Punjab National Bank Education Loan
                    </a>
                  </li>
                  <li>
                    <a href="#union" className="text-black hover:underline">
                      Union Bank of India Education Loan
                    </a>
                  </li>
                  <li>
                    <a href="#kotak" className="text-black hover:underline">
                      Kotak Mahindra Bank Education Loan
                    </a>
                  </li>
                  <li>
                    <a href="#idbi" className="text-black hover:underline">
                      IDBI Bank Education Loan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#hdfc-credila"
                      className="text-black hover:underline"
                    >
                      HDFC Credila Education Loan
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EducationLoanPage;
