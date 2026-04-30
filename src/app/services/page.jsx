"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Phone,
  Clock,
  Shield,
  Heart,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Camera,
  Wrench,
  Baby,
  Stethoscope,
  Activity,
  Eye,
} from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      id: "general",
      title: "General Dentistry",
      icon: <Stethoscope className="h-6 w-6" />,
      description: "Comprehensive dental care for optimal oral health",
      services: [
        {
          name: "Routine Cleanings & Exams",
          description:
            "Professional cleanings and comprehensive oral health examinations",
          features: [
            "Deep cleaning",
            "Plaque & tartar removal",
            "Oral cancer screening",
            "Digital X-rays",
          ],
          duration: "60-90 minutes",
          price: "$120-180",
        },
        {
          name: "Preventive Care",
          description: "Proactive treatments to prevent dental problems",
          features: [
            "Fluoride treatments",
            "Dental sealants",
            "Mouth guards",
            "Oral hygiene education",
          ],
          duration: "30-60 minutes",
          price: "$50-120",
        },
        {
          name: "Fillings & Restorations",
          description:
            "Repair cavities and restore tooth function with natural-looking materials",
          features: [
            "Composite fillings",
            "Inlay & onlay restorations",
            "Emergency repairs",
            "Pain-free procedures",
          ],
          duration: "45-90 minutes",
          price: "$150-350",
        },
        {
          name: "Root Canal Therapy",
          description:
            "Save infected teeth with gentle, effective root canal treatment",
          features: [
            "Digital imaging",
            "Local anesthesia",
            "Single-visit treatment",
            "Crown placement",
          ],
          duration: "90-120 minutes",
          price: "$800-1200",
        },
      ],
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry",
      icon: <Star className="h-6 w-6" />,
      description: "Transform your smile with our aesthetic dental treatments",
      services: [
        {
          name: "Teeth Whitening",
          description:
            "Professional whitening for a brighter, more confident smile",
          features: [
            "In-office whitening",
            "Take-home kits",
            "Up to 8 shades whiter",
            "Long-lasting results",
          ],
          duration: "60-90 minutes",
          price: "$400-600",
        },
        {
          name: "Porcelain Veneers",
          description:
            "Ultra-thin shells that cover imperfections for perfect teeth",
          features: [
            "Custom design",
            "Natural appearance",
            "Stain resistant",
            "Long-lasting",
          ],
          duration: "2-3 visits",
          price: "$1000-1500 per tooth",
        },
        {
          name: "Dental Bonding",
          description:
            "Repair chips, gaps, and minor imperfections quickly and affordably",
          features: [
            "Same-day treatment",
            "Conservative approach",
            "Natural color matching",
            "Minimally invasive",
          ],
          duration: "30-60 minutes",
          price: "$300-600",
        },
        {
          name: "Smile Makeovers",
          description:
            "Comprehensive smile transformation combining multiple treatments",
          features: [
            "Complete consultation",
            "Digital smile preview",
            "Coordinated treatment plan",
            "Stunning results",
          ],
          duration: "Multiple visits",
          price: "Custom pricing",
        },
      ],
    },
    {
      id: "restorative",
      title: "Restorative Dentistry",
      icon: <Wrench className="h-6 w-6" />,
      description: "Restore damaged teeth to full function and appearance",
      services: [
        {
          name: "Dental Crowns & Bridges",
          description:
            "Durable, natural-looking restorations for damaged or missing teeth",
          features: [
            "Porcelain or ceramic materials",
            "Custom color matching",
            "Strong & durable",
            "Same-day options",
          ],
          duration: "2-3 visits",
          price: "$900-1500 per crown",
        },
        {
          name: "Dental Implants",
          description:
            "Permanent tooth replacement that looks and feels natural",
          features: [
            "Titanium implants",
            "Natural appearance",
            "Permanent solution",
            "Bone preservation",
          ],
          duration: "3-6 months",
          price: "$3000-5000 per implant",
        },
        {
          name: "Dentures",
          description:
            "Complete or partial dentures for missing teeth replacement",
          features: [
            "Full & partial dentures",
            "Comfortable fit",
            "Natural appearance",
            "Improved function",
          ],
          duration: "4-6 weeks",
          price: "$1200-3000",
        },
        {
          name: "Emergency Dental Care",
          description:
            "Immediate treatment for dental emergencies and severe pain",
          features: [
            "Same-day appointments",
            "Pain relief",
            "Emergency repairs",
            "After-hours availability",
          ],
          duration: "30-90 minutes",
          price: "$200-800",
        },
      ],
    },
    {
      id: "pediatric",
      title: "Pediatric Dentistry",
      icon: <Baby className="h-6 w-6" />,
      description: "Gentle, specialized dental care for children and teenagers",
      services: [
        {
          name: "Children's Cleanings",
          description:
            "Gentle cleanings designed specifically for young patients",
          features: [
            "Kid-friendly environment",
            "Gentle techniques",
            "Fluoride treatments",
            "Oral health education",
          ],
          duration: "30-45 minutes",
          price: "$80-120",
        },
        {
          name: "Dental Sealants",
          description:
            "Protective coatings to prevent cavities in children's teeth",
          features: [
            "Cavity prevention",
            "Painless application",
            "Long-lasting protection",
            "Insurance covered",
          ],
          duration: "15-30 minutes",
          price: "$40-60 per tooth",
        },
        {
          name: "Pediatric Orthodontics",
          description:
            "Early orthodontic intervention and traditional braces for children",
          features: [
            "Early intervention",
            "Traditional braces",
            "Growth guidance",
            "Phase treatment",
          ],
          duration: "12-24 months",
          price: "$3000-6000",
        },
        {
          name: "Special Needs Dentistry",
          description:
            "Specialized care for children with special healthcare needs",
          features: [
            "Adapted techniques",
            "Comfort-focused approach",
            "Behavioral management",
            "Family support",
          ],
          duration: "45-90 minutes",
          price: "Insurance dependent",
        },
      ],
    },
  ];

  const technologies = [
    {
      name: "Digital X-Rays",
      description: "90% less radiation with instant, high-quality images",
      icon: <Camera className="h-8 w-8 text-blue-600" />,
    },
    {
      name: "CEREC Same-Day Crowns",
      description: "Custom crowns designed and created in a single visit",
      icon: <Zap className="h-8 w-8 text-blue-600" />,
    },
    {
      name: "Laser Dentistry",
      description: "Minimally invasive treatments with faster healing",
      icon: <Activity className="h-8 w-8 text-blue-600" />,
    },
    {
      name: "3D Imaging",
      description: "Precise treatment planning with advanced 3D technology",
      icon: <Eye className="h-8 w-8 text-blue-600" />,
    },
  ];

  const insuranceProviders = [
    "Delta Dental",
    "Cigna",
    "Aetna",
    "MetLife",
    "Blue Cross Blue Shield",
    "Humana",
    "Guardian",
    "Principal",
    "United Healthcare",
    "Anthem",
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Comprehensive Dental Care
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine cleanings to complex procedures, we offer complete
              dental solutions for patients of all ages using the latest
              technology and techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="general" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto">
              {serviceCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-center space-y-2 p-4 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700"
                >
                  {category.icon}
                  <span className="text-sm font-medium">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {serviceCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="space-y-8"
              >
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.services.map((service, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-shadow duration-300"
                    >
                      <CardHeader>
                        <CardTitle className="text-xl">
                          {service.name}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span>{service.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">{service.price}</Badge>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900">
                            Includes:
                          </h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center space-x-2 text-sm text-gray-600"
                              >
                                <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0">
                          Schedule Appointment
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
              Advanced Technology
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              State-of-the-Art Equipment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in the latest dental technology to provide more accurate
              diagnoses, comfortable treatments, and better outcomes for our
              patients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financing & Insurance Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                  Affordable Care
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Flexible Payment Options
                </h2>
                <p className="text-lg text-gray-600">
                  We believe everyone deserves access to quality dental care.
                  That&apos;s why we offer multiple payment options and work
                  with most insurance providers.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Insurance Accepted
                    </h3>
                    <p className="text-gray-600">
                      We work with most major insurance providers
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Flexible Financing
                    </h3>
                    <p className="text-gray-600">
                      Monthly payment plans available
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Membership Plans
                    </h3>
                    <p className="text-gray-600">
                      Special rates for uninsured patients
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Insurance Providers We Accept
                </h3>
                <p className="text-gray-600">
                  We&apos;re in-network with most major insurance providers.
                  Contact us to verify your coverage.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {insuranceProviders.map((provider, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-sm text-gray-700"
                  >
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span>{provider}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                Check Your Coverage
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Care Section */}
      <section className="bg-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                Emergency Care
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Dental Emergencies? We&apos;re Here to Help
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dental emergencies can happen anytime. We offer same-day
                appointments for urgent dental issues and provide after-hours
                emergency care when you need it most.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 space-y-4">
                <Phone className="h-10 w-10 text-red-500 mx-auto" />
                <h3 className="text-xl font-bold text-gray-900">
                  Call for Emergencies
                </h3>
                <p className="text-gray-600">
                  24/7 emergency hotline for urgent dental care
                </p>
                <Button
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-50"
                >
                  +92 300 1234567
                </Button>
              </Card>
              <Card className="p-6 space-y-4">
                <Clock className="h-10 w-10 text-red-500 mx-auto" />
                <h3 className="text-xl font-bold text-gray-900">
                  Same-Day Appointments
                </h3>
                <p className="text-gray-600">
                  We reserve time slots for emergency patients every day
                </p>
                <Button
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-50"
                >
                  Book Emergency Visit
                </Button>
              </Card>
              <Card className="p-6 space-y-4">
                <Heart className="h-10 w-10 text-red-500 mx-auto" />
                <h3 className="text-xl font-bold text-gray-900">Pain Relief</h3>
                <p className="text-gray-600">
                  Immediate pain relief and treatment for dental emergencies
                </p>
                <Button
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-50"
                >
                  Learn More
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto">
              Schedule your appointment today and experience the difference of
              comprehensive, gentle dental care in a modern, comfortable
              environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Call +92 300 1234567
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
