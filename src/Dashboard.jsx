import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Users, GraduationCap, Building2, FileText, Menu } from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const sidebarItems = [
    { name: "Overview", icon: BarChart, tab: "overview", color: "text-blue-500" },
    { name: "Education Loan Enquiries", icon: FileText, tab: "education-loan", color: "text-green-500" },
    { name: "Scholarship Enquiries", icon: GraduationCap, tab: "scholarship", color: "text-purple-500" },
    { name: "Add Scholarship", icon: Users, tab: "add-scholarship", color: "text-yellow-500" },
    { name: "Add Company Scholarship", icon: Building2, tab: "add-company-scholarship", color: "text-red-500" },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg transition-all duration-300 ease-in-out ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-4 flex justify-between items-center">
          <h1 className={`text-2xl font-bold text-gray-800 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Admin</h1>
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <nav className="mt-4">
          {sidebarItems.map((item) => (
            <button
              key={item.tab}
              className={`flex items-center w-full px-4 py-3 text-left transition-all duration-200 ${
                activeTab === item.tab ? 'bg-gray-200' : 'hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(item.tab)}
            >
              <item.icon className={`h-6 w-6 ${item.color}`} />
              <span className={`ml-2 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0'}`}>{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto p-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="bg-white p-1 rounded-lg shadow-md">
            {sidebarItems.map((item) => (
              <TabsTrigger
                key={item.tab}
                value={item.tab}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  activeTab === item.tab ? `bg-gray-200 ${item.color}` : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">Overview</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {sidebarItems.map((item, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-200 hover:shadow-lg">
                  <CardHeader className={`flex flex-row items-center justify-between space-y-0 ${item.color.replace('text', 'bg')} bg-opacity-10 p-4`}>
                    <CardTitle className="text-lg font-semibold">{item.name}</CardTitle>
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="text-3xl font-bold">{Math.floor(Math.random() * 1000)}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education-loan" className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">Education Loan Enquiries</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Card key={i} className="overflow-hidden transition-all duration-200 hover:shadow-lg">
                  <CardHeader className="bg-green-500 bg-opacity-10 p-4">
                    <CardTitle className="text-lg font-semibold text-green-700">Loan Enquiry #{i}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-2">
                    <p><strong>Name:</strong> John Doe</p>
                    <p><strong>Email:</strong> john.doe@example.com</p>
                    <p><strong>Loan Amount:</strong> $10,000</p>
                    <p><strong>Purpose:</strong> Tuition fees</p>
                    <Button className="mt-2 w-full bg-green-500 hover:bg-green-600">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scholarship" className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">Scholarship Enquiries</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Card key={i} className="overflow-hidden transition-all duration-200 hover:shadow-lg">
                  <CardHeader className="bg-purple-500 bg-opacity-10 p-4">
                    <CardTitle className="text-lg font-semibold text-purple-700">Scholarship Enquiry #{i}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-2">
                    <p><strong>Name:</strong> Jane Smith</p>
                    <p><strong>Email:</strong> jane.smith@example.com</p>
                    <p><strong>Scholarship:</strong> Merit Scholarship</p>
                    <p><strong>Field of Study:</strong> Computer Science</p>
                    <Button className="mt-2 w-full bg-purple-500 hover:bg-purple-600">View Application</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="add-scholarship" className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">Add New Scholarship</h2>
            <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="scholarship-name" className="text-lg font-semibold">Scholarship Name</Label>
                  <Input id="scholarship-name" placeholder="Enter scholarship name" className="w-full p-2 border rounded" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="scholarship-number" className="text-lg font-semibold">Number of Scholarships</Label>
                  <Input id="scholarship-number" type="number" placeholder="Enter number of scholarships" className="w-full p-2 border rounded" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="scholarship-type" className="text-lg font-semibold">Scholarship Type</Label>
                  <Select>
                    <SelectTrigger id="scholarship-type" className="w-full p-2 border rounded">
                      <SelectValue placeholder="Select scholarship type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="merit">Merit-based</SelectItem>
                      <SelectItem value="need">Need-based</SelectItem>
                      <SelectItem value="research">Research</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">Add Scholarship</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="add-company-scholarship" className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">Add Company Scholarship</h2>
            <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name" className="text-lg font-semibold">Company Name</Label>
                  <Input id="company-name" placeholder="Enter company name" className="w-full p-2 border rounded" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-scholarship-type" className="text-lg font-semibold">Scholarship Type</Label>
                  <Select>
                    <SelectTrigger id="company-scholarship-type" className="w-full p-2 border rounded">
                      <SelectValue placeholder="Select scholarship type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="internship">Internship</SelectItem>
                      <SelectItem value="full-time">Full-time employment</SelectItem>
                      <SelectItem value="research">Research grant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-scholarship-number" className="text-lg font-semibold">Number of Scholarships</Label>
                  <Input id="company-scholarship-number" type="number" placeholder="Enter number of scholarships" className="w-full p-2 border rounded" />
                </div>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Add Company Scholarship</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}