import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SearchForm from "./SearchForm";
export default function Component() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <SearchForm />
      {isOpen && (
        <div className="z-50 inset-0 fixed bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <img
                  src="https://www.wemakescholars.com/themes/wms/images/logo.webp"
                  alt="WE MAKE SCHOLARS Logo"
                  className="h-16 p-1"
                />
              </div>
              <h2 className="text-xl font-semibold text-center mb-4">
                The most trusted Education Finance Platform supported by the
                Government
              </h2>
              <p className="text-center mb-4">
                Enter your registered Email address to login
              </p>
              <Input
                type="email"
                placeholder="Enter Email Address"
                className="w-full mb-4"
              />
              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                Proceed
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
